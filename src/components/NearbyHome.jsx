"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/components/nearby.module.scss";

// 👉 Remplace / complète avec tes vrais lieux + liens Google Maps
const NEARBY_SPOTS = [
    {
    title: "Pharmacy",
    description:
      "Your go-to for medication, advice, and essentials.",
    imgSrc: "/img/pharma.jpg",
    imgAlt: "Pharmacy near the apartment",
    mapsUrl: "https://maps.app.goo.gl/vWsVeXoe98iBuLBw6",
  },
  {
    title: "Tabac",
    description:
      "Cigarettes, stamps... all the essentials just steps away.",
    imgSrc: "/img/tabac2.png",
    imgAlt: "Tabac near the apartment",
    mapsUrl: "https://maps.app.goo.gl/jgQ9twac5bmxc2qAA",
  },
  
  {
    title: "Cobbler",
    description:
      "Shoe repair, key cutting, leather care, quick and convenient.",
    imgSrc: "/img/cordonier4.jpg",
    imgAlt: "Cobbler near the apartment",
    mapsUrl: "https://maps.app.goo.gl/91QjsojA55STUBzv9",
  },
  {
    title: "BIG Supermarket",
    description:
      "All your daily groceries with extended hours and great selection.",
    imgSrc: "/img/leclerc.jpeg",
    imgAlt: "Supermarket near the apartment",
    mapsUrl: "https://maps.app.goo.gl/RZAD9HDbf2jkVtFXA",
  },
];

export default function NearbyHome() {
  return (
    <section
      className={styles.nearby}
      id="nearby"
      aria-label="Nearby essentials around the apartment"
    >
      <div className={styles.nearby__container}>
        <h2 className={styles.nearby__title}>Nearby Essentials</h2>
        <p className={styles.nearby__intro}>
          Handy spots right around the apartment — from a tabac and pharmacy to a
          cobbler, bakery, supermarket, and more. Tap “GO” to open directions.
        </p>

        <div className={styles.nearby__grid}>
          {NEARBY_SPOTS.map((s, i) => (
            <article className={styles.nearby__card} key={`${s.title}-${i}`}>
              <div className={styles.nearby__imgWrap}>
                <Image
                  src={s.imgSrc}
                  alt={s.imgAlt}
                  fill
                  className={styles.nearby__img}
                  sizes="(max-width: 1023px) 92vw, 30vw"
                  priority={i === 0}
                />
                {/* Optionnel : overlay rose léger */}
                <div className={styles.nearby__overlay} aria-hidden="true" />
              </div>

              <h3 className={styles.nearby__cardTitle}>{s.title}</h3>
              <p className={styles.nearby__cardDesc}>{s.description}</p>

              <div className={styles.nearby__actions}>
                <a
                  href={s.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.nearby__btn}
                  aria-label={`Open Google Maps for ${s.title}`}
                >
                  <FontAwesomeIcon icon={faLocationDot} className={styles.nearby__icon} />
                  GO
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
