import Head from "next/head"
import Carousel from "components/Carousel/Carousel"
import SearchedSection, { CharacterBasic } from "components/SearchedSection/SearchedSection"
import makeListCharactersController from "core/main/factories/make-list-characters-controller"
import "styles/tailwind.css"

const mysteriousMock: CharacterBasic = {
  name: "Mysterious McUnknown.",
  description:
    "Oh no! It seems like you entered an invalid character name. The superheroes and villains are probably taking a day off from saving the world and couldn't recognize the name you provided. Please try again with a valid character name, and they'll be more than happy to assist you in your quest! Stay heroic!",
}

export default async function Searched({ params }: { params: { character: string } }) {
  let data: CharacterBasic
  const normalizedValue = decodeURIComponent(params.character)
  const askCharacters = makeListCharactersController(
    `https://gateway.marvel.com/v1/public/characters?apikey=${process.env.PUBLIC_KEY}&ts=${process.env.TS}&hash=${process.env.HASH}&nameStartsWith=${normalizedValue}`
  )
  async function getData() {
    try {
      return await askCharacters.getCharacters()
    } catch (error) {
      console.log(error)
    }
    return []
  }
  const results = await getData()
  if (results && results.length > 0) {
    data = results[0]
  } else {
    data = mysteriousMock
  }
  const explore = <h2 className="mb-12 text-4xl font-bold leading-8 text-white">Based on your search:</h2>

  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SearchedSection character={data} />
      <section className="bg-gray-900">
        <div className="mx-auto max-w-full px-4 py-8 sm:py-16 lg:px-6 ">
          <Carousel title={explore} characters={results} />
        </div>
      </section>
    </>
  )
}
