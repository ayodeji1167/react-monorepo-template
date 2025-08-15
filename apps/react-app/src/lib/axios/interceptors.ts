import { getToken, storage } from "@repo/utils";
import { AxiosError } from "axios";
import type { InternalAxiosRequestConfig } from "axios";

export function rejectErrorInterceptor(error: AxiosError) {
  return Promise.reject(error);
}

//Append bearer token to headers
export function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = getToken().accessToken;

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (config.headers) {
    config.headers.Accept = "application/json";
  }
  return config;
}

export async function refreshTokenInterceptor(error: AxiosError) {
  const status = error?.response?.status;
  const message: any = error?.response?.data;

  // Check if the response is unauthorized (401 or 520) and the request hasn't been retried yet
  if (
    (status === 401 || status === 520) &&
    typeof message === "string" &&
    (message.toLowerCase() === "jwt expired" ||
      message.toLowerCase() === "please authenticate")
  ) {
    storage.clearValue("access_token");
    storage.clearValue("refresh_token");
    window.location.assign(window.location.origin + "/auth/login");
  }
  if (
    (status === 401 || status === 520) &&
    typeof message === "object" &&
    (message.message?.toLowerCase() === "jwt expired" ||
      message.message?.toLowerCase() === "please authenticate")
  ) {
    storage.clearValue("access_token");
    storage.clearValue("refresh_token");
    window.location.assign(window.location.origin + "/auth/login");
  }

  return Promise.reject(error);
}
