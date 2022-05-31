import { Inject } from "@wendellhu/redi";
import axios, { type AxiosRequestConfig } from "axios";
import { HTTP_CLIENT_CONFIG } from "./axiosToken";
import { CreateHttpInterceptor } from "./httpInterceptor";

export class HttpClient extends axios.Axios {
  constructor(
    @Inject(HTTP_CLIENT_CONFIG) public config: AxiosRequestConfig,
    @Inject(CreateHttpInterceptor)
    public CreateHttpInterceptor: CreateHttpInterceptor
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    super({ ...axios.defaults, ...config });
    this.CreateHttpInterceptor.register(this.interceptors);
  }
}
