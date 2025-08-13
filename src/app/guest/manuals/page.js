"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import styles from "@/styles/pages/manuals.module.scss";

const STORAGE_KEY = "guestAccess";

export default function ManualsPage() {
  const router = useRouter();

  useEffect(() => {
    const access = localStorage.getItem(STORAGE_KEY);
    if (access !== "true") {
      router.replace("/guest"); // renvoie vers la page code si non autorisé
    }
  }, [router]);

  return (
    <div className="theme-guest">
      {/* Navigation identique aux autres pages */}
      <Navigation />

        {/* Hero en haut de page */}
        <Hero src="/img/guest-corner.png" alt="Guest Corner" isHeading />
        {/* ===== How the TV works ===== */}
        <section id="tv" className={styles.tv}>
        <div className={styles.tv__container}>
            <h2 className={styles.tv__title}>How the TV Works</h2>
            <p className={styles.tv__intro}>
            These two guides help you set up the TV and browse available channels in seconds.
            Follow the steps shown on each image and you’ll be good to go.
            </p>

            <div className={styles.tv__grid}>
            {/* Part 1: Remote */}
            <div className={styles.tv__card}>
                <h3 className={styles.tv__cardTitle}>TV Remote</h3>
                <div className={styles.tv__imgWrap}>
                <Image
                    src="/img/tv-manuals.png"      // ← remplace par ton image
                    alt="TV remote instructions"
                    width={700}
                    height={900}
                    className={styles.tv__img}
                    priority
                />
                </div>
            </div>

            {/* Part 2: Inputs & Channels */}
            <div className={styles.tv__card}>
                <h3 className={styles.tv__cardTitle}>Box Remote</h3>
                <div className={styles.tv__imgWrap}>
                <Image
                    src="/img/boxremote.png"      // ← remplace par ton image
                    alt="How to select inputs and channels"
                    width={700}
                    height={900}
                    className={styles.tv__img}
                />
                </div>
            </div>
            </div>
        </div>
        </section>

    </div>
  );
}
