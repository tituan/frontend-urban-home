import styles from "../styles/components/presentation.module.scss";

export default function Presentation() {
  return (
    <section className={styles.presentation}>
      <h2 className={styles.title}>
          <img src="/img/welcome.png" alt="Welcome" />
        </h2>
      <p className={styles.presentation__text}>
        Clichy Urban Home, your cozy pied-à-terre at the gates of Paris.
        Here, you get the best of both worlds: the tranquility of a neighborhood in full transformation and the energy of a capital city that never sleeps.
        Thanks to Metro Line 14, you’re just minutes away from Paris’ must-sees: the Louvre Museum, Saint-Lazare train station, Gare de Lyon, Bercy, and even Orly Airport.
        After a day filled with exploration, come back to the calm and comfort of Clichy – a true haven of peace to recharge before heading out on your next adventure.
      </p>
    </section>
  );
}
