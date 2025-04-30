import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: "My Easy Plan | Plans et Permis de Construire",
  description:
    "Services professionnels de plans et permis de construire pour vos projets inférieurs à 150m² au Petit-Bornand et dans un rayon de 50km.",
  keywords:
    "permis de construire, plans architecturaux, petit-bornand, déclaration préalable, plans d'aménagement",
  icons: {
    icon: [
      {
        url: "/favicon_myeasyplan/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_myeasyplan/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/favicon_myeasyplan/favicon.ico", sizes: "any" },
    ],
    apple: {
      url: "/favicon_myeasyplan/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      { rel: "manifest", url: "/favicon_myeasyplan/site.webmanifest" },
      {
        rel: "icon",
        url: "/favicon_myeasyplan/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon_myeasyplan/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export const viewport = {
  themeColor: "#305544",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${playfair.variable} font-sans overflow-x-hidden`}
      >
        <NavBar />
        {children}
        <footer className="bg-gray-900 text-white py-6 text-center text-sm">
          <div className="container mx-auto px-4">
            <p>
              © {new Date().getFullYear()} My Easy Plan. Tous droits réservés.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
