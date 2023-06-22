"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navbarClasses = `fixed z-10 h-20 w-full top-0 left-0 right-0 transition-colors duration-300 ${
    scrollPos > 0 ? "bg-gray-950" : "bg-transparent"
  }`

  return (
    <nav className={navbarClasses}>
      <div className="flex h-full w-full items-center justify-center">
        <div className="absolute left-0 cursor-pointer">
          <Link href="/">
            <Image style={{ height: 70 }} width={70} height={70} src={"/favicon.ico"} alt={"favicon"} />
          </Link>
        </div>
        <div className="relative w-80">
          <input
            placeholder="Favorite character"
            className="h-10 w-full rounded-md border-2 border-gray-700 bg-gray-800 p-4 pr-10 text-white outline-none"
          />
          <div className="absolute inset-y-0 right-0 z-10 flex items-center pr-3">
            <Link href="/search/Spider-Man">
              <svg className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm3.93-3.07l4.42 4.42-1.42 1.42-4.42-4.42A6.47 6.47 0 019.5 16a6.5 6.5 0 010-13c1.33 0 2.57.4 3.6 1.07z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
