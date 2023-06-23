import Head from "next/head"
import { APRESENTATION_ITEMS } from "apresentation-items"
import Carousel from "components/Carousel/Carousel"
import SearchedSection, { type CharacterBasic } from "components/SearchedSection/SearchedSection"
import { getDataV2 } from "core/main/factories/make-list-characters-controller"
import "styles/tailwind.css"

const mysteriousMock: CharacterBasic = {
  name: APRESENTATION_ITEMS.search.mainTitle,
  description: APRESENTATION_ITEMS.search.subTitle,
}

export default async function Searched({ params }: { params: { character: string } }) {
  const normalizedValue = decodeURIComponent(params.character)
  const results = await getDataV2(
    `v1/public/characters?apikey=${process.env.PUBLIC_KEY}&ts=${process.env.TS}&hash=${process.env.HASH}&nameStartsWith=${normalizedValue}`
  )
  const character = results && results.length > 0 ? results[0] : mysteriousMock
  const explore = APRESENTATION_ITEMS.search.carousel.explore

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
      <SearchedSection character={character} />
      <section className="bg-gray-900">
        <div className="mx-auto max-w-full px-4 py-8 sm:py-16 lg:px-6 ">
          <Carousel title={explore} characters={results || []} />
        </div>
      </section>
    </>
  )
}
