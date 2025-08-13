"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/components/food-paris.module.scss";

// 👉 Remplace / complète cette liste avec tes vrais restos
const RESTAURANTS = [
  {
    title: "Bouillon Chartier",
    description: " My favorite bouillon in Paris! Authentic, simple, with a super affordable menu and a setting that instantly takes you back to the Paris of the bouillon era. A real time travel… without breaking the bank.",
    imgSrc: "/img/chartier.webp",
    imgAlt: "Bouillon Chartier",
    siteUrl: "https://www.bouillon-chartier.com/",
    mapsUrl: "https://maps.app.goo.gl/nUUBFjresSEwNne99",
  },
  {
    title: "Faggio",
    description: "Located in the 9th arrondissement, this spot serves delicious pizzas with perfectly crispy crusts, best enjoyed with a good Italian wine. Friendly service, and if you grab a seat on the small outdoor terrace, you can watch the world go by.",
    imgSrc: "/img/faggio.webp",
    imgAlt: "Faggio Paris pizza",
    siteUrl: "https://www.instagram.com/faggio_rochechouart/?hl=fr",
    mapsUrl: "https://maps.app.goo.gl/gMXvDk99J4sU23oh7",
  },
  {
    title: "Colline d'Asie",
    description: "At the foot of Sacré-Cœur, this neighborhood institution serves up delicious bún bò for every taste. The menu also features other Asian dishes and a daily special. If you’re in the 18th and craving bún bò, this spot is a must-try.",
    imgSrc: "/img/colline-dasie.webp",
    imgAlt: "Colline d'asie",
    siteUrl: "https://www.instagram.com/collinedasie_delsarte/",
    mapsUrl: "https://maps.app.goo.gl/bmdCgh7jnaW1mZ8t9",
  },
  {
    title: "Sugo",
    description: "A pasta lover’s dream in Paris. This spot specializes in fresh, homemade pasta with a simple menu of timeless classics, all made in-house. If you’re serious about pasta, this is a must-visit. Pro tip: book a table in advance!",
    imgSrc: "/img/sugo-03.jpg",
    imgAlt: "Sugo pasta",
    siteUrl: "https://www.sugoparis.com/",
    mapsUrl: "https://maps.app.goo.gl/UsLgBMbVLQnDbrSr7",
  },
  {
    title: "El Nopal",
    description: "Tucked away on Rue Duperré, just steps from Paris’s iconic basketball court, this cozy Mexican spot serves up a menu of burritos and other authentic specialties. Eating here is like taking a quick trip to Mexico on your lunch break. Everything is fresh, flavorful, and simply delicious!",
    imgSrc: "/img/nopal.jpg",
    imgAlt: "El Nopal",
    siteUrl: "https://www.instagram.com/elnopalparis/?hl=fr",
    mapsUrl: "https://maps.app.goo.gl/3u2ecnwwAjgXhmED6",
  },
  {
    title: "B.O.U.L.O.M",
    description: "Is a hidden gem in the north of the 18th arrondissement. From the outside, it may look like a simple bakery-restaurant, but walk through to the back and you’ll find a bright, spacious hall serving an all-you-can-eat French buffet. Cozy vibes, generous dishes, and authentic home-style cooking make it a true treat. Reservations are essential — and this is THE brunch to try in Paris.",
    imgSrc: "/img/boulom.webp",
    imgAlt: "B.O.U.L.O.M",
    siteUrl: "https://www.boulom.net/",
    mapsUrl: "https://maps.app.goo.gl/iFpnDsN6bTATJ1nh7",
  },
//   {
//     title: "Sugo",
//     description: "A pasta lover’s dream in Paris. This spot specializes in fresh, homemade pasta with a simple menu of timeless classics, all made in-house. If you’re serious about pasta, this is a must-visit. Pro tip: book a table in advance!",
//     imgSrc: "/img/sugo.webp",
//     imgAlt: "Sugo pasta",
//     siteUrl: "https://www.sugoparis.com/",
//     mapsUrl: "https://maps.app.goo.gl/UsLgBMbVLQnDbrSr7",
//   },
//   {
//     title: "Guo Xin Ravioli",
//     description: "A pasta lover’s dream in Paris. This spot specializes in fresh, homemade pasta with a simple menu of timeless classics, all made in-house. If you’re serious about pasta, this is a must-visit. Pro tip: book a table in advance!",
//     imgSrc: "/img/sugo.webp",
//     imgAlt: "Sugo pasta",
//     siteUrl: "https://www.sugoparis.com/",
//     mapsUrl: "https://maps.app.goo.gl/UsLgBMbVLQnDbrSr7",
//   },
];

export default function Food() {
  return (
    <section className={styles.food} id="food" aria-label="Favorite restaurants in Paris">
      <div className={styles.food__container}>
        <h2 className={styles.food__title}>Food</h2>
        <p className={styles.food__intro}>
          I’m sharing a curated list of my favorite places to eat in Paris — a mix of
          classic French spots and global flavors. Browse, book, and bon appétit!
        </p>

        <div className={styles.food__grid}>
          {RESTAURANTS.map((r, i) => (
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
                  <FontAwesomeIcon icon={faUtensils} className={styles.food__icon} />
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
