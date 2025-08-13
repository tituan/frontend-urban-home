import "../styles/main.scss";
import Navigation from "@/components/Navigation";
import { Quicksand, Montserrat, Noto_Sans_Mono } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-montserrat",
});

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-noto-sans-mono",
});

export const metadata = {
  title: "CLICHY URBAN HOME",
  description:
    "CLICHY URBAN HOME ★4.9 – Charmant 2 pièces lumineux et entièrement équipé, idéal pour couples ou voyageurs solo. À 5 min métro L14 (centre de Paris, gares, Bercy) et 10 min L13 (Stade de France). Cuisine équipée, bureau, Wi-Fi fibre. Proche commerces et transports (bus, Vélib’).",
  openGraph: {
    title: "CLICHY URBAN HOME",
    description:
      "CLICHY URBAN HOME ★4.9 – Charmant 2 pièces lumineux et entièrement équipé, idéal pour couples ou voyageurs solo. À 5 min métro L14 (centre de Paris, gares, Bercy) et 10 min L13 (Stade de France). Cuisine équipée, bureau, Wi-Fi fibre. Proche commerces et transports (bus, Vélib’).",
    images: [{ url: "/logo-clichy-urban-home.png", width: 1200, height: 630, alt: "CLICHY URBAN HOME logo" }],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${quicksand.variable} ${montserrat.variable} ${notoSansMono.variable}`}>
      <body>
        {/* <Navigation />   ⬅️ navigation globale (burger mobile + barre desktop au scroll) */}
        {children}
      </body>
    </html>
  );
}
