import Image from "next/image"
import { Image as ImageResponse } from "core/characters/domain/character"

export interface CharacterBasic {
  name: string
  description: string
  thumbnail?: ImageResponse
}

interface Props {
  character: CharacterBasic
}
export default function SearchedSection(props: Props) {
  const { character } = props
  const imageElement = character.thumbnail && (
    <Image
      style={{ height: 310 }}
      width={250}
      height={310}
      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      alt={character.name}
    />
  )

  return (
    <section
      className="rotate-0 bg-gray-900 bg-cover bg-left-top bg-no-repeat after:absolute after:-bottom-1 after:top-auto after:h-32 after:w-full after:bg-gradient-to-t after:from-gray-900"
      style={{
        height: "750px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 10)), url("../images/captain-america-wallpaper.jpg")`,
      }}
    >
      <div className=" flex px-4 py-8 text-center lg:ml-5 lg:py-16">
        <div className="z-10 mt-10 flex flex-col items-start justify-start ">
          <h1 className="mb-4 max-w-2xl text-left text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
            {character.name}
          </h1>
          <p className="mb-6 max-w-2xl text-left font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            {character.description}
          </p>
          {imageElement}
        </div>
      </div>
    </section>
  )
}
