import { HttpConfig, HttpClient as fy } from "@ngify/http";
import { createIdentifier } from "@wendellhu/redi";

export const HTTP_CLIENT_CONFIG =
  createIdentifier<HttpConfig>("HTTP_CLIENT_CONFIG");

export const defaultConfig = {} as HttpConfig;
