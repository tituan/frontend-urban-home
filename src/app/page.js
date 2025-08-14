import Hero from "@/components/Hero";
import styles from "../styles/pages/home.module.scss";
import Presentation from "@/components/Presentation";
import FlatCarousel from "@/components/FlatCarousel";
import District from "@/components/District";
import PracticalInfo from "@/components/Practical";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import NearbyHome from "@/components/NearbyHome";
import ImageLinks from "@/components/LinksPage";

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
          <ImageLinks />
          <District />
          <PracticalInfo />
          <NearbyHome />
          <Footer />
        </main>
      </div>
    </div>
   
  );
}
