export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export interface HttpRequest {
  url: string
  method: HttpMethod
  headers?: HeadersInit
  body?: any
}

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

export enum HttpStatusCode {
  ok = 200,
  unauthorized = 401,
  notFound = 404,
}

export interface HttpResponse<T = any> {
  statusCode: number
  body?: T
}
