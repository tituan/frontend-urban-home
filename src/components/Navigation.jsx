"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/components/navigation.module.scss";

/**
 * NAV: une seule source de vérité
 * - type: "internal" | "external"
 * - children?: sous-liens (même schéma)
 */
const NAV = [
  { type: "internal", href: "/", label: "Home" },
//   {
//     type: "internal",
//     href: "/carte",
//     label: "Carte",
//     children: [
//       { type: "internal", href: "/carte#restos", label: "Restaurants" },
//       { type: "internal", href: "/carte#shops", label: "Shops" },
//       { type: "internal", href: "/carte#metro", label: "Métro & bus" },
//     ],
//   },
   {
    type: "internal",
    href: "/district",
    label: "District"
  },
  { type: "internal", 
    href: "/things-to-do", 
    label: "Things to Do" 
},
  {
    type: "internal",
    href: "/info",
    label: "Info"
  },
  { type: "internal", 
    href: "/guest", 
    label: "Guest" 
},
  { type: "external", 
    href: "https://www.paris.fr", 
    label: "Paris" 
},
];

export default function Navigation() {
  // tiroir mobile
  const [drawerOpen, setDrawerOpen] = useState(false);
  // accordéon mobile: index du sous-menu ouvert
  const [mobileOpenSub, setMobileOpenSub] = useState(null);
  // état visuel (ombre) quand on n’est plus en haut
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setDrawerOpen(false);
    setMobileOpenSub(null);
  };

  const renderLink = (item, key, isSub = false) => {
    const className = isSub ? styles["nav__link"] + " " + styles["nav__link--sub"] : styles["nav__link"];

    if (item.type === "internal") {
      return (
        <Link key={key} href={item.href} className={className} onClick={() => setDrawerOpen(false)}>
          {item.label}
        </Link>
      );
    }
    return (
      <a
        key={key}
        href={item.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setDrawerOpen(false)}
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      {/* ===== Barre sticky commune mobile/desktop ===== */}
      <header className={`${styles["nav__bar"]} ${!atTop ? styles["nav__bar--scrolled"] : ""}`}>
        <div className={styles["nav__inner"]}>
          {/* <Link href="/" className={styles["nav__brand"]} aria-label="Accueil Clichy Urban Home">
            C.U.H.
          </Link> */}

          {/* Nav desktop (masquée en mobile via CSS) */}
          <nav className={styles["nav__desktop-nav"]} aria-label="Navigation principale">
            <ul className={styles["nav__menu"]}>
              {NAV.map((item, i) => {
                const hasChildren = Array.isArray(item.children) && item.children.length > 0;
                return (
                  <li
                    key={`d-${i}`}
                    className={`${styles["nav__item"]} ${hasChildren ? styles["nav__item--has-dropdown"] : ""}`}
                  >
                    {renderLink(item, `dl-${i}`)}

                    {hasChildren && (
                      <div className={styles["nav__dropdown"]} role="menu">
                        {item.children.map((child, ci) => renderLink(child, `dls-${i}-${ci}`, true))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Burger mobile */}
          <button
            className={styles["nav__burger"]}
            aria-label="Ouvrir le menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ===== Tiroir mobile (slide droite -> gauche) ===== */}
      <aside
        className={`${styles["nav__drawer"]} ${drawerOpen ? styles["nav__drawer--open"] : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles["nav__drawer-header"]}>
          <span className={styles["nav__brand-small"]}>CLICHY URBAN HOME</span>
          <button className={styles["nav__close"]} aria-label="Fermer le menu" onClick={closeAll}>
            ✕
          </button>
        </div>

        <nav className={styles["nav__drawer-nav"]} aria-label="Menu mobile">
          <ul className={styles["nav__drawer-menu"]}>
            {NAV.map((item, i) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              const opened = mobileOpenSub === i;

              return (
                <li key={`m-${i}`} className={styles["nav__drawer-item"]}>
                  <div className={styles["nav__drawer-row"]}>
                    {renderLink(item, `ml-${i}`)}
                    {hasChildren && (
                      <button
                        className={styles["nav__chevron"]}
                        aria-label={opened ? "Replier" : "Déplier"}
                        aria-expanded={opened}
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileOpenSub(opened ? null : i);
                        }}
                      >
                        ▾
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <div
                      className={`${styles["nav__submenu"]} ${opened ? styles["nav__submenu--open"] : ""}`}
                    >
                      {item.children.map((child, ci) => renderLink(child, `mls-${i}-${ci}`, true))}
                    </div>
                  )}
                </li>
              );
            })}
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
