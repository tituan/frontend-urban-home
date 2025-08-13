"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/components/navigation.module.scss";

const HOME_ANCHORS = [
  { targetId: "flat", label: "Flat" },
  { targetId: "district", label: "Hood" },
  { targetId: "info", label: "Info" },
];

const PARIS_ANCHORS = [
  { targetId: "food", label: "Food" },
  // { targetId: "museum", label: "Museum" },
  { targetId: "drink", label: "Drink" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const isParis = pathname === "/paris";
  const isGuest = pathname.startsWith("/guest");

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [activeId, setActiveId] = useState(null);
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const applyHeaderHeightVar = () => {
      const h = barRef.current?.offsetHeight || 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    applyHeaderHeightVar();
    window.addEventListener("resize", applyHeaderHeightVar);
    return () => window.removeEventListener("resize", applyHeaderHeightVar);
  }, []);

  useEffect(() => {
    const anchors = isHome ? HOME_ANCHORS : isParis ? PARIS_ANCHORS : [];
    if (!anchors.length) return;

    const els = anchors.map(a => document.getElementById(a.targetId)).filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome, isParis]);

  const handleAnchorClick = (e, targetId, page) => {
    const onThisPage =
      (page === "home" && isHome) ||
      (page === "paris" && isParis);

    if (!onThisPage) {
      setDrawerOpen(false);
      return;
    }

    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setDrawerOpen(false);
  };

  const desktopLinks = useMemo(() => {
    if (isHome) {
      return [
        { type: "internal", href: "/", label: "Home" },
        ...HOME_ANCHORS.map(a => ({ type: "anchor", page: "home", ...a })),
        { type: "internal", href: "/paris", label: "Discover Paris" },
        { type: "internal", href: "/guest", label: "Guest Corner" },
      ];
    }
    if (isParis) {
      return [
        { type: "internal", href: "/", label: "Home" },
        ...PARIS_ANCHORS.map(a => ({ type: "anchor", page: "paris", ...a })),
        { type: "internal", href: "/paris", label: "Discover Paris" },
        { type: "internal", href: "/guest", label: "Guest Corner" },
      ];
    }
    if (isGuest) {
      return [
>>>>>>> guest-corner
        
        { type: "internal", href: "/", label: "Home" },
        { type: "internal", href: "/paris", label: "Discover Paris" },
        { type: "internal", href: "/guest", label: "Guest Corner" },
      ];
    }
    return [
      { type: "internal", href: "/paris", label: "Discover Paris" },
      { type: "internal", href: "/", label: "Home" },
      { type: "internal", href: "/guest", label: "Guest Corner" },
    ];
  }, [isHome, isParis, isGuest]);

  const linkClass = (base, isActive) =>
    `${base} ${isActive ? styles["nav__link--active"] : ""}`;

  const renderLink = (item, key, extraClass = "") => {
    if (item.type === "anchor") {
      const href =
        item.page === "home"
          ? (isHome ? `#${item.targetId}` : `/#${item.targetId}`)
          : (isParis ? `#${item.targetId}` : `/paris#${item.targetId}`);

      const isActiveHere =
        (isHome && item.page === "home" && activeId === item.targetId) ||
        (isParis && item.page === "paris" && activeId === item.targetId);

      return (
        <a
          key={key}
          href={href}
          className={linkClass(`${styles["nav__link"]} ${extraClass}`, isActiveHere)}
          onClick={(e) => handleAnchorClick(e, item.targetId, item.page)}
        >
          {item.label}
        </a>
      );
    }

    if (item.type === "internal") {
      const isActive =
        (item.href === "/paris" && isParis) ||
        (item.href === "/" && isHome) ||
        (item.href === "/guest" && isGuest);

      return (
        <Link
          key={key}
          href={item.href}
          className={linkClass(`${styles["nav__link"]} ${extraClass}`, isActive)}
          onClick={() => setDrawerOpen(false)}
        >
          {item.label}
        </Link>
      );
    }

    return null;
  };

  const closeAll = () => setDrawerOpen(false);

  return (
    <>
      <header
        ref={barRef}
        className={`${styles["nav__bar"]} 
          ${!atTop ? styles["nav__bar--scrolled"] : ""} 
          ${isParis ? styles["nav__bar--paris"] : ""} 
          ${isGuest ? styles["nav__bar--guest"] : ""}`}
      >
        <div className={styles["nav__inner"]}>
          <nav className={styles["nav__desktop-nav"]} aria-label="Main navigation">
            <ul className={styles["nav__menu"]}>
              {desktopLinks.map((item, i) => (
                <li key={`d-${i}`} className={styles["nav__item"]}>
                  {renderLink(item, `dl-${i}`)}
                </li>
              ))}
            </ul>
          </nav>
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

      <aside
        className={`${styles["nav__drawer"]} 
          ${drawerOpen ? styles["nav__drawer--open"] : ""} 
          ${isParis ? styles["nav__drawer--paris"] : ""} 
          ${isGuest ? styles["nav__drawer--guest"] : ""}`}
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
            {desktopLinks.map((item, i) => (
              <li key={`m-${i}`} className={styles["nav__drawer-item"]}>
                {renderLink(item, `ml-${i}`, styles["nav__link--drawer"])}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div
        className={`${styles["nav__scrim"]} 
          ${drawerOpen ? styles["nav__scrim--visible"] : ""} 
          ${isParis ? styles["nav__scrim--paris"] : ""} 
          ${isGuest ? styles["nav__scrim--guest"] : ""}`}
        onClick={closeAll}
      />
    </>
  );
}
