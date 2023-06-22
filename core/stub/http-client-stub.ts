import { HttpClient, HttpMethod, HttpRequest, HttpResponse, HttpStatusCode } from "core/data/protocols/http"

export class HttpClientSpy<R = any> implements HttpClient<R> {
  url = ""
  method: HttpMethod = "GET"
  body?: object
  headers?: HeadersInit
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  }

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers

    return this.response
  }
}
