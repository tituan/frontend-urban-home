"use client";

import Image from "next/image";
import Link from "next/link"; // ✅ importer Link
import styles from "@/styles/components/district.module.scss";

const DISTRICT_ITEMS = [
  {
    title: "A bottle of Wine please !",
    description: "Château Clichy offers wines from every French region, paired with fine charcuterie, for an authentic taste experience.",
    link: "https://www.google.com/maps/place/Ch%C3%A2teau+Clichy/@48.9017803,2.3146089,50m/data=!3m1!1e3!4m14!1m7!3m6!1s0x47e66f65e0fd3415:0xd4a31f16235b7c57!2sLa+Tribu!8m2!3d48.9018186!4d2.3148207!16s%2Fg%2F11jz08jghm!3m5!1s0x47e66fffd0b44115:0x7181aaf8629ce280!8m2!3d48.9017348!4d2.3145579!16s%2Fg%2F11wr3lnwqm!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
    imgSrc: "/img/district/chateau-clichy.jpg",
    imgAlt: "Cave à vin à Clichy",
  },
  {
    title: "La Fromagerie",
    description: "La fromagerie du Général, discover a selection of fine French cheeses, warmly served with exceptional hospitality — and take home a true taste of France to savor.",
    link: "https://www.google.com/maps/place/La+Fromagerie+du+G%C3%A9n%C3%A9ral/@48.9014321,2.3153564,67m/data=!3m1!1e3!4m14!1m7!3m6!1s0x47e66f65e0fd3415:0xd4a31f16235b7c57!2sLa+Tribu!8m2!3d48.9018186!4d2.3148207!16s%2Fg%2F11jz08jghm!3m5!1s0x47e66fc2763db8b1:0xb8a446dea62070c8!8m2!3d48.9013224!4d2.3155804!16s%2Fg%2F11r8thcjc5!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
    imgSrc: "/img/district/fromagerie-clichy.jpg",
    imgAlt: "Fromagerie à Clichy",
  },
  {
    title: "La Boulangerie",
    description: "Epicureo offers the neighborhood’s best baguettes, croissants, and pain au chocolat, all homemade with quality ingredients — plus delicious pastries you can enjoy on-site with a coffee.",
    link: "https://www.google.com/maps/place/Boulangerie+EPICUREO/@48.902165,2.3139263,50m/data=!3m2!1e3!5s0x47e66f0f52bb837b:0xefb97a7eabcfe049!4m14!1m7!3m6!1s0x47e66f65e0fd3415:0xd4a31f16235b7c57!2sLa+Tribu!8m2!3d48.9018186!4d2.3148207!16s%2Fg%2F11jz08jghm!3m5!1s0x47e66f565283f161:0xc56a6b525af2fa33!8m2!3d48.9022674!4d2.3138431!16s%2Fg%2F11sfx38sbq!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
    imgSrc: "/img/district/epicureo.jpg",
    imgAlt: "Boulangerie à Clichy",
  },
  {
    title: "Pizza Time !",
    description: "Pizzeria Marguerite serves delicious pizzas from a varied menu, available to enjoy on-site or take away, in a modern setting with friendly staff — a must-visit when a pizza craving strikes.",
    link: "https://www.google.com/maps/place/Marguerite+-+Restaurant+Italien+Clichy/@48.9015526,2.3155077,90m/data=!3m1!1e3!4m14!1m7!3m6!1s0x47e66f65e0fd3415:0xd4a31f16235b7c57!2sLa+Tribu!8m2!3d48.9018186!4d2.3148207!16s%2Fg%2F11jz08jghm!3m5!1s0x47e66f060b671215:0x90079723d14576d2!8m2!3d48.9018578!4d2.3159137!16s%2Fg%2F11bzsd0d4z!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
    imgSrc: "/img/district/pizzeria-marguerite.jpg",
    imgAlt: "Pizza à Clichy",
  },
  {
    title: "GOOD French Restaurant",
    description: "La Tribu, a cozy neighborhood restaurant serving homemade, seasonal dishes that evoke the warmth of family meals and timeless comfort food.",
    link: "https://www.google.com/maps/place/La+Tribu/@48.9018221,2.3122458,645m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47e66f65e0fd3415:0xd4a31f16235b7c57!8m2!3d48.9018186!4d2.3148207!16s%2Fg%2F11jz08jghm!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
    imgSrc: "/img/district/tribue-clichy.jpg",
    imgAlt: "La tribu à Clichy",
  },
  {
    title: "AsianFood",
    description: "Le Mékong a cozy neighborhood Asian restaurant serving generous and delicious Bo-Bun. Friendly staff and a warm atmosphere make it a go-to spot. Just steps from the apartment, perfect for anyone craving a Bo-Bun fix!",
    link: "https://maps.app.goo.gl/pnAyF7hQNSdoAEsr9",
    imgSrc: "/img/asia.jpg",
    imgAlt: "La tribu à Clichy",
  },
  {
    title: "Restaurant Rosette",
    description: "Just a 15-minute walk from the apartment and proudly listed in the Michelin Guide’s Bib Gourmand selection. It serves refined, thoughtfully crafted dishes made with quality ingredients — all at a very reasonable price. A true gem in Clichy",
    link: "https://maps.app.goo.gl/69maaQXCaiNhiWYD6",
    imgSrc: "/img/district/rosette.jpg",
    imgAlt: "Rosette à Clichy",
  },
  {
    title: "Des Crêpes, des crêpes !",
    description: "Crêpier Gourmet offers a menu entirely made of crêpes — mostly savory, but also sweet. If you’ve never tried a savory crêpe, this is the place to start!",
    link: "https://maps.app.goo.gl/TJRYJaW6V4qZPj7b9",
    imgSrc: "/img/crepe.jpg",
    imgAlt: "Crêpier Gourmet",
  },
  {
    title: "Sushis !",
    description: "Kawasaki is a classic sushi spot with a simple, no-frills menu featuring all the essentials — from fresh sushi to flavorful maki rolls. Perfect for anyone craving Japanese flavors in the neighborhood.",
    link: "https://maps.app.goo.gl/4SbqVHBy9wVmzQXh8",
    imgSrc: "/img/sushis2.jpg",
    imgAlt: "Japonais Kawasaki",
  },
  {
    title: "Coming Soon !",
    description: "Alain Ducasse is transforming Clichy’s iconic modernist Maison du Peuple into an international temple of gastronomy.",
    link: "https://www.google.com/maps/place/Maison+du+Peuple+de+Clichy/@48.9016779,2.3154569,222m/data=!3m1!1e3!4m14!1m7!3m6!1s0x47e66f65e0fd3415:0xd4a31f16235b7c57!2sLa+Tribu!8m2!3d48.9018186!4d2.3148207!16s%2Fg%2F11jz08jghm!3m5!1s0x47e66f061c5a90f9:0x828cedbbe0662819!8m2!3d48.9011773!4d2.3148265!16s%2Fg%2F1233fy3n!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
    imgSrc: "/img/district/halle-du-peuple.jpg",
    imgAlt: "Restaurant à Clichy",
  },
];

