import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Transparency from "../components/Transparency";
import FeaturedProductsSlider from "../components/FeaturedProductsSlider";
import FindYourScentSection from "../components/FindYourScentSection";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";

export default function Home() {
  const sections = [
    { id: "hero", Component: Hero },
    { id: "vision", Component: Vision },
    { id: "transparency", Component: Transparency },
    { id: "featured", Component: FeaturedProductsSlider },
    { id: "find-scent", Component: FindYourScentSection },
    { id: "newsletter", Component: NewsletterSignup },
  ];

  return (
    <div className="bg-neutral-50 text-neutral-900">
      <Navbar />

      <main className="relative">
        <section
          className="relative"
          style={{ height: `${sections.length * 100}vh` }}
        >
          {sections.map(({ id, Component }, index) => (
            <div
              key={id}
              className="sticky top-0 h-screen"
              style={{ zIndex: index + 1 }}
            >
              <Component />
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
}
