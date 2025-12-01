import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 flex min-h-screen items-center bg-neutral-50"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
        {/* Venstre side – overskrift */}
        <div className="md:w-1/2">
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-neutral-500">
            Om Anstrøj
          </p>
          <h2 className="text-2xl md:text-3xl">
            Parfume uden bullshit.
            <br className="hidden md:block" />
            Affordable exclusivity fra Aarhus.
          </h2>
        </div>

        {/* Højre side – kort tekst + knap */}
        <div className="space-y-4 md:w-1/2">
          <p>
            Anstrøj er startet som et opgør med dyre logoer og tom luksus. To
            fyre fra Aarhus, der hellere vil lægge pengene i gode olier, høj
            koncentration og gennemsigtighed end i markedsføring og
            glansbilleder.
          </p>
          <p>
            Vi arbejder i små batches, med olie fra Grasse og produktion i
            Danmark. Målet er enkelt: dufte der føles eksklusive, men stadig er
            til at betale – et anstrøg mere i hverdagen, uden at det bliver
            uopnåeligt.
          </p>

          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-neutral-50"
          >
            <span>Læs mere</span>
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
