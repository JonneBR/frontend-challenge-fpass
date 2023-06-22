import { HttpClient, HttpMethod, HttpRequest, HttpResponse } from "core/data/protocols/http"

export class HttpClientSpy<R = never> implements HttpClient<R> {
  url = ""
  method: HttpMethod = "GET"
  body?: object
  headers?: HeadersInit
  response: HttpResponse<R> = {
    statusCode: 200,
  }

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers

    return this.response
  }
}
