import Image from "next/image";
import styles from "../styles/pages/home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <h1>
          <Image
            src="/img/logo-clichy-urban-home.png"
            alt="CLICHY URBAN HOME logo"
            fill
            className={styles.logo}
            priority
          />
        </h1>
      </main>
    </div>
  );
}
