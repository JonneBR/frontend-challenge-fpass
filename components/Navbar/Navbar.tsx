"use client"
import Image from "next/image"
import { type FormEvent, useEffect, useState } from "react"

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const input = document.querySelector("input")
    if (input) {
      const inputValue = input.value
      window.location.href = "/search/Spider-Man"
      console.log("Submitted value:", inputValue)
    }
  }

  return (
    <nav className={navbarClasses}>
      <div className="flex h-full w-full items-center justify-center">
        <div className="absolute left-0 cursor-pointer" onClick={() => (window.location.href = "/")}>
          <Image style={{ height: 70 }} width={70} height={70} src={"/favicon.ico"} alt={"favicon"} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-80">
            <input
              placeholder="Favorite character"
              className="h-10 w-full rounded-md border-2 border-gray-700 bg-gray-800 p-4 text-white outline-none"
            />
          </div>
        </form>
      </div>
    </nav>
  )
}
