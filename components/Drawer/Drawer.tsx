import { useEffect, useRef } from "react"

interface Props {
  open: boolean
  onClose: (open: boolean) => void
  lockBackgroundScroll?: boolean
  children: React.ReactNode
}

export default function Drawer(props: Props) {
  const { open, onClose, lockBackgroundScroll = true, children } = props
  const bodyRef = useRef<HTMLBodyElement | null>(null)

  useEffect(() => {
    const updatePageScroll = () => {
      bodyRef.current = window.document.querySelector("body")

      if (bodyRef.current && lockBackgroundScroll) {
        if (open) {
          bodyRef.current.style.overflow = "hidden"
        } else {
          bodyRef.current.style.overflow = ""
        }
      }
    }

    updatePageScroll()
  }, [open, lockBackgroundScroll])

  function handleToggle() {
    onClose(!open)
  }

  return (
    <div className="flex">
      <input
        type="checkbox"
        id="drawer-toggle"
        className="peer sr-only relative hidden"
        checked={open}
        onChange={handleToggle}
      />

      <div
        className={`fixed left-0 top-0 z-20 h-full w-80 -translate-x-full bg-gray-700 shadow-lg transition-all duration-500 ${
          open ? "peer-checked:translate-x-0" : ""
        }`}
      >
        <div className="flex justify-end">
          <button className="p-2" onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {children}
      </div>
      {open && <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-50" onClick={handleToggle} />}
    </div>
  )
}
