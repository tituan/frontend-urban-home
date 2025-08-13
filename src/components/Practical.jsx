"use client";

import Image from "next/image";
import styles from "@/styles/components/practical-info.module.scss";

const LINES = [
  {
    name: "Line 14",
    description:
      "Just a bit over 5 minutes from the apartment, Saint-Ouen station on Line 14 is the newest, fully automated metro line in Paris. It runs from 5:30 AM to around 1:00 AM, connecting you to key landmarks such as Gare Saint-Lazare, Châtelet, Louvre Pyramide, Gare de Lyon, Bercy, Orly Airport, and even the Stade de France.",
    imgSrc: "/img/ligne-14.webp",
    imgAlt: "Paris Metro Line 14 map",
    ratpLink: "https://www.bonjour-ratp.fr/lignes-metro/ligne-14/",
    mapsLink: "https://maps.app.goo.gl/LT78AmdVdRgmByxv9",
  },
  {
    name: "Line 13",
    description:
      "A little further away, Line 13 takes you directly to Champs-Élysées – Clemenceau, Montparnasse, and other iconic spots in Paris. A great alternative for exploring different parts of the city.",
    imgSrc: "/img/ligne-13.webp",
    imgAlt: "Paris Metro Line 13 map",
    ratpLink: "https://www.ratp.fr/vos-lignes/metro/13",
    mapsLink: "https://www.google.com/maps/place/Mairie+de+Clichy/@48.9033782,2.3050745,323m/data=!3m1!1e3!4m6!3m5!1s0x47e66f0c8b97c0c9:0xbd70072a2a706c3f!8m2!3d48.9033781!4d2.3061046!16zL20vMDJqZHNf!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function PracticalInfo() {
  return (
    <section className={styles.practical}>
      <div className={styles.practical__container}>
        <h2 className={styles.practical__title}>Practical Info</h2>
       <div className={styles.practical__app}>
        <p>
          Get your mobility on your phone – download the official Metro app here for tickets, maps, and more!  
          Available in multiple languages.
        </p>
        <div className={styles.practical__appLinks}>
          <a
            href="https://apps.apple.com/fr/app/%C3%AEle-de-france-mobilit%C3%A9s/id484527651" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.practical__appBtn}
          >
            Download on iPhone
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.applidium.vianavigo&hl=fr&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.practical__appBtn}
          >
            Download on Android
          </a>
        </div>
      </div>
        <div className={styles.practical__grid}>
          {LINES.map((line, index) => (
            <div key={index} className={styles.practical__item}>
              <h3 className={styles.practical__subtitle}>{line.name}</h3>
              <p className={styles.practical__desc}>{line.description}</p>

              <div className={styles.practical__imgWrap}>
                <Image
                  src={line.imgSrc}
                  alt={line.imgAlt}
                  width={800} // largeur réelle de l'image
                  height={500} 
                  className={styles.practical__img}
                />
                <div className={styles.practical__overlay} />
              </div>

              <div className={styles.practical__links}>
                <a
                  href={line.ratpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.practical__link}
                >
                  View on RATP
                </a>
                <a
                  href={line.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.practical__link}
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
