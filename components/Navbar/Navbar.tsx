"use client"
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
      <div className="flex h-full w-full items-center justify-center ">
        <input
          placeholder="Favorite character"
          className="h-10 rounded-md border-2 border-gray-700 bg-gray-800 p-4 text-white outline-none md:w-1/3"
        />
      </div>
    </nav>
  )
}
