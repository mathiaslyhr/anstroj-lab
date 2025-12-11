import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Transparency from "../components/Transparency";
import FeaturedProductsSlider from "../components/FeaturedProductsSlider";

export default function Home() {
  return (
    <div className="bg-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        {/* -------- SCENE 1: Hero + Vision -------- */}
        <section className="relative h-[200vh]">
          {/* Hero bliver siddende i toppen i denne scene */}
          <div className="sticky top-0 h-screen">
            <Hero />
          </div>

          {/* Vision kommer op fra bunden og lægger sig ovenpå Hero */}
          <Vision />
        </section>

        {/* -------- SCENE 2: Gennemsigtighed sticky + produkter -------- */}
        <section className="relative h-[200vh]">
          {/* Gennemsigtighed bliver sticky, når den rammer toppen */}
          <div className="sticky top-0 h-screen">
            <Transparency />
          </div>

          {/* Produkt-sektionen kommer op fra bunden og lægger sig ovenpå Gennemsigtighed */}
          <FeaturedProductsSlider />
        </section>

        {/* Flere scener (Find din duft, nyhedsbrev, footer) kan vi bygge på samme måde bagefter */}
      </main>
    </div>
  );
}
