import Head from "next/head"
import ExploreCarousel from "components/ExploreCarousel/ExploreCarousel"
import SearchedSection from "components/SearchedSection/SearchedSection"
import "styles/tailwind.css"

export default function Searched() {
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
      <SearchedSection />
      <ExploreCarousel />
    </>
  )
}
