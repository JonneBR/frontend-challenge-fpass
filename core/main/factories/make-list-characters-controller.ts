import { ListCharactersController } from "core/characters/data/remote/list-characters-controller"
import { LoadCharacters } from "core/characters/domain/character"
import { FetchHttpClient } from "core/infra/protocols/http"

export default function makeListCharactersController(url: string): LoadCharacters {
  return new ListCharactersController(url, new FetchHttpClient())
}

const askCharacters = makeListCharactersController(
  `${process.env.NEXT_PUBLIC_BASE_URL}/v1/public/characters?apikey=${process.env.PUBLIC_KEY}&ts=${process.env.TS}&hash=${process.env.HASH}&series=16516,27567&orderBy=-modified`
)

export async function getData() {
  try {
    return await askCharacters.getCharacters()
  } catch (error) {
    console.log(error)
  }
}
