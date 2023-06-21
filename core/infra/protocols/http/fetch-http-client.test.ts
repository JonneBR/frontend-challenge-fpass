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
    let fetchResponse: Response | null = null
    try {
      fetchResponse = await fetch(data.url, {
        method: data.method,
      })
      if (!fetchResponse.ok) {
        throw new Error(fetchResponse.statusText)
      }
      return Promise.resolve({ statusCode: 200 })
    } catch (error) {
      if (fetchResponse)
        return {
          statusCode: fetchResponse.status,
          body: { message: fetchResponse.statusText },
        }
      return {
        statusCode: 500,
      }
    }
  }
}

interface Options {
  status: number
  ok: boolean
  statusText: string
}
export function fetchHttpClientStub(data: object, options?: Options) {
  return function fetchStub() {
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

  it("Should return correct error", async () => {
    const dummy: HttpRequest = { url: "random.com", method: "GET" }
    const sut = new FetchHttpClient()

    global.fetch = jest
      .fn()
      .mockImplementation(fetchHttpClientStub({}, { status: 404, ok: false, statusText: "Not Found" }))

    const httpResponse = await sut.request(dummy)

    expect(httpResponse).toEqual({ statusCode: 404, body: { message: "Not Found" } })
  })
})
