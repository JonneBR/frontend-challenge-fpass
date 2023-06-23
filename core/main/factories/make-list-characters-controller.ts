import { ListCharactersController } from "core/characters/data/remote/list-characters-controller"
import { LoadCharacters } from "core/characters/domain/character"
import { FetchHttpClient } from "core/infra/protocols/http"

export default function makeListCharactersController(url: string): LoadCharacters {
  return new ListCharactersController(url, new FetchHttpClient())
}

export async function getDataV2(path: string) {
  try {
    return await makeListCharactersController(`${process.env.NEXT_PUBLIC_BASE_URL}/${path}`).getCharacters()
  } catch (error) {
    console.log(error)
  }
}
