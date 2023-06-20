import Navbar from "components/Navbar/Navbar"

export const metadata = {
  title: "Marvel Mania: Exploring the Marvel Universe and its Iconic Characters",
  description:
    "Unleash your inner superhero with our captivating blog, 'Marvel Mania,' where we dive deep into the extraordinary world of Marvel characters. From the mighty Avengers to the enigmatic X-Men, discover the incredible powers, complex backstories, and thrilling adventures that make Marvel's characters truly legendary.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
