export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export type HttpRequest = {
  endpoint: string;
  method: HttpMethod;
  body?: unknown;
  headers?: unknown;
};

export interface HttpClient {
  request: <Response = unknown>(request: HttpRequest) => Promise<Response>;
}
