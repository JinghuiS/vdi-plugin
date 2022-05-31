import { HttpClient as Ng, HttpConfig } from "@ngify/http";
import { Dependency } from "@wendellhu/redi";
import { ModuleWithProviders } from "vdi";
import { NgHttp } from "./client";
import { HTTP_CLIENT_CONFIG } from "./config";
import { HTTP_INTERCEPTOR, NoopInterceptor } from "./interceptor";

export class HttpClientModule {
  static forRoot(config: HttpConfig = {}): ModuleWithProviders {
    return {
      providers: [
        [
          HTTP_CLIENT_CONFIG,
          {
            useValue: config,
          },
        ],
        [
          HTTP_INTERCEPTOR,
          {
            useClass: NoopInterceptor,
          },
        ],
        [NgHttp],
      ],
      vueModule: NgHttp,
    };
  }
}
