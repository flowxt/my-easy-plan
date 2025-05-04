import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Pricing from "./components/Pricing";
import Realisations from "./components/Realisations";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import FloatingCTA from "./components/FloatingCTA";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <Presentation />
      <Services />
      <Expertise />
      <Pricing />
      <Realisations />
      <CTABanner />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
