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
      "Din duftprofil holdes ren, blid og effortless. Vi prioriterer lette noter og undgår tunge basenuancer for at bevare transparens og ro.",
    warm:
      "Din duft skal formidle nærhed, varme og imødekommenhed. Derfor vælger vi afrundede musk-hjerter og varme trænoter.",
    confident:
      "Din duft må gerne have karakter og tydelighed. Vi arbejder med signaturnoter, der giver selvsikkerhed og tilstedeværelse.",
    elegant:
      "Din duft holdes harmonisk og afbalanceret. Vi kombinerer florale og træagtige retninger med finesse og ro."
  };

  // EMOJI STYLE ICONS
  const icons = {
    natural: "🌿",
    warm: "☀️",
    confident: "🔥",
    elegant: "✨"
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
           <span className="text-2xl">{icons[exp.id]}</span>
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
