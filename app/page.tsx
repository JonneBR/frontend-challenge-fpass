import Head from "next/head"
import Home from "components/Home/Home"
import { makeListCharactersController } from "core/main/factories/make-list-characters-controller"
import "styles/tailwind.css"

export default async function Web() {
  const askCharacters = makeListCharactersController(
    `https://gateway.marvel.com/v1/public/characters?apikey=${process.env.PUBLIC_KEY}&ts=${process.env.TS}&hash=${process.env.HASH}&series=16516,27567&orderBy=-modified`
  )

  async function getData() {
    try {
      return await askCharacters.getCharacters()
    } catch (error) {
      console.log(error)
    }
  }
  const data = await getData()

  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Home results={data} />
    </>
  )
}
