interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

interface HttpRequest {
  url: string
  method: HttpMethod
  headers?: unknown
  body?: unknown
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

interface HttpResponse<T> {
  statusCode: number
  body?: T
}

class FetchHttpClient implements HttpClient {
  request(data: HttpRequest): Promise<any> {
    return Promise.resolve()
  }
}

describe("fetch-http-client", () => {
  it("should pass", () => {
    expect(2).toBe(2)
  })
})
