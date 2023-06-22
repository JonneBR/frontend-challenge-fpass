import { ListCharactersController } from "core/characters/data/remote/list-characters-controller"
import { LoadCharacters } from "core/characters/domain/character"
import { FetchHttpClient } from "core/infra/protocols/http"

export const makeListCharactersController = (url: string): LoadCharacters => {
  return new ListCharactersController(url, new FetchHttpClient())
}
