"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/components/navigation.module.scss";

// Liens = ancres internes
const NAV = [
  { type: "anchor", targetId: "flat", label: "Flat" },
  { type: "anchor", targetId: "district", label: "Hood" },
  { type: "anchor", targetId: "info", label: "Info" },
];

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const barRef = useRef(null);

  // Ombre sur la barre quand on n'est plus en haut
  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Met à jour la variable CSS pour scroll-margin-top
  useEffect(() => {
    const applyHeaderHeightVar = () => {
      const h = barRef.current?.offsetHeight || 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    applyHeaderHeightVar();
    window.addEventListener("resize", applyHeaderHeightVar);
    return () => window.removeEventListener("resize", applyHeaderHeightVar);
  }, []);

  // Smooth scroll
  const onNavClick = (e, item) => {
    if (item.type === "anchor") {
      e.preventDefault();
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setDrawerOpen(false);
      }
    }
  };

  const renderLink = (item, key, extraClass = "") => {
    if (item.type === "anchor") {
      return (
        <a
          key={key}
          href={`#${item.targetId}`}
          className={`${styles["nav__link"]} ${extraClass}`}
          onClick={(e) => onNavClick(e, item)}
        >
          {item.label}
        </a>
      );
    }
    return null;
  };

  const closeAll = () => setDrawerOpen(false);

  return (
    <>
      {/* ===== Barre sticky ===== */}
      <header
        ref={barRef}
        className={`${styles["nav__bar"]} ${!atTop ? styles["nav__bar--scrolled"] : ""}`}
      >
        <div className={styles["nav__inner"]}>
          {/* Nav desktop */}
          <nav className={styles["nav__desktop-nav"]} aria-label="Main navigation">
            <ul className={styles["nav__menu"]}>
              {NAV.map((item, i) => (
                <li key={`d-${i}`} className={styles["nav__item"]}>
                  {renderLink(item, `dl-${i}`)}
                </li>
              ))}
            </ul>
          </nav>

          {/* Burger mobile */}
          <button
            className={styles["nav__burger"]}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ===== Tiroir mobile ===== */}
      <aside
        className={`${styles["nav__drawer"]} ${drawerOpen ? styles["nav__drawer--open"] : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles["nav__drawer-header"]}>
          <span className={styles["nav__brand-small"]}>CLICHY URBAN HOME</span>
          <button className={styles["nav__close"]} aria-label="Close menu" onClick={closeAll}>
            ✕
          </button>
        </div>

        <nav className={styles["nav__drawer-nav"]} aria-label="Mobile navigation">
          <ul className={styles["nav__drawer-menu"]}>
            {NAV.map((item, i) => (
              <li key={`m-${i}`} className={styles["nav__drawer-item"]}>
                {renderLink(item, `ml-${i}`, styles["nav__link--drawer"])}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay derrière tiroir */}
      <div
        className={`${styles["nav__scrim"]} ${drawerOpen ? styles["nav__scrim--visible"] : ""}`}
        onClick={closeAll}
      />
    </>
  );
}
