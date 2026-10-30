import axios from "axios";

const HOME_DASHBOARD_CACHE_PREFIX = "willowood-home-dashboard-http-cache-v1";

// The cache exists to stop the dashboard's many components from re-requesting
// the same endpoints while the user moves around inside one session. It must
// never outlive that session, otherwise the dashboard keeps showing yesterday's
// numbers after a reload or a re-login.
const CACHE_TTL_MS = 5 * 60 * 1000;

const pendingDashboardRequests = new Map();

const CACHEABLE_PATHS = new Set([
  "/api/get_cp",
  "/api/get_rp",
  "/api/get_business_segment",
  "/api/get_business_unit",
  "/api/get_zone",
  "/api/get_region",
  "/api/get_territory",
  "/api/getsapCollectiondata",
  "/api/get_dealer_count",
  "/api/get_rollingdata_based_on_roll_t",
  "/api/get_rollingdata_based_on_roll_r",
  "/api/get_rollingdata_based_on_roll_z",
  "/api/get_rollingdata_based_on_roll_bu",
  "/api/get_rollingdata_based_on_roll_bg",
  "/api/get_collectiondata_based_on_roll_t",
  "/api/get_collectiondata_based_on_roll_r",
  "/api/get_collectiondata_based_on_roll_z",
  "/api/get_collectiondata_based_on_roll_bu",
  "/api/get_collectiondata_based_on_roll_bg",
  "/api/get_order_info",
  "/api/SA_sales_data_dashboard",
  "/api/get_last_sales_and_collection_update",
  "/api/SA_sales_target",
  "/api/SA_sales_Analytical",
  "/api/get_image",
]);

const safeParseJson = (value, fallback = null) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    return fallback;
  }
};

const normalizeCacheValue = (value) => {
  if (Array.isArray(value)) {
    return value.map(normalizeCacheValue);
  }

  if (value && typeof value === "object") {
    return Object.keys(value)
      .sort()
      .reduce((result, key) => {
        result[key] = normalizeCacheValue(value[key]);
        return result;
      }, {});
  }

  return value;
};

const getUserCacheKey = () => {
  if (typeof window === "undefined") return "server";

  const userInfo = safeParseJson(
    window.localStorage.getItem("userinfo") || "{}",
    {}
  );

  return (
    userInfo?.user_id ||
    window.localStorage.getItem("uid") ||
    userInfo?.emp_code ||
    userInfo?.c_id ||
    window.localStorage.getItem("phone_number") ||
    "anonymous"
  );
};

const isHomeDashboardPath = () => {
  if (typeof window === "undefined") return false;

  return window.location.pathname === "/" || window.location.pathname === "/dashboard";
};

const getRequestPath = (requestUrl = "") => {
  if (typeof window === "undefined") return requestUrl;

  try {
    return new URL(requestUrl, window.location.origin).pathname;
  } catch (error) {
    return requestUrl;
  }
};

const createCacheKey = (config) => {
  const requestPath = getRequestPath(config.url);
  const params = normalizeCacheValue(config.params || {});

  return `${HOME_DASHBOARD_CACHE_PREFIX}:${getUserCacheKey()}:${requestPath}:${JSON.stringify(params)}`;
};

const isCacheableDashboardRequest = (config) => {
  if (!isHomeDashboardPath()) return false;
  if ((config.method || "get").toLowerCase() !== "get") return false;

  return CACHEABLE_PATHS.has(getRequestPath(config.url));
};

const readCachedResponse = (cacheKey) => {
  if (typeof window === "undefined") return null;

  const storedValue = window.localStorage.getItem(cacheKey);
  if (!storedValue) return null;

  const parsedValue = safeParseJson(storedValue);
  if (!parsedValue || !Object.prototype.hasOwnProperty.call(parsedValue, "data")) {
    window.localStorage.removeItem(cacheKey);
    return null;
  }

  const savedAt = Number(parsedValue.savedAt) || 0;
  if (!savedAt || Date.now() - savedAt > CACHE_TTL_MS) {
    window.localStorage.removeItem(cacheKey);
    return null;
  }

  return parsedValue;
};

