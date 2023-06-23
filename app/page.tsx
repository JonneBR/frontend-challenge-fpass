import Head from "next/head"
import { APRESENTATION_ITEMS } from "apresentation-items"
import Carousel from "components/Carousel/Carousel"
import type { Character } from "core/characters/domain/character"
import makeListCharactersController from "core/main/factories/make-list-characters-controller"
import EXPLORE from "explore-characters.json"
import "styles/tailwind.css"

export default async function Web() {
  const askCharacters = makeListCharactersController(
    `https://gateway.marvel.com/v1/public/characters?apikey=${process.env.PUBLIC_KEY}&ts=${process.env.TS}&hash=${process.env.HASH}&series=16516,27567&orderBy=-modified`
  )

  async function getData() {
    try {
      return await askCharacters.getCharacters()
    } catch (error) {
      console.log(error)
    }
  }
  const data = await getData()

  const main = APRESENTATION_ITEMS.home.mainTitle
  const sub = APRESENTATION_ITEMS.home.subTitle
  const description = APRESENTATION_ITEMS.home.description
  const explore = APRESENTATION_ITEMS.home.carousel.explore
  const week = APRESENTATION_ITEMS.home.carousel.week
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

      <section
        className="rotate-0 bg-gray-900 bg-cover
        bg-center bg-no-repeat after:absolute after:-bottom-1 after:top-auto after:h-32 after:w-full after:bg-gradient-to-t after:from-gray-900"
        style={{
          height: "750px",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("../images/spider-man-wallpaper.jpg")`,
        }}
      >
        <div className="flex px-4 py-8 text-center lg:py-16">
          <div className="mt-32 place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
              <span className="text-purple-500">{main}</span>
              {sub}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              {description}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-900">
        <div className="mx-auto max-w-full px-4 py-8 sm:py-16 lg:px-6 ">
          {data ? (
            <>
              <Carousel title={week} characters={data} />
              <Carousel title={explore} characters={EXPLORE as unknown as Character[]} />
            </>
          ) : (
            <Carousel title={explore} characters={EXPLORE as unknown as Character[]} />
          )}
        </div>
      </section>
    </>
  )
}
