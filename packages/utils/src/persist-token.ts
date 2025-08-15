import { DurationType } from "@repo/types";
import { storage } from "./storage";

export function getToken() {
  const accessToken = storage.getValue("access_token");
  const refreshToken = storage.getValue("refresh_token");

  return {
    accessToken,
    refreshToken,
  };
}
export function setAccessToken(
  token: string,
  duration: DurationType = { unit: "DAY", value: 1 },
) {
  storage.setValue("access_token", token, duration);
}

export function setRefreshToken(
  token: string,
  duration: DurationType = { unit: "DAY", value: 14 },
) {
  storage.setValue("refresh_token", token, duration);
}

export function removeToken() {
  storage.clearValue("access_token");
  storage.clearValue("refresh_token");
}
