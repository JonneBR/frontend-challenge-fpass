import { Character, CharacterDataWrapper, LoadCharacters } from "core/characters/domain/character"
import { HttpClient } from "core/data/protocols/http"

export class ListCharactersController implements LoadCharacters {
  constructor(private readonly url: string, private readonly httpClient: HttpClient<CharacterDataWrapper | string>) {}

  async getCharacters(): Promise<Character[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "GET",
    })

    if (httpResponse.statusCode !== 200) throw new Error(httpResponse.body as string)
    const body = httpResponse.body as CharacterDataWrapper
    return body.data.results
  }
}
