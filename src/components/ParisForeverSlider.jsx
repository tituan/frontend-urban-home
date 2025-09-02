"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import styles from "@/styles/components/paris-forever.module.scss";

const Slick = dynamic(() => import("react-slick"), { ssr: false });

const slides = [
  { src: "/img/parisjetaime3.PNG", alt: "Paris je t'aime - 3" },
  { src: "/img/parisjetaime22.webp", alt: "Paris je t'aime - 2" },
  { src: "/img/parisjetaime4.PNG", alt: "Paris je t'aime - 4" },
  { src: "/img/parisjetaime1.PNG", alt: "Paris je t'aime - 1" },
  { src: "/img/parisjetaime5.PNG", alt: "Paris je t'aime - 1" },
  { src: "/img/parisjetaime2.PNG", alt: "Paris je t'aime - 2" },
  { src: "/img/parisjetaime7.PNG", alt: "Paris je t'aime - 2" },
  { src: "/img/parisjetaime6.PNG", alt: "Paris je t'aime - 2" },
  { src: "/img/parisjetaime8.PNG", alt: "Paris je t'aime - 2" },
  { src: "/img/parisjetaime9.jpg", alt: "Paris je t'aime - 2" },
  { src: "/img/parisjetaime13.png", alt: "Paris je t'aime - 2" },
  { src: "/img/parisjetaime11.jpg", alt: "Paris je t'aime - 2" },
  { src: "/img/parisjetaime20.webp", alt: "Paris je t'aime - 2" },
  { src: "/img/parisjetaime21.webp", alt: "Paris je t'aime - 2" },
];

export default function ParisForeverSlider() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Définit la largeur au montage
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      pauseOnHover: true,
      slidesToShow: 4, // Desktop
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablette / mobile
        { breakpoint: 640, settings: { slidesToShow: 1 } },  // Petit mobile
      ],
    }),
    []
  );

  if (!width) return null; // On attend d'avoir la largeur avant d'afficher

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
          {/* 🔑 Force Slick à se recharger quand la largeur change */}
          <Slick key={width} {...settings}>
            {slides.map((s, i) => (
              <div key={i} className={styles.slide}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={1200}
                  height={800}
                  className={styles.image}
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
