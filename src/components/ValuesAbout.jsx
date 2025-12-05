

export default function ValuesAbout() {
    return(
        <section className=" h-full md:h-[90vh]  grid grid-cols-1 md:grid-cols-3 border-t">
        <div className="relative group cursor-pointer flex flex-col justify-end items-start w-full max-h-screen overflow-hidden px-6 pb-28 border-r">
          <div className="absolute top-0 -left-16 z-2 leading-[0.8] text-[23em] select-none pointer-events-none transition-transform duration-1200 ease-in-out translate-x-[-0.15em] group-hover:translate-x-[1.18em]">01</div>
          
          <div className="mt-6 leading-relaxed absolute top-[35%] left-0 -translate-y-1/2 pl-6 max-w-[18.5em] opacity-0 group-hover:opacity-100 transition-opacity duration-1600 ease-[cubic-bezier(.645,.045,.355,1)] text-[15px] pointer-events-none">
            <p>
            Ærlige dufte, ærlige priser. Vi bygger Anstrøg på gennemsigtighed —
            uden skjulte procenter, oppustede avancer eller tom luksus. Det
            handler om at skabe noget, man kan stå inde for, og hvor kvaliteten
            taler højere end branding.
            </p>
          </div>
        
          <h4 className="uppercase text-[2em] leading-[1.2] ">Gennemsigtighed & Ærlighed</h4>
          <p className="uppercase">Ærlige dufte. Ærlige priser.</p>
        </div>

        <div className="relative group cursor-pointer flex flex-col justify-end items-start w-full max-h-screen overflow-hidden px-6 pb-28 border-r border-b">
          <div className="absolute top-0 -left-16 z-2 leading-[0.8] text-[23em] select-none pointer-events-none transition-transform duration-1200 ease-in-out translate-x-[-0.15em] group-hover:translate-x-[1.18em]">02</div>
          <div className="mt-6 leading-relaxed absolute top-[35%] left-0 -translate-y-1/2 pl-6 max-w-[18.5em] opacity-0 group-hover:opacity-100 transition-opacity duration-1600 ease-[cubic-bezier(.645,.045,.355,1)] text-[15px] pointer-events-none">
            <p>
            Vores olier kommer fra Grasse i Frankrig, og alt produceres her i
            Danmark. Den nordiske tilgang — enkelthed, kvalitet og ro — præger
            alt, vi skaber. Det er vores måde at gøre tingene ordentligt.
            </p>
          </div>

          <h4 className="uppercase text-[2em] max-w-[10em] leading-[1.2]">Kvalitet og Håndværk</h4>
          <p className="uppercase ">Gode olier. Dansk produktion.  Intet kompromis.</p>
        </div>

        <div className="relative group cursor-pointer flex flex-col justify-end items-start w-full max-h-screen overflow-hidden px-6 pb-28 border-b">
          <div className="absolute top-0 -left-16 z-2 leading-[0.8] text-[23em] select-none pointer-events-none transition-transform duration-1200 ease-in-out translate-x-[-0.15em] group-hover:translate-x-[1.18em]">03</div>
          <div className="mt-6 leading-relaxed absolute top-[35%] left-0 -translate-y-1/2 pl-6 max-w-[18.5em] opacity-0 group-hover:opacity-100 transition-opacity duration-1600 ease-[cubic-bezier(.645,.045,.355,1)] text-[15px] pointer-events-none">
            <p>
            Anstrøg udspringer af venskab, kultur og de relationer, der binder
            os sammen. Vores univers bygger på samtaler, øjeblikke og community
            — ikke klassiske top-down kampagner. Vi tror på energi, der opstår
            imellem mennesker.
            </p>
          </div>

          <h4 className="uppercase text-[2em] leading-[1.2]">Fællesskab og Forbindelser</h4>
          <p className="uppercase">Skabt af mennesker, ikke markedsføring.</p>
        </div>
      </section>
    );
}
