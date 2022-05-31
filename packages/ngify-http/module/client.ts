import {
  HttpClient as _HttpClient,
  HttpConfig,
  HttpInterceptor,
  setupConfig,
} from "@ngify/http";
import { Inject, Many, Optional } from "@wendellhu/redi";
import { HTTP_CLIENT_CONFIG } from "./config";
import { HTTP_INTERCEPTOR } from "./interceptor";
export class NgHttp extends _HttpClient {
  constructor(
    @Many()
    @HTTP_INTERCEPTOR
    private readonly interceptors: HttpInterceptor[],
    @Optional(HTTP_CLIENT_CONFIG) private readonly config: HttpConfig
  ) {
    super(interceptors);
    if (this.config) {
      setupConfig(this.config);
    }
  }
  get getInterceptors(): HttpInterceptor[] {
    return this.interceptors;
  }
}
