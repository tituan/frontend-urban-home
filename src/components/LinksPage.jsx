"user client"

import Link from "next/link";
import styles from "@/styles/components/images-links.module.scss";

export default function ImageLinks() {
  return (
    <div className={styles.imageLinks}>
      <Link href="/paris">
        <img src="/img/paris-jetaime.png" alt="Paris je t'aime" />
      </Link>
      <Link href="/guest">
        <img src="/img/guest-corner.png" alt="Guest corner" />
      </Link>
    </div>
  );
}
