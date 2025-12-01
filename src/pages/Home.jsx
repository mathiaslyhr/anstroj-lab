import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        {/* Sticky hero + About der ruller op over */}
        <section className="relative h-[200vh]">
          {/* Hero bliver “siddende” øverst mens man scroller i denne sektion */}
          <div className="sticky top-0 h-screen">
            <Hero />
          </div>

          {/* About-sektionen ligger nedenunder og kommer op fra bunden */}
          <About />
        </section>

        {/* Her kan vi senere lægge andre sektioner, produkter osv. */}
      </main>
    </div>
  );
}
