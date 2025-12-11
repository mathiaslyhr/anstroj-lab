import { ArrowRight } from "lucide-react";

export default function FindYourScent() {
  const goFindYourScent = () => (window.location.href = "/find-din-duft");

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-[#F6F1EB] px-8 py-10 md:px-14 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Find din duft
            </h2>
            <p className="text-sm md:text-base text-neutral-700">
              Usikker på hvilken duft der passer dig? Svar på få spørgsmål og
              få anbefalet de dufte, der matcher din stil og hverdag.
            </p>
          </div>

          <button
            type="button"
            onClick={goFindYourScent}
            className="group inline-flex items-center gap-3 uppercase text-[12px] tracking-[0.25em]"
          >
            <span>Tag duftguiden</span>
            <ArrowRight
              size={16}
              strokeWidth={2.25}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
