import { ArrowRight } from "lucide-react";

export default function FindYourScentSection() {
  const goToFinder = () => {
    window.location.href = "/find-din-duft";
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background Image */}
      <img
        src="/img/Anstrog0681.jpg"
        alt="Find din duft"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Content – placeret i højre side, men venstrejusteret */}
      <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-16">
        <div className="max-w-md text-left bg-white/0">
          
          <h2 className="mb-6 text-2xl md:text-3xl font-semibold">
            Find din duft
          </h2>

          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>Usikker på hvilken duft der passer til dig?</p>
            <p>
              Tag vores korte duftguide og få et personligt match til den
              Anstrøj-duft, der passer til din stil og hverdag.
            </p>
          </div>

          {/* BUTTON – venstrejusteret, underline under hele knappen */}
          <button
            type="button"
            onClick={goToFinder}
            className="group cursor-pointer flex flex-col items-start mt-6"
          >
            <div className="flex items-center gap-3 uppercase text-[12px] tracking-[0.25em] font-semibold">
              <span>Find din duft</span>
              <ArrowRight
                size={16}
                strokeWidth={2.25}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </div>

            {/* underline matcher knappens bredde */}
            <div className="mt-2 h-[1px] w-full max-w-[160px] bg-black" />
          </button>
        </div>
      </div>
    </section>
  );
}
