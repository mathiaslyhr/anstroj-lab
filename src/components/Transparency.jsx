import { ArrowRight } from "lucide-react";

export default function Transparency() {
  return (
    <section
      id="gennemsigtighed"
      className="relative z-10 flex h-screen flex-col md:flex-row bg-white"
    >
      {/* Venstre: tekst (centreret) */}
      <div className="flex flex-1 items-center justify-center px-6 md:px-16">
        <div className="max-w-md text-center md:text-left">
          <h2 className="mb-6 text-2xl md:text-3xl font-semibold">
            Gennemsigtighed. Kvalitet.
            <br className="hidden md:block" />
            Dansk håndværk.
          </h2>

          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              Anstrøg begyndte ikke med en forretningsplan, men med et behov
              for gennemsigtighed.
            </p>
            <p>
              Vi var trætte af parfumer, hvor du betaler mere for logo end for
              selve duften.
            </p>
            <p>
              Derfor skabte vi et alternativ: dufte med ærlig kvalitet, dansk
              håndværk og uden de usynlige procenter.
            </p>
          </div>

          <button
            type="button"
            className="group cursor-pointer flex flex-col items-start mt-6"
          >
            <div className="flex items-center gap-3 uppercase text-[12px] tracking-[0.25em] font-normal">
              <span>Lær mere</span>
              <ArrowRight
                size={16}
                strokeWidth={2.25}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </div>
            <div className="mt-2 h-[1px] w-full max-w-[110px] bg-black" />
          </button>
        </div>
      </div>

      {/* Højre: billede */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src="/img/download-1.jpg"
          alt="Gennemsigtighed hos Anstrøg"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
