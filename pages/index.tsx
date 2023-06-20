import Head from "next/head"
import Carousel from "components/Carousel/Carousel"

export default function Web() {
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
        <title>Marvel Mania: Exploring the Marvel Universe and its Iconic Characters</title>
      </Head>
      <section
        className=" bg-gray-900 bg-cover bg-center bg-no-repeat"
        style={{
          height: "700px",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("images/spider-man-wallpaper.jpg")`,
        }}
      >
        <div className="flex px-4 py-8 text-center lg:py-16">
          <div className="mt-32 place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
              <span className="text-purple-500">Marvel Mania:</span> Exploring the Marvel Universe and its Iconic
              Characters
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              {`Unleash your inner superhero with our captivating blog, 'Marvel Mania,' where we dive deep into the
              extraordinary world of Marvel characters. From the mighty Avengers to the enigmatic X-Men, discover the
              incredible powers, complex backstories, and thrilling adventures that make Marvel's characters truly
              legendary.`}
            </p>
            {/* <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              Get started
            </Button>
            <Button
              href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
              intent="secondary"
            >
              Deploy Now
            </Button> */}
          </div>
        </div>
      </section>

      <section className=" bg-gray-900">
        <div className="mx-auto max-w-full px-4 py-8 sm:py-16 lg:px-6 ">
          <Carousel />
        </div>
      </section>
    </>
  )
}
