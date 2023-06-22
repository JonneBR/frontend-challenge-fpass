import Image from "next/image"

export default function SearchedSection() {
  return (
    <section
      className="rotate-0 bg-gray-900 bg-cover bg-left-top bg-no-repeat after:absolute after:-bottom-1 after:top-auto after:h-32 after:w-full after:bg-gradient-to-t after:from-gray-900"
      style={{
        height: "750px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 10)), url("../images/captain-america-wallpaper.jpg")`,
      }}
    >
      <div className=" flex px-4 py-8 text-center lg:ml-5 lg:py-16">
        <div className="z-10 mt-10 flex flex-col items-start justify-start ">
          <h1 className="mb-4 max-w-2xl text-left text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
            Spider-Man (Peter Parker)
          </h1>
          <p className="mb-6 max-w-2xl text-left font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            {`Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.`}
          </p>
          <Image
            style={{ height: 310 }}
            width={250}
            height={310}
            src={"http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"}
            alt={"Thumbnail"}
          />
        </div>
      </div>
    </section>
  )
}
