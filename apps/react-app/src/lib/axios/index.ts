import Axios from "axios";
import {
  authRequestInterceptor,
  refreshTokenInterceptor,
  rejectErrorInterceptor,
} from "./interceptors";
import { env } from "../../constants/env";

export const axios = Axios.create({
  baseURL: env.API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(authRequestInterceptor, rejectErrorInterceptor);

axios.interceptors.response.use((response) => {
  return response;
}, refreshTokenInterceptor);
