"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/components/drink-paris.module.scss";

// 👉 Remplace / complète cette liste avec tes vrais restos
const DRINK = [
  {
    title: "Le Syndicat",
    description: "Cocktail bar with a mission — showcasing French spirits in ways you’ve never experienced before. Every drink is a creative twist on tradition, blending bold flavors with undeniable French charm. The urban, understated décor sets the stage for a night of cocktails and music, while the exceptional bartenders deliver unmatched craftsmanship in every glass. This is where mixology meets art.",
    imgSrc: "/img/syndicat.jpg",
    imgAlt: "Le Syndicat",
    siteUrl: "https://domainesyndicat.com/",
    mapsUrl: "https://maps.app.goo.gl/JaN8TgocVD9WVsrK9",
  },
  {
    title: "Le Mansart",
    description: "Located in the 9th arrondissement, this spot serves delicious pizzas with perfectly crispy crusts, best enjoyed with a good Italian wine. Friendly service, and if you grab a seat on the small outdoor terrace, you can watch the world go by.",
    imgSrc: "/img/mansart.jpg",
    imgAlt: "La Mansart",
    siteUrl: "https://www.instagram.com/lemansart/",
    mapsUrl: "https://maps.app.goo.gl/fXkgo1zzA71aTNhP9",
  },
  {
    title: "Experimental Cocktail Club",
    description: "Experimental Cocktail Club is a hidden gem just steps from Rue Montorgueil — a place where cocktails are crafted with precision and savored in an intimate, refined setting. The décor reflects the charm of the neighborhood’s historic interiors, making it the perfect escape from the bustling streets. Here, you’ll find exactly what you seek in Paris: a quiet pause, a masterful drink, and a touch of elegance.",
    imgSrc: "/img/experimental.jpg",
    imgAlt: "Experimental Cocktail Club",
    siteUrl: "https://www.experimentalcocktailclub.com/paris",
    mapsUrl: "https://maps.app.goo.gl/y8uJu1hKhJ7PFPUH6",
  },
  {
    title: "Café de Flore",
    description: "An iconic Parisian café in Saint-Germain-des-Prés, founded in 1887. A historic meeting place for writers, philosophers, and artists such as Sartre, de Beauvoir, and Picasso. Its Art Deco interior, unchanged since the 1940s, captures the timeless charm of Paris. Perfect for enjoying a coffee, a glass of wine, or simply watching the world go by. A symbol of Parisian culture and elegance, steeped in history. A must-visit when in Saint-Germain.",
    imgSrc: "/img/cafeflore.webp",
    imgAlt: "Café de Flore",
    siteUrl: "https://cafedeflore.fr/",
    mapsUrl: "https://maps.app.goo.gl/odnfza7B41xTXGsF9",
  },
  {
    title: "Terrass' Hotel",
    description: "Perched in the heart of Montmartre, this elegant spot offers a breathtaking view over the rooftops of Paris. Its rooftop is perfect for a meal or a drink while admiring the city’s skyline. After strolling through the charming streets of Montmartre, this is the ideal place to relax. Whether for lunch, dinner, or just a glass of wine, the view will leave you speechless.A true hidden gem for unforgettable Paris moments.",
    imgSrc: "/img/hotel.webp",
    imgAlt: "Terrass' Hotel",
    siteUrl: "https://www.terrass-hotel.com/",
    mapsUrl: "https://maps.app.goo.gl/4n15eQ5BLWUL4GAc7",
  },
//   {
//     title: "B.O.U.L.O.M",
//     description: "Is a hidden gem in the north of the 18th arrondissement. From the outside, it may look like a simple bakery-restaurant, but walk through to the back and you’ll find a bright, spacious hall serving an all-you-can-eat French buffet. Cozy vibes, generous dishes, and authentic home-style cooking make it a true treat. Reservations are essential — and this is THE brunch to try in Paris.",
//     imgSrc: "/img/boulom.jpg",
//     imgAlt: "B.O.U.L.O.M",
//     siteUrl: "https://www.boulom.net/",
//     mapsUrl: "https://maps.app.goo.gl/iFpnDsN6bTATJ1nh7",
//   },
];

export default function Drink() {
  return (
    <section className={styles.food} id="drink" aria-label="Favorite drinks in Paris">
      <div className={styles.food__container}>
        <h2 className={styles.food__title}>Drink</h2>
        <p className={styles.food__intro}>
          I’m sharing a curated list of my favorite places to drink in Paris — a mix of
          classic French spots and global flavors. Browse, book, and bon appétit!
        </p>

        <div className={styles.food__grid}>
          {DRINK.map((r, i) => (
            <article className={styles.food__card} key={`${r.title}-${i}`}>
              <div className={styles.food__imgWrap}>
                <Image
                  src={r.imgSrc}
                  alt={r.imgAlt}
                  fill
                  className={styles.food__img}
                  sizes="(max-width: 1023px) 92vw, 30vw"
                  priority={i === 0}
                />
              </div>

              <h3 className={styles.food__cardTitle}>{r.title}</h3>
              <p className={styles.food__cardDesc}>{r.description}</p>

              <div className={styles.food__actions}>
                <a
                  href={r.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.food__btn}
                  aria-label={`Visit website of ${r.title}`}
                >
                  <FontAwesomeIcon icon={faMartiniGlass} className={styles.food__icon} />
                  Website
                </a>
                <a
                  href={r.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.food__btn}
                  aria-label={`Get directions to ${r.title} on Google Maps`}
                >
                  <FontAwesomeIcon icon={faLocationDot} className={styles.food__icon} />
                  Map
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
