// App mode ("web" / "mobile") ek hi jagah se padha aur likha jaye,
// taki har page ka redirect guard same tarah behave kare.

export const WEB = "web";
export const MOBILE = "mobile";

export const WEB_HOME = "/";
export const MOBILE_HOME = "/MR_Portal_Apps/MRHome";

// API kabhi "Mobile" / "MOBILE" bhejta hai, aur undefined ko localStorage
// literal "undefined" bana deta hai — dono cases yahin saaf ho jate hain.
export const normalizeMode = (value) => {
  const mode = value === undefined || value === null ? "" : String(value).trim().toLowerCase();
  if (mode === "" || mode === "undefined" || mode === "null") return WEB;
  return mode === MOBILE ? MOBILE : WEB;
};

export const getAppMode = () => {
  if (typeof window === "undefined") return WEB;
  return normalizeMode(window.localStorage.getItem("mode"));
};

export const isMobileMode = () => getAppMode() === MOBILE;

export const setAppMode = (value) => {
  if (typeof window === "undefined") return WEB;
  const mode = normalizeMode(value);
  window.localStorage.setItem("mode", mode);
  window.sessionStorage.setItem("mode", mode);
  return mode;
};

export const homeForMode = (value) => (normalizeMode(value) === MOBILE ? MOBILE_HOME : WEB_HOME);

/**
 * Page apna mode bata de ("web" ya "mobile"). Agar logged-in user ka mode
 * alag hai to uske home par bhej do, warna kuch mat karo — page apni jagah rahe.
 */
export const enforceMode = (router, pageMode) => {
  const current = getAppMode();
  if (current === normalizeMode(pageMode)) return false;
  router.replace(homeForMode(current));
  return true;
};

export default enforceMode;
