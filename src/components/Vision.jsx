export default function Vision() {
  return (
    <section
      id="vision"
      className="relative z-10 flex h-screen flex-col md:flex-row bg-white"
    >
      {/* Venstre: billede */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src="/img/download-2.jpg"
          alt="Visionen bag Anstrøg"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Højre: tekst (centreret vertikalt og horisontalt) */}
      <div className="flex flex-1 items-center justify-center px-6 md:px-16">
        <div className="max-w-md text-center md:text-left">
          <h2 className="mb-6 text-2xl md:text-3xl font-semibold">
            Visionen bag Anstrøg
          </h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>Anstrøg er skabt som et opgør med tom luksus.</p>
            <p>
              Vi tror på ærlige dufte, lavet med gode olier, dansk håndværk og
              en pris der giver mening.
            </p>
            <p>
              Affordable exclusivity — et lille anstrøg, der løfter hverdagen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
