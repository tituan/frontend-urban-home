"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/components/city-picks.module.scss";

// 👉 Remplace / complète cette liste avec tes vrais lieux
const SPOTS = [
  {
    title: "Musée d’Orsay",
    description:
      "Home to the world’s greatest collection of Impressionist art, the Musée d’Orsay also hosts captivating temporary exhibitions. Housed in a stunning former railway station, it’s a must-see after the Louvre. Good to know: entry is free on the first Sunday of each month, but tickets must be booked online in advance—no on-site sales for this event.",
    imgSrc: "/img/orsay.jpg",
    imgAlt: "Musée d’Orsay",
    siteUrl: "https://www.musee-orsay.fr/",
    mapsUrl: "https://maps.app.goo.gl/mqkgjgAwuPJ9haSY6",
  },
  {
    title: "SPA by SOTHYS",
    description:
      "An oasis of calm and well-being in the heart of Paris. Here, you can enjoy a hammam, sauna, and hot baths, followed by your choice of relaxing massages. It’s the perfect way to unwind and recharge after a day of sightseeing. The most popular package combines 1 hour of spa access (hammam, sauna, etc.) with a 1-hour massage — all at a reasonable, accessible price. To complete the experience, you can enjoy a drink at the hotel bar afterwards.",
    imgSrc: "/img/spa.jpg",
    imgAlt: "Spa ",
    siteUrl: "https://www.spasdefrance.fr/spa/spa-sothys-republique-393/",
    mapsUrl: "https://maps.app.goo.gl/Acub9f78eNPasRcY8",
  },
  {
    title: "Puces de Saint-Ouen",
    description:
      "Welcoming visitors at the gates of Paris since 1870 and just a 15-minute walk from the apartment, the Puces de Saint-Ouen are a must-see during any trip to Paris. The flea market is made up of different areas, each with its own unique character.The famous Marché Dauphine offers an eclectic mix of music, clothing, and vintage furniture, making it one of the most popular and pleasant spots to browse. You can also explore the Marché Couvert Cambo, or just next door, the Marché Paul Bert Serpette, where you’ll find everything from antique furniture to contemporary pieces.",
    imgSrc: "/img/puces.jpg",
    imgAlt: "Les puces de Saint-Ouen",
    siteUrl: "https://www.pucesdeparissaintouen.com/",
    mapsUrl: "https://maps.app.goo.gl/DFY5vcPh7sjGSt4W7",
  },
  {
    title: "Bring a picnic and enjoy the view",
    description:
      "Tucked away at the tip of the Île de la Cité, the Square du Vert-Galant is one of the most romantic spots in Paris. Perfect for an apéritif or a picnic for two, it offers stunning views of the Seine, the city’s monuments, and the ever-changing colors of the Parisian sky. Bring a picnic, a blanket to sit on, and let yourself be carried away by the magic of Paris. Paris, je t’aime..",
    imgSrc: "/img/square2.png",
    imgAlt: "Square du Vert-Galant",
    siteUrl: "https://maps.app.goo.gl/uV92hjAVuKQatQ9T8",
    mapsUrl: "https://maps.app.goo.gl/DFY5vcPh7sjGSt4W7",
  },
  {
    title: "Les Buttes-Chaumont",
    description:
      "A true landscaped gem in the heart of Paris, perfect for lounging on the sunny lawns at the end of the day, going for a run, or enjoying a drink in one of its charming pavilions. My personal favorite is Rosa Bonheur, a lively spot where all of Paris comes together for an evening aperitif in a unique setting. With its hills, waterfalls, and stunning viewpoints, the Buttes-Chaumont perfectly embody the charm of a Parisian landscaped park. If you get the chance, it’s well worth a visit!",
    imgSrc: "/img/buttes.webp",
    imgAlt: "Buttes Chaumont",
    siteUrl: "https://fr.wikipedia.org/wiki/Parc_des_Buttes-Chaumont",
    mapsUrl: "https://maps.app.goo.gl/N7SusQTKEQfT8ACR8",
  },
  {
    title: "Maison Berthillon for Ice Cream !",
    description:
      "One of the best artisanal ice creams in Paris, Maison Berthillon is famous for its delicious, high-quality flavors, whether enjoyed on the spot or taken to go. It’s so good that there’s almost always a line — but trust me, it’s worth the wait. Once you have your cone or cup, stroll over to the quays of Île Saint-Louis and savor it by the Seine. A simple, nostalgic pleasure that feels purely magical.",
    imgSrc: "/img/bertillon.jpg",
    imgAlt: "Maison Berthillon",
    siteUrl: "https://berthillon.fr/",
    mapsUrl: "https://maps.app.goo.gl/cC92FSFJvavenNry9",
  },
];

export default function CityPicks() {
  return (
    <section className={styles.spots} id="spots" aria-label="City picks in Paris">
      <div className={styles.spots__container}>
        <h2 className={styles.spots__title}>City Picks</h2>
        <p className={styles.spots__intro}>
          A fresh mix of must-see museums, chill spas, iconic views, and quirky gems.
          A little bit of everything, just tap, go, and vibe-check Paris.
        </p>

        <div className={styles.spots__grid}>
          {SPOTS.map((s, i) => (
            <article className={styles.spots__card} key={`${s.title}-${i}`}>
              <div className={styles.spots__imgWrap}>
                <Image
                  src={s.imgSrc}
                  alt={s.imgAlt}
                  fill
                  className={styles.spots__img}
                  sizes="(max-width: 1023px) 92vw, 30vw"
                  priority={i === 0}
                />
              </div>

              <h3 className={styles.spots__cardTitle}>{s.title}</h3>
              <p className={styles.spots__cardDesc}>{s.description}</p>

              <div className={styles.spots__actions}>
                <a
                  href={s.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.spots__btn}
                  aria-label={`Visit website of ${s.title}`}
                >
                  <FontAwesomeIcon icon={faStar} className={styles.spots__icon} />
                  Website
                </a>
                <a
                  href={s.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.spots__btn}
                  aria-label={`Get directions to ${s.title} on Google Maps`}
                >
                  <FontAwesomeIcon icon={faLocationDot} className={styles.spots__icon} />
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
