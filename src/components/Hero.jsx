import Image from "next/image";
import styles from "../styles/components/hero.module.scss";

export default function Hero({ src, alt, isHeading = true }) {
  if (!src || src.trim() === "") return null;

  const imageElement = (
    <Image
      src={src}
      alt={alt || ""}
      className={styles.hero__image}
      width={800}
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