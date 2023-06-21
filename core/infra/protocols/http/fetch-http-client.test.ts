import { FetchHttpClient, HttpRequest } from "./fetch-http-client"

interface Options {
  status: number
  ok: boolean
  statusText?: string
}
export function fetchHttpClientStub(data: any, options?: Options) {
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
    const dummy: HttpRequest = {
      url: "random.com",
      method: "GET",
      body: "",
      headers: { "Content-Type": "application/json" },
    }
    const sut = new FetchHttpClient()
    global.fetch = jest.fn().mockImplementation(fetchHttpClientStub({}))

    sut.request(dummy)

    expect(fetch).toHaveBeenCalledWith(dummy.url, {
      method: dummy.method,
      body: "",
      headers: { "Content-Type": "application/json" },
    })
  })

  it("Should return correct error", async () => {
    const dummy: HttpRequest = { url: "random.com", method: "GET" }
    const sut = new FetchHttpClient()

    global.fetch = jest
      .fn()
      .mockImplementation(fetchHttpClientStub("Not Found", { status: 404, ok: false, statusText: "Not Found" }))

    const httpResponse = await sut.request(dummy)

    expect(httpResponse).toEqual({ statusCode: 404, body: "Not Found" })
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
