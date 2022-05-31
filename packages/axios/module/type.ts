import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface HttpResponse<T = any> extends AxiosResponse<T> {}
export type HttpRequest<D = any> = AxiosRequestConfig<D>;

export interface HttpClientInterceptor {
  request(
    request: AxiosRequestConfig
  ): AxiosRequestConfig | Promise<AxiosRequestConfig>;
  requestError?(error: any): Promise<any> | any;
  response(response: HttpResponse): HttpResponse | Promise<HttpResponse>;
  responseError?(error: any): Promise<any> | any;
}

export type AxiosClient = Pick<AxiosInstance, keyof AxiosInstance>;
