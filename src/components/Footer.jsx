"use client";

import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/components/footer.module.scss";

export default function Footer() {
  const pathname = usePathname();
  const variant = pathname === "/paris" ? "paris" : "";

  return (
    <footer className={`${styles.footer} ${variant ? styles[`footer--variant`] : ""}`}>
      <div className={styles.footer__container}>
        
        {/* Emergency contacts */}
        <div className={styles.footer__contacts}>
          <a href="tel:+33616377154" className={styles.footer__link}>
            <FontAwesomeIcon icon={faPhone} /> Call me if you need
          </a>
          <a href="mailto:antoine.boisard8@gmail.com" className={styles.footer__link}>
            <FontAwesomeIcon icon={faEnvelope} /> Email me if you need
          </a>
          <a
            href="https://www.airbnb.fr/rooms/1085440006957941054?guests=1&adults=1&s=67&unique_share_id=f71486ca-60f2-47c6-9fc1-44f14c138f0e"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            Book more nights
          </a>
          <a href="tel:17" className={styles.footer__link}>
            🚔 Police call 17
          </a>
          <a href="tel:18" className={styles.footer__link}>
            🚒 Firefighters call 18
          </a>
        </div>

        {/* Copyright */}
        <p className={styles.footer__copy}>
          © {new Date().getFullYear()} | Made by Me with{" "}
          <FontAwesomeIcon icon={faHeart} className={styles.footer__heart} />
          <a
            href="https://paname-studio.fr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            PANAME STUDIO©
          </a>
        </p>
      </div>
    </footer>
  );
}