const getDashboardCacheKeys = () => {
  if (typeof window === "undefined") return [];

  const keys = [];

  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index);

    if (key?.startsWith(HOME_DASHBOARD_CACHE_PREFIX)) {
      keys.push(key);
    }
  }

  return keys;
};

const pruneOldDashboardCache = (keepKey) => {
  if (typeof window === "undefined") return;

  const keys = getDashboardCacheKeys()
    .filter((key) => key !== keepKey)
    .map((key) => {
      const parsedValue = safeParseJson(window.localStorage.getItem(key), {});
      return { key, savedAt: parsedValue?.savedAt || 0 };
    })
    .sort((a, b) => a.savedAt - b.savedAt);

  keys.slice(0, Math.max(1, Math.ceil(keys.length / 3))).forEach(({ key }) => {
    window.localStorage.removeItem(key);
  });
};

const writeCachedResponse = (cacheKey, response) => {
  if (typeof window === "undefined") return;

  const cacheValue = JSON.stringify({
    savedAt: Date.now(),
    status: response.status,
    statusText: response.statusText,
    data: response.data,
  });

  try {
    window.localStorage.setItem(cacheKey, cacheValue);
  } catch (error) {
    pruneOldDashboardCache(cacheKey);

    try {
      window.localStorage.setItem(cacheKey, cacheValue);
    } catch (retryError) {
      console.warn("Unable to save home dashboard API cache", retryError);
    }
  }
};

const toAxiosResponse = (cachedResponse, config) => ({
  data: cachedResponse.data,
  status: cachedResponse.status || 200,
  statusText: cachedResponse.statusText || "OK",
  headers: {},
  config,
  request: { fromHomeDashboardCache: true },
});

// Wipes every cached dashboard response. Call it on logout so the next user (or
// the same user re-logging in to check fresh numbers) never sees stale figures.
export const clearHomeDashboardCache = () => {
  if (typeof window === "undefined") return;

  getDashboardCacheKeys().forEach((key) => window.localStorage.removeItem(key));
  pendingDashboardRequests.clear();
};

// A manual refresh (F5 / browser reload button) is the user explicitly asking
// for current data, so the cache must not answer that request.
const isPageReload = () => {
  if (typeof window === "undefined") return false;

  try {
    const [navigation] = window.performance.getEntriesByType("navigation");
    if (navigation?.type) return navigation.type === "reload";

    return window.performance.navigation?.type === 1;
  } catch (error) {
    return false;
  }
};

export const installHomeDashboardAxiosCache = () => {
  if (typeof window === "undefined") return;
  if (axios.__homeDashboardCacheInstalled) return;

  axios.__homeDashboardCacheInstalled = true;

  if (isPageReload()) {
    clearHomeDashboardCache();
  }

  axios.interceptors.request.use((config) => {
    if (!isCacheableDashboardRequest(config) || config.__skipHomeDashboardCache) {
      return config;
    }

    const cacheKey = createCacheKey(config);
    const cachedResponse = readCachedResponse(cacheKey);

    if (cachedResponse) {
      config.adapter = () => Promise.resolve(toAxiosResponse(cachedResponse, config));
      return config;
    }

    if (pendingDashboardRequests.has(cacheKey)) {
      config.adapter = () =>
        pendingDashboardRequests
          .get(cacheKey)
          .then((response) => toAxiosResponse(response, config));
      return config;
    }

    const adapter = axios.getAdapter(config.adapter || axios.defaults.adapter);

    config.adapter = async (adapterConfig) => {
      const request = adapter(adapterConfig)
        .then((response) => {
          const cacheableResponse = {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
          };

          if (response.status >= 200 && response.status < 300) {
            writeCachedResponse(cacheKey, cacheableResponse);
          }

          return cacheableResponse;
        })
        .finally(() => {
          pendingDashboardRequests.delete(cacheKey);
        });

      pendingDashboardRequests.set(cacheKey, request);

      const cachedResponseFromRequest = await request;
      return toAxiosResponse(cachedResponseFromRequest, adapterConfig);
    };

    return config;
  });
};

installHomeDashboardAxiosCache();
