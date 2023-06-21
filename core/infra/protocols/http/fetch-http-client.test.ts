interface HttpClient<R = unknown> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

interface HttpRequest {
  url: string
  method: HttpMethod
  headers?: unknown
  body?: unknown
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

interface HttpResponse<T = unknown> {
  statusCode: number
  body?: T
}

class FetchHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    fetch(data.url, {
      method: data.method,
    })
    return Promise.resolve({ statusCode: 200 })
  }
}

export function fetchHttpClientStub(data: any, options?: any) {
  return function fetchStub(_url: any) {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve({
            ...data,
          }),
        ...options,
      })
    })
  }
}

describe("fetch-http-client", () => {
  it("Should call fetch with correct values", () => {
    const dummy: HttpRequest = { url: "random.com", method: "GET" }
    const sut = new FetchHttpClient()
    global.fetch = jest.fn().mockImplementation(fetchHttpClientStub({}))

    sut.request(dummy)

    expect(fetch).toHaveBeenCalledWith(dummy.url, { method: dummy.method })
  })
})
