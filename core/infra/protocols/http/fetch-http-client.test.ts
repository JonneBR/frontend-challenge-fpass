import { HttpRequest } from "core/data/protocols/http"
import { FetchHttpClient } from "./fetch-http-client"

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

const makeSut = () => {
  const dummyRequest: HttpRequest = {
    url: "random.com",
    method: "GET",
    body: "",
    headers: { "Content-Type": "application/json" },
  }
  const dummyResponse = ["Hello", "World"]

  const sut = new FetchHttpClient()

  return {
    sut,
    dummyRequest,
    dummyResponse,
  }
}

describe("fetch-http-client", () => {
  it("Should call fetch with correct values", () => {
    const { sut, dummyRequest } = makeSut()

    global.fetch = jest.fn().mockImplementation(fetchHttpClientStub({}))

    sut.request(dummyRequest)

    expect(fetch).toHaveBeenCalledWith(dummyRequest.url, {
      method: dummyRequest.method,
      body: "",
      headers: { "Content-Type": "application/json" },
    })
  })

  it("Should return correct error", async () => {
    const { sut, dummyRequest } = makeSut()
    const { url, method } = dummyRequest

    global.fetch = jest
      .fn()
      .mockImplementation(fetchHttpClientStub("Not Found", { status: 404, ok: false, statusText: "Not Found" }))

    const httpResponse = await sut.request({ url, method })

    expect(httpResponse).toEqual({ statusCode: 404, body: "Not Found" })
  })

  it("Should return correct response on success", async () => {
    const { sut, dummyRequest, dummyResponse } = makeSut()
    const { url, method } = dummyRequest

    global.fetch = jest.fn().mockImplementation(fetchHttpClientStub(dummyResponse, { status: 200, ok: true }))

    const httpResponse = await sut.request({ url, method })

    expect(httpResponse).toEqual({ statusCode: 200, body: dummyResponse })
  })
})
