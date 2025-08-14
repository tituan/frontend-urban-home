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
//   {
//     title: "Sugo",
//     description: "A pasta lover’s dream in Paris. This spot specializes in fresh, homemade pasta with a simple menu of timeless classics, all made in-house. If you’re serious about pasta, this is a must-visit. Pro tip: book a table in advance!",
//     imgSrc: "/img/sugo-03.jpg",
//     imgAlt: "Sugo pasta",
//     siteUrl: "https://www.sugoparis.com/",
//     mapsUrl: "https://maps.app.goo.gl/UsLgBMbVLQnDbrSr7",
//   },
//   {
//     title: "El Nopal",
//     description: "Tucked away on Rue Duperré, just steps from Paris’s iconic basketball court, this cozy Mexican spot serves up a menu of burritos and other authentic specialties. Eating here is like taking a quick trip to Mexico on your lunch break. Everything is fresh, flavorful, and simply delicious!",
//     imgSrc: "/img/nopal.jpg",
//     imgAlt: "El Nopal",
//     siteUrl: "https://www.instagram.com/elnopalparis/?hl=fr",
//     mapsUrl: "https://maps.app.goo.gl/3u2ecnwwAjgXhmED6",
//   },
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
