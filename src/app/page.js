import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import FloatingCTA from "./components/FloatingCTA";
import CTABanner from "./components/CTABanner";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Presentation />
      <Services />
      <CTABanner />
      <Expertise />
      <Pricing />
      <Contact />
      <FloatingCTA />
    </main>
  );
}
