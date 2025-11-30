import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";

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
  title:
    "Permis de Construire Haute-Savoie (74) | Dessinateur Projeteur - My Easy Plan",
  description:
    "Dessinateur projeteur près du Petit-Bornand-les-Glières (74). Plans et permis de construire pour extensions, vérandas, garages. Déclaration préalable de travaux. Rayon 50km : Bonneville, La Clusaz, Thônes, Cluses.",
  keywords:
    "dessinateur projeteur haute-savoie, permis de construire 74, plans extension maison, déclaration préalable travaux, petit-bornand-les-glières, bonneville, la clusaz, thônes, plan véranda, plan garage, architecte moins 150m2, dossier permis construire, plans architecturaux haute-savoie",
  metadataBase: new URL("https://my-easy-plan.com"),
  openGraph: {
    title: "Permis de Construire Haute-Savoie | Dessinateur Projeteur",
    description:
      "Dessinateur projeteur près du Petit-Bornand. Plans et permis de construire pour extensions, vérandas, garages en Haute-Savoie (74). Rayon 50km.",
    url: "https://my-easy-plan.com",
    siteName: "My Easy Plan",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://my-easy-plan.com/images/plan_manuel.jpg",
        width: 1200,
        height: 630,
        alt: "Plans de permis de construire en Haute-Savoie - My Easy Plan",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://my-easy-plan.com",
  },
  authors: [{ name: "Laurie Pringuet - My Easy Plan" }],
  creator: "Laurie Pringuet",
  publisher: "My Easy Plan",
  category: "Architecture & Urbanisme",
  verification: {
    google: "votre-code-google-search-console",
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://my-easy-plan.com",
    name: "My Easy Plan",
    description:
      "Dessinateur projeteur spécialisé en plans et permis de construire en Haute-Savoie",
    url: "https://my-easy-plan.com",
    telephone: "+33672744739",
    email: "pringuetlaurie@outlook.fr",
    image: "https://my-easy-plan.com/images/logo.png",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Le Petit-Bornand-les-Glières",
      addressLocality: "Glières-Val-de-Borne",
      postalCode: "74130",
      addressRegion: "Haute-Savoie",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "46.0333",
      longitude: "6.3833",
    },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "46.0333",
          longitude: "6.3833",
        },
        geoRadius: "50000",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    serviceType: [
      "Permis de construire",
      "Déclaration préalable de travaux",
      "Plans architecturaux",
      "Extension maison",
      "Plans véranda",
      "Plans garage",
    ],
    founder: {
      "@type": "Person",
      name: "Laurie Pringuet",
      jobTitle: "Dessinateur Projeteur",
    },
    knowsAbout: [
      "Permis de construire",
      "PLU (Plan Local d'Urbanisme)",
      "Cadastre",
      "Déclaration préalable",
      "Plans architecturaux",
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${playfair.variable} font-sans overflow-x-hidden`}
        suppressHydrationWarning
      >
        <NavBar />
        {children}
        <Analytics />
        <footer className="bg-gray-900 text-white py-8 text-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-6">
                <a
                  href="https://atypikcode.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-300 transition-colors"
                >
                  Site réalisé par Atypik Code
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
