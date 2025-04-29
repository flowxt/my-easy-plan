import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Pricing from "./components/Pricing";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Presentation />
      <Services />
      <Expertise />
      <Pricing />
      <Contact />
    </main>
  );
}
