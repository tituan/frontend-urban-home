// app/layout.tsx (ou .js)
import "../styles/main.scss";
import { Quicksand, Montserrat, Noto_Sans_Mono } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script"; // ⬅️ important

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

// Idéal: mets l'ID dans .env.local -> NEXT_PUBLIC_GTM_ID=GTM-5LW9D59R
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-5LW9D59R";

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
    <html
      lang="fr"
      className={`${quicksand.variable} ${montserrat.variable} ${notoSansMono.variable}`}
    >
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* GTM dans le <head>, le plus haut possible */}
        <Script id="gtm-init" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body>
        {/* Noscript GTM juste après l’ouverture du <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
