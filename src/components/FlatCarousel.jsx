"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "@/styles/components/flat-carousel.module.scss";

const IMAGES = [
  { src: "/img/home-01.png", alt: "Antoine HOMe" },
  { src: "/img/home-02.png", alt: "Antoine HOMe" },
  { src: "/img/home-08.jpg", alt: "Antoine HOMe" },
  { src: "/img/home-10.jpg", alt: "Antoine HOMe" },
  { src: "/img/home-11.jpg", alt: "Antoine HOMe" },
  { src: "/img/home-09.jpg", alt: "Antoine HOMe" },
];

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

export default function FlatCarousel() {
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => setMounted(true), []);
  if (!mounted || !IMAGES.length) {
    return (
      <section className={styles.flat} aria-label="Apartment gallery">
        <h2 className={styles.flat__title}>The flat</h2>
      </section>
    );
  }

  const settings = {
    infinite: false,
    arrows: false,
    dots: true,
    speed: 350,
    slidesToShow: isDesktop ? 3 : 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section className={styles.flat} aria-label="Apartment gallery" id="flat">
      <h2 className={styles.flat__title}>The flat</h2>

      {/* key force Slick à se ré-initialiser quand on change de breakpoint */}
      <Slider {...settings} className={styles.flat__slider} key={isDesktop ? "desktop" : "mobile"}>
        {IMAGES.map((img, i) => (
          <div className={styles.flat__item} key={`${img.src}-${i}`}>
            <div className={styles.flat__imgWrap}>
              <Image
                src={img.src}
                alt={img.alt || ""}
                fill
                className={styles.flat__img}
                sizes={isDesktop ? "33vw" : "92vw"}
                priority={i === 0}
              />
              <div className={styles.flat__overlay} aria-hidden="true" />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
