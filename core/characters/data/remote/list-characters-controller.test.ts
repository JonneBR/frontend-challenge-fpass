import { CharacterDataWrapper } from "core/characters/domain/character"
import { characterDataWrapper, results } from "./dummy"
import { ListCharactersController } from "./list-characters-controller"
import { HttpClientSpy } from "./stub"

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
