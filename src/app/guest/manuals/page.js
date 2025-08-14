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
        <section id="tv" className={styles.tv}>
        <div className={styles.tv__container}>
            <h2 className={styles.tv__title}>How to Use the Washing Machine</h2>
            <p className={styles.tv__intro}>
            To operate the washing machine, first select the desired program, then press the Start button.
The quickest program, suitable for most laundry, is Turn and GO. 
You can also adjust the spin speed according to your needs.
Pour the detergent into compartment number 2, and if you are using fabric softener, place it in the central compartment marked with a star symbol.
            </p>

            <div className={styles.tv__grid}>
            {/* Part 1: Remote */}
            <div className={styles.tv__card}>
                <h3 className={styles.tv__cardTitle}>Select and Start Program</h3>
                <div className={styles.tv__imgWrap}>
                <Image
                    src="/img/washing.png" 
                    alt="Program instructions"
                    width={700}
                    height={900}
                    className={styles.tv__img}
                    priority
                />
                </div>
            </div>

            {/* Part 2: Inputs & Channels */}
            <div className={styles.tv__card}>
                <h3 className={styles.tv__cardTitle}>Where to Put the Laundry Products</h3>
                <div className={styles.tv__imgWrap}>
                <Image
                    src="/img/product.png" 
                    alt="How to put product"
                    width={700}
                    height={900}
                    className={styles.tv__img}
                />
                </div>
            </div>
            </div>
        </div>
        </section>
        <section id="checkout" className={styles.checkout} aria-labelledby="checkout-title">
      <div className={styles.checkout__container}>
        <h2 id="checkout-title" className={styles.checkout__title}>Checkout Procedure</h2>
        <p className={styles.checkout__intro}>
          Before leaving the apartment, please follow these simple steps:
        </p>

        <ol className={styles.checkout__list}>
          <li className={styles.checkout__item}>
            <span className={styles.checkout__icon} aria-hidden>🗑</span>
            <div>
              <strong>Trash</strong> – Please throw the garbage in the containers located on the
              ground floor, in front of the staircase door.
            </div>
          </li>

          <li className={styles.checkout__item}>
            <span className={styles.checkout__icon} aria-hidden>🛁</span>
            <div>
              <strong>Towels</strong> – Leave the used towels on top of the washing machine.
            </div>
          </li>

          <li className={styles.checkout__item}>
            <span className={styles.checkout__icon} aria-hidden>🍽</span>
            <div>
              <strong>Dishes</strong> – Make sure there are no dirty dishes left in the kitchen sink.
            </div>
          </li>

          <li className={styles.checkout__item}>
            <span className={styles.checkout__icon} aria-hidden>🎒</span>
            <div>
              <strong>Personal items</strong> – Double-check that you haven’t left anything behind in the apartment.
            </div>
          </li>

          <li className={styles.checkout__item}>
            <span className={styles.checkout__icon} aria-hidden>🔑</span>
            <div>
              <strong>Keys</strong> – Place the apartment key in the secure lockbox located outside.
              Use the code <strong className={styles.checkout__code}>****</strong> to open it. Make sure to
              close it properly and change the code after locking.
            </div>
          </li>

          <li className={styles.checkout__item}>
            <span className={styles.checkout__icon} aria-hidden>📩</span>
            <div>
              <strong>Departure confirmation</strong> – Please send me a quick message once you have left the apartment.
            </div>
          </li>
        </ol>

        <p className={styles.checkout__thanks}>Thank you and safe travels! — Antoine</p>
      </div>
    </section>

    </div>
  );
}
