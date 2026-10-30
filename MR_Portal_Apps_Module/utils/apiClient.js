import axios from "axios";
import { url } from "@/constants/url";
import {
    clearAccessToken,
    getAccessToken,
    getAccessTokenFromResponse,
    setAccessToken,
} from "@/utils/authToken";


const apiClient = axios.create({
    baseURL: url,
    // Enable this only after the API sends an explicit CORS origin and
    // Access-Control-Allow-Credentials: true for the frontend origin.
    withCredentials: process.env.NEXT_PUBLIC_API_CREDENTIALS === "true",
    timeout: 30000,

    headers: {
        "Content-Type": "application/json",
        secret: "fsdhfgsfuiweifiowefjewcewcebjw",
    },
});

apiClient.interceptors.request.use((config) => {
    const token = getAccessToken();

    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = token.startsWith("Bearer ")
            ? token
            : `Bearer ${token}`;
    }

    return config;
});

apiClient.interceptors.response.use(
    (response) => response,


    async (error) => {
        const originalRequest = error.config;

        // Access token expired
        if (
            error.response?.status === 401 &&
            !originalRequest?._retry &&
            !originalRequest?.url?.includes("/api/auth/refresh")
        ) {
            originalRequest._retry = true;

            try {
                // Ask Next.js to refresh the token
                const refreshResponse = await apiClient.post("/api/auth/refresh", null, {
                    _skipAuthRefresh: true,
                });
                const refreshedToken = getAccessTokenFromResponse(refreshResponse.data);

                if (!refreshedToken) {
                    throw new Error("Refresh endpoint did not return an access token");
                }

                setAccessToken(refreshedToken);

                // Retry original request
                return apiClient(originalRequest);

            } catch (refreshError) {
                // `clearAccessToken();`

                // Refresh token expired
                // if (typeof window !== "undefined") {
                //     window.location.href = "/login";
                // }

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;
