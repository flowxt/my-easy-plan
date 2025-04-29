import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Pricing from "./components/Pricing";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <section id="home">
        <Hero />
      </section>

      <section id="presentation">
        <Presentation />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="expertise">
        <Expertise />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
