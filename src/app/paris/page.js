import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PresentationParis from "@/components/PresentationParis";
import Footer from "@/components/Footer";
import styles from "@/styles/pages/paris.module.scss";
import Food from "@/components/FoodParis";
import Drink from "@/components/DrinkParis";

export default function ParisPage() {
  return (
    <div className="theme-paris">
      <Navigation />
      <div className={styles.paris}>
        <main className={styles.main}>
          <Hero src="/img/paris-jetaime.png" alt="Paris Discover" isHeading />
          <PresentationParis />
          <Food />
          <Drink />
          <Footer />
        </main>
      </div>
    </div>
  );
}
