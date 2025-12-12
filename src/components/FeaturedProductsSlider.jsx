import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function FeaturedProductsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const products = [
    {
      id: 1,
      slug: "no-doubt",
      name: "No Doubt",
      subtitleLine1: "Noter af amber, cedertræ, sandeltræ,",
      subtitleLine2: "hvid musk og vanilje.",
      image: "/img/no-doubt.jpg",
    },
    {
      id: 2,
      slug: "calm",
      name: "Calm",
      subtitleLine1: "Noter af pink peber, sort peber,",
      subtitleLine2: "grapefrugt, vetiver og bourbon-vanilje.",
      image: "/img/calm.jpg",
    },
    {
      id: 3,
      slug: "pleasant",
      name: "Pleasant",
      subtitleLine1: "Noter af bergamot, jasmin, oud,",
      subtitleLine2: "egetræsmos og amber.",
      image: "/img/pleasant.jpg",
    },
  ];

  // -----------------------
  // SCROLL HANDLER
  // -----------------------
  const handleScroll = (e) => {
    const container = e.target;
    const totalWidth = container.scrollWidth - container.clientWidth;

    if (totalWidth <= 0) return;

    const progress = container.scrollLeft / totalWidth;
    const newIndex = Math.round(progress * (products.length - 1));

    setActiveIndex(newIndex);
  };

  const handleDotClick = (index) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const totalWidth = container.scrollWidth - container.clientWidth;

    const targetScroll =
      (index / (products.length - 1)) * totalWidth;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  // bruger slug i stedet for id
  const goToProduct = (slug) => {
    window.location.href = `/produkter/${slug}`;
  };

  return (
    <section className="relative z-10 h-screen bg-[#fff] flex items-center justify-center">
      <div className="w-full">
        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide px-6"
          onScroll={handleScroll}
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="
                min-w-[90%] md:min-w-[60%] mr-6 snap-center
                relative rounded-2xl overflow-hidden
                border border-neutral-200 bg-white
              "
            >
              {/* IMAGE */}
              <div className="h-[680px] w-full relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* TEXT & BUTTON */}
              <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-4 text-black">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {p.name}
                </h3>

                <p className="text-sm mt-1 leading-snug">
                  {p.subtitleLine1}
                  <br />
                  {p.subtitleLine2}
                </p>

                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => goToProduct(p.slug)}
                    className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] cursor-pointer"
                  >
                    <span>Køb</span>
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3 h-3 rounded-full transition cursor-pointer ${
                idx === activeIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
