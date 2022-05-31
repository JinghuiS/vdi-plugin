import { AxiosRequestConfig } from "axios";
import { createIdentifier } from "@wendellhu/redi";
import { HttpClientInterceptor } from "./type";

//
export const HTTP_CLIENT_CONFIG =
  createIdentifier<AxiosRequestConfig>("HTTP_CLIENT_CONFIG");

export const HTTP_CLIENT_INTERCEPTORS =
  createIdentifier<HttpClientInterceptor>("HTTP_INTERCEPTORS");
