"use client"
import Carousel from "components/Carousel/Carousel"
import { Character } from "core/characters/domain/character"
import EXPLORE from "explore-characters.json"

export default function ExploreCarousel() {
  const explore = <h2 className="mb-12 text-4xl font-bold leading-8 text-white">Based on your search:</h2>

  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-full px-4 py-8 sm:py-16 lg:px-6 ">
        <Carousel title={explore} characters={EXPLORE as unknown as Character[]} />
      </div>
    </section>
  )
}
