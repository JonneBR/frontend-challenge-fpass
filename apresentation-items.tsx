export const APRESENTATION_ITEMS = {
  home: {
    mainTitle: "Marvel Mania:",
    subTitle: " Exploring the Marvel Universe and its IconicCharacters",
    description: `Unleash your inner superhero with our captivating blog, 'Marvel Mania,' where we dive deep into the
    extraordinary world of Marvel characters. From the mighty Avengers to the enigmatic X-Men, discover the
    incredible powers, complex backstories, and thrilling adventures that make Marvel's characters truly
    legendary.`,
    carousel: {
      explore: <h2 className="mb-12 text-4xl font-bold leading-8 text-white">Explore</h2>,
      week: (
        <h2 className="mb-12 text-4xl font-bold leading-8 text-white">
          Characters of the <span className="text-purple-500">week:</span>
        </h2>
      ),
    },
  },
  search: {
    mainTitle: "Mysterious McUnknown.",
    subTitle: `Oh no! It seems like you entered an invalid character name. The superheroes and villains are probably taking a day off from saving the world and couldn't recognize the name you provided. Please try again with a valid character name, and they'll be more than happy to assist you in your quest! Stay heroic!`,
    carousel: {
      explore: <h2 className="mb-12 text-4xl font-bold leading-8 text-white">Based on your search:</h2>,
    },
  },
}
