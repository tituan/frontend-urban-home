import Image from "next/image";
import styles from "../styles/components/hero.module.scss";

export default function Hero({ src, alt, isHeading = true }) {
  // ✅ Ne rend rien si pas d'image ou pas de texte alternatif
  if (!src || src.trim() === "") return null;

  const imageElement = (
    <Image
      src={src}
      alt={alt || ""}
      className={styles.hero__image}
      width={600} // Taille ajustée via SCSS
      height={200}
      priority
    />
  );

  return (
    <section className={styles.hero}>
      <div className={styles.hero__imageWrapper}>
        {isHeading ? <h1>{imageElement}</h1> : imageElement}
      </div>
    </section>
  );
}