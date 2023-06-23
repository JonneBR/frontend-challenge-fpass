"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import Drawer from "components/Drawer/Drawer"
import type { Character } from "core/characters/domain/character"

interface CarouselProps {
  title: React.ReactNode
  characters: Character[]
}

interface CharacterBasic {
  name: string
  description: string
}

const clicked: CharacterBasic = {
  name: "",
  description: "",
}

const Carousel = ({ title, characters }: CarouselProps): JSX.Element => {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)
  const carousel = useRef<HTMLDivElement>(null)

  function movePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  function moveNext() {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  function isDisabled(direction: string) {
    if (direction === "prev") {
      return currentIndex <= 0
    }

    if (direction === "next" && carousel.current !== null) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0
  }, [])

  function onClose(open: boolean) {
    setOpen(open)
  }

  function handleClick(resource: Character) {
    clicked.name = resource.name
    clicked.description = resource.description
    setOpen(!open)
  }

  return (
    <>
      <div className="mx-auto my-12">
        {title}
        <div className="relative overflow-hidden">
          <div className="absolute flex h-full w-full justify-between">
            <button
              onClick={movePrev}
              className="z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-blue-900/75 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
              disabled={isDisabled("prev")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-5 h-12 w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-blue-900/75 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
              disabled={isDisabled("next")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-5 h-12 w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div
            ref={carousel}
            className="relative z-0 flex touch-pan-x snap-x snap-mandatory gap-1 overflow-hidden scroll-smooth"
          >
            {characters.map((resource) => {
              const imageUrl = `${resource.thumbnail.path}.${resource.thumbnail.extension}`
              return (
                <div
                  key={resource.name}
                  className="group relative snap-start text-center"
                  onClick={() => handleClick(resource)}
                >
                  <div className="w-64 cursor-pointer overflow-hidden rounded">
                    <Image style={{ height: 310 }} width={250} height={310} src={imageUrl} alt={resource.name} />
                    <div
                      className="absolute -bottom-10 flex h-full w-full items-center 
                  justify-center bg-black/30 opacity-0 transition-all
                  duration-300 group-hover:bottom-0 group-hover:opacity-100"
                    >
                      <h2 className="mb-12 text-2xl font-extrabold leading-8 text-white">{resource.name}</h2>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <Drawer open={open} onClose={onClose}>
        <div className="flex flex-col items-center justify-center px-6 py-4">
          <h2 className="text-lg font-semibold text-white">{clicked.name}</h2>
          <p className="pt-10 text-gray-500">{clicked.description}</p>
        </div>
      </Drawer>
    </>
  )
}

export default Carousel
