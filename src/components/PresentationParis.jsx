import styles from "../styles/components/presentation-paris.module.scss";

export default function PresentationParis() {
  return (
    <section className={styles.presentation}>
      <h2 className={styles.presentation__title}>Paris mon Amour</h2>
      <p className={styles.presentation__text}>
       Paris is pure magic — one of the most beautiful cities in the world is calling.
        From high fashion to world-class gastronomy, and iconic landmarks like the Eiffel Tower, Paris is ready for you to explore, taste, and fall in love with. The City of Love, style, and endless charm is waiting… come live it, breathe it, feel it.
      </p>
    </section>
  );
}
