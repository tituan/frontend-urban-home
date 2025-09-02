"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/components/paris-forever.module.scss";

// Import obligatoire des styles slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Chargement dynamique de react-slick côté client
const Slick = dynamic(() => import("react-slick"), { ssr: false });

const slides = [
  { src: "/img/parisjetaime3.PNG", alt: "Paris je t'aime - 3" },
  { src: "/img/parisjetaime22.webp", alt: "Paris je t'aime - 2" },
  { src: "/img/parisjetaime4.PNG", alt: "Paris je t'aime - 4" },
  { src: "/img/parisjetaime1.PNG", alt: "Paris je t'aime - 1" },
  { src: "/img/parisjetaime5.PNG", alt: "Paris je t'aime - 5" },
  { src: "/img/parisjetaime2.PNG", alt: "Paris je t'aime - 2" },
  { src: "/img/parisjetaime7.PNG", alt: "Paris je t'aime - 7" },
  { src: "/img/parisjetaime6.PNG", alt: "Paris je t'aime - 6" },
  { src: "/img/parisjetaime8.PNG", alt: "Paris je t'aime - 8" },
  { src: "/img/parisjetaime9.jpg", alt: "Paris je t'aime - 9" },
  { src: "/img/parisjetaime13.png", alt: "Paris je t'aime - 13" },
  { src: "/img/parisjetaime11.jpg", alt: "Paris je t'aime - 11" },
  { src: "/img/parisjetaime20.webp", alt: "Paris je t'aime - 20" },
  { src: "/img/parisjetaime21.webp", alt: "Paris je t'aime - 21" },
  { src: "/img/parisjetaime23.webp", alt: "Paris je t'aime - 23" },
  { src: "/img/parisjetaime24.png", alt: "Paris je t'aime - 23" },
];

export default function ParisForeverSlider() {
  const [width, setWidth] = useState(0);

  // Gestion du resize (client only)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!width) return null; // Attendre que le DOM client soit prêt

  // Déterminer slidesToShow selon la largeur
  const slidesToShow = width > 1024 ? 4 : width > 640 ? 2 : 1;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    pauseOnHover: true,
    slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section
      id="paris-forever"
      aria-labelledby="paris-forever-title"
      className={styles.section}
    >
      <div className={styles.container}>
        <h2 id="paris-forever-title" className={styles.title}>
          Paris Forever
        </h2>
        <div className={styles.sliderWrap}>
          <Slick {...settings}>
            {slides.map((s, i) => (
              <div key={i} className={styles.slide}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={1200}
                  height={800}
                  className={styles.image}
                  unoptimized
                  priority={i < 2}
                />
              </div>
            ))}
          </Slick>
        </div>
      </div>
    </section>
  );
}
