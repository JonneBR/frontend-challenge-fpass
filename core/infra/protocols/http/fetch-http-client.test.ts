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

interface HttpResponse<T = any> {
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
      const dataResponse: any = await fetchResponse.json()

      if (!fetchResponse.ok) {
        throw new Error(JSON.stringify(dataResponse), { cause: fetchResponse.status })
      }

      return {
        statusCode: fetchResponse?.status,
        body: dataResponse,
      }
    } catch (error: any) {
      return {
        statusCode: error.cause,
        body: JSON.parse(error.message),
      }
    }
  }
}

interface Options {
  status: number
  ok: boolean
  statusText?: string
}
export function fetchHttpClientStub(data: object, options?: Options) {
  return function fetchStub() {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve(data),
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
      .mockImplementation(
        fetchHttpClientStub(
          { message: "The item has not been found." },
          { status: 404, ok: false, statusText: "Not Found" }
        )
      )

    const httpResponse = await sut.request(dummy)

    expect(httpResponse).toEqual({ statusCode: 404, body: { message: "The item has not been found." } })
  })

  it("Should return correct response on success", async () => {
    const dummy: HttpRequest = { url: "random.com", method: "GET" }
    const dummyResponse = ["Hello", "World"]
    const sut = new FetchHttpClient()

    global.fetch = jest.fn().mockImplementation(fetchHttpClientStub(dummyResponse, { status: 200, ok: true }))

    const httpResponse = await sut.request(dummy)

    expect(httpResponse).toEqual({ statusCode: 200, body: dummyResponse })
  })
})