export default function District() {
  return (
    <section className={styles.district} aria-label="Points d’intérêt du quartier" id="district">
      <h2 className={styles.district__title}>Hood</h2>
      <p className={styles.district__intro}>
        The neighborhood is a peaceful area where you can find everything you need — from a restaurant, a wine cellar, and a cheese shop to a bakery — offering plenty to enjoy and making it easy to savor the local life. <strong>Click on the item to have the location.</strong>
      </p>

      <div className={styles.district__grid}>
        {DISTRICT_ITEMS.map((item, index) => {
          const isExternal = item.link?.startsWith("http");

          const Card = (
            <>
              <div className={styles.district__imgWrap}>
                <Image
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  fill
                  className={styles.district__img}
                  sizes="(max-width: 1024px) 48vw, 48vw"
                  priority={index < 2}
                />
                {/* ✅ filtre rouge semi-transparent (disparaît au hover via SCSS) */}
                <div className={styles.district__overlay} aria-hidden="true" />
              </div>
              <h3 className={styles.district__itemTitle}>{item.title}</h3>
              <p className={styles.district__itemDesc}>{item.description}</p>
            </>
          );

          return isExternal ? (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.district__item}
            >
              {Card}
            </a>
          ) : (
            <Link key={index} href={item.link || "#"} className={styles.district__item}>
              {Card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
