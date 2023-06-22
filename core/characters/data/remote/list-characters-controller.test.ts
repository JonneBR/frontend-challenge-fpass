import { Character, CharacterDataWrapper, LoadCharacters } from "core/characters/domain/character"
import { HttpClient } from "core/data/protocols/http"
import { characterDataWrapper, results } from "./dummy"
import { HttpClientSpy } from "./stub"

class ListCharactersController implements LoadCharacters {
  constructor(private readonly url: string, private readonly httpClient: HttpClient<CharacterDataWrapper>) {}

  async getCharacters(): Promise<Character[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "GET",
    })

    const characters = httpResponse.body?.data.results
    const isOk = httpResponse.statusCode === 200
    if (isOk && characters) return characters
    throw new Error("Something went wrong!")
  }
}

const BASE_URL = "https://gateway.marvel.com"

const makeSut = () => {
  const httpClientSpy = new HttpClientSpy<CharacterDataWrapper>()
  const sut = new ListCharactersController(BASE_URL, httpClientSpy)

  return { sut, httpClientSpy }
}

describe("fetch-http-client", () => {
  it("should return a list of characters", async () => {
    const { sut, httpClientSpy } = makeSut()

    httpClientSpy.response.body = characterDataWrapper
    const response = await sut.getCharacters()
    expect(response).toBe(results)
  })

  it("should call httpClient with correct URL and Method", async () => {
    const { sut, httpClientSpy } = makeSut()

    httpClientSpy.response.body = characterDataWrapper
    await sut.getCharacters()
    expect(httpClientSpy.url).toBe(BASE_URL)
    expect(httpClientSpy.method).toBe("GET")
  })

  it("should throw an Error", async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response.statusCode = 404

    const response = sut.getCharacters()
    await expect(response).rejects.toThrow("Something went wrong!")
  })
})
