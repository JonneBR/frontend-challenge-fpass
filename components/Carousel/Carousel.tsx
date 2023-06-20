import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface Props {
  resources: {
    title: string
    link: string
    imageUrl: string
  }[]
}

const data: Props = {
  resources: [
    {
      title: "Find me on Twitter",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/any",
    },
    {
      title: "Welcome to Ark Labs",
      link: "https://ark-labs.co.uk",
      imageUrl: "https://placeimg.com/300/300/animals",
    },
    {
      title: "Some sort of third title",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/architecture",
    },
    {
      title: "A personal site perhaps?",
      link: "https://robkendal.co.uk",
      imageUrl: "https://placeimg.com/300/300/nature",
    },
    {
      title: "Super item number five",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/people",
    },
    {
      title: "Super item number six",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/tech",
    },
    {
      title: "Super item number seven",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/animals",
    },
    {
      title: "Super item number eight",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/people",
    },
    {
      title: "Super item number the last",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "https://placeimg.com/300/300/tech",
    },
  ],
}
interface CarouselProps {
  title: string
}

const Carousel = ({ title }: CarouselProps): JSX.Element => {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef<any>(null)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const moveNext = () => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const isDisabled = (direction: string) => {
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

  return (
    <div className="mx-auto my-12">
      <h2 className="mb-12 text-4xl font-bold leading-8 text-white">{title}</h2>
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
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="group relative snap-start text-center"
                onClick={() => console.log("resource", resource)}
              >
                <div className="h-80 w-64 cursor-pointer overflow-hidden rounded">
                  <Image width={250} height={0} src="/images/avengers-2-poster.jpg" alt="Thumbnail" />
                  <div
                    className="absolute -bottom-10 flex h-full w-full items-center 
                  justify-center bg-black/30 opacity-0 transition-all
                  duration-300 group-hover:bottom-0 group-hover:opacity-100"
                  >
                    <h2 className="mb-12 text-2xl font-extrabold leading-8 text-white">Avengers: Age of Ultron</h2>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Carousel
