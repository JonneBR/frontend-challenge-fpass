import { Character, CharacterDataWrapper, LoadCharacters } from "core/characters/domain/character"
import { HttpClient } from "core/data/protocols/http"

export class ListCharactersController implements LoadCharacters {
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
