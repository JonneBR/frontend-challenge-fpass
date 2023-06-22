"use client"
import Carousel from "components/Carousel/Carousel"
import { Character } from "core/characters/domain/character"
import EXPLORE from "explore-characters.json"
interface Props {
  results: Character[] | undefined
}
export default function Home(props: Props) {
  const { results } = props
  const explore = <h2 className="mb-12 text-4xl font-bold leading-8 text-white">Explore</h2>
  const week = (
    <h2 className="mb-12 text-4xl font-bold leading-8 text-white">
      Characters of the <span className="text-purple-500">week:</span>
    </h2>
  )
  return (
    <>
      {/* Header */}
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
              <span className="text-purple-500">Marvel Mania:</span> Exploring the Marvel Universe and its Iconic
              Characters
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              {`Unleash your inner superhero with our captivating blog, 'Marvel Mania,' where we dive deep into the
          extraordinary world of Marvel characters. From the mighty Avengers to the enigmatic X-Men, discover the
          incredible powers, complex backstories, and thrilling adventures that make Marvel's characters truly
          legendary.`}
            </p>
          </div>
        </div>
      </section>
      {/* Carousel */}
      <section className="bg-gray-900">
        <div className="mx-auto max-w-full px-4 py-8 sm:py-16 lg:px-6 ">
          {results ? (
            <>
              <Carousel title={week} characters={results} />
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
