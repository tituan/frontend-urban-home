import Hero from "@/components/Hero";
import styles from "../styles/pages/home.module.scss";
import Presentation from "@/components/Presentation";
import FlatCarousel from "@/components/FlatCarousel";
import District from "@/components/District";
import PracticalInfo from "@/components/Practical";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="theme-home">
      <Navigation />
      <div className={styles.home}>
        <main className={styles.main}>
          <Hero
            src="/img/logo-clichy-urban-home.png"
            alt="Clichy Urban Home logo"
            isHeading={true} // true → image dans un <h1>
          />
          <Presentation />
          <FlatCarousel />
          <District />
          <PracticalInfo />
          <Footer />
        </main>
      </div>
    </div>
   
  );
}
