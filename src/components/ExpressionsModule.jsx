import expressions from "../data/expressions.json";

export default function ExpressionModule({ expression }) {
  // Find det valgte expression i JSON
  const exp = expressions.find(e => e.id === expression);

  if (!exp) return null;

  // MINI-PERSONALITY TAGLINES
  const taglines = {
    natural: "The Quiet Glow",
    warm: "The Warm Embrace",
    confident: "The Bold Presence",
    elegant: "The Refined Harmony"
  };

  // EXPLANATION TEXTS 
  const explainers = {
    natural:
      "Du er typen, der ikke behøver at gøre for meget — din tilstedeværelse gør allerede indtryk. Din duftprofil er ren, blid og naturlig, som et stille åndedrag i en travl hverdag. Vi går efter lette, transparente noter, der matcher din måde at være i verden på: Ukompliceret, afslappet og ægte. Aldrig overdøvende, altid harmonisk.",
    warm:
      "Du har en varme, folk mærker før de når at hilse. Din duft skal være lige så imødekommende som dig selv: bløde musk-hjerter, runde trænoter og en aura af nærhed. Det er duftprofilen, der siger: ‘Kom tættere på.’ En energi, der binder mennesker sammen og gør øjeblikke mere intime.",
    confident:
      "Du træder ind i et rum med retning — og din duft må gerne gøre det samme. Din profil bærer signaturnoter med kant, styrke og tilstedeværelse. Ikke højrøstet, men tydelig. Du har den slags personlighed, der kan bære markante akkorder, som fortæller verden, at du ved, hvem du er, og hvor du står.",
    elegant:
      "Du bevæger dig med ro og finesse — den slags elegance, der ikke behøver at forklare sig. Din duftprofil er harmonisk og afbalanceret, med florale og træagtige retninger, der smelter sammen som et stille soundtrack i baggrunden. Tidløs, afmålt og underspillet luksus. Duftens svar på ‘less, but better.’"
  };



  return (
    <div className="rounded-xl ui-element w-[450px] overflow-hidden  relative">

      {/* TOP IMAGE */}
      <div
        className="h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${exp.largeImage})` }}
      />

      {/* CONTENT */}
      <div className="p-4 space-y-3">

        {/* Expression label + icon */}
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">{exp.label}</h2>
        </div>

        {/* Tagline */}
        <p className="text-sm font-medium italic">
          {taglines[exp.id]}
        </p>

        {/* Long explanation */}
        <p className="text-sm  leading-relaxed">
          {explainers[exp.id]}
        </p>
      </div>

    </div>
  );
}
