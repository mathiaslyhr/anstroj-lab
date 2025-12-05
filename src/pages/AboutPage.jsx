import Navbar from "../components/Navbar";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ValuesAbout from "../components/ValuesAbout"

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const textRef = useRef(null);
  const leftRef = useRef(null);

  useLayoutEffect(() => {
    const text = textRef.current;
    const left = leftRef.current;

    if (!text || !left) return; // prevent crash

    // hvor langt teksten skal bevæge sig
    const moveDistance = left.offsetHeight - text.offsetHeight;

    gsap.fromTo(
      text,
      { y: 0 },
      {
        y: moveDistance,
        ease: "none",
        scrollTrigger: {
          trigger: left,
          start: "top 50%",
          end: "center top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#F6F1EB]">
      <Navbar />

      <div className="h-[calc(100vh-80px)] bg-[#D9D9D9] flex items-center justify-center leading-tight px-4 mt-20">
        <h1 className="text-4xl md:text-5xl leading-tight text-center">
          mere end bare en parfume.
        </h1>
      </div>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* LEFT - Image background */}
        <div className=" h-full bg-cover bg-center md:h-full bg-[url('/img/about-image2.jpg')]">
          <div className="px-8 py-8 h-full">
            <div ref={leftRef} className="relative min-h-screen">
              <div
                ref={textRef}
                className=" absolute left-0 right-0 flex justify-between text-sm text-white will-change-transform"
              >
                <span>Forskel</span>
                <span>Med</span>
                <span>Sammenhold</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - brødtekst */}
        <div className="flex items-start flex-col px-8 py-10 max-w-xl ">
          <h2 className="pb-6">Vores Historie</h2>
          <p>
            Anstrøg er skabt ud fra én mærkesag: at gøre parfumeverdenen ærlig,
            nærværende og til at forstå. Vi tror på gennemsigtighed, kvalitet og
            dansk håndværk — ikke skjulte procenter, tom luksus eller
            overfladisk branding. Anstrøg skal føles som noget menneskeligt.
            Noget, der forbinder.
          </p>
        </div>
      </section>

      <div className="px-8 pt-12 pb-20">
          <h3>Affordable Exclusitivity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 leading-relaxed items-start ">
          
          <div className="max-w-5xl">
            <p>
            Anstrøg begyndte ikke som et business-projekt, men som et
            fællesskab. To venner fra Aarhus, der undrede sig over, hvorfor
            parfumer ofte koster mere for glas og logo end for selve duften.
            Ideen opstod dér: Kunne man skabe dufte, der føltes ægte? Med
            kvalitet, sjæl og karakter — uden prissætning baseret på branding?
            </p>
          </div>
         
          <div className="">
            <p className="pb-4">
              Vi opdagede hurtigt, hvor store avancer og skjulte procenter der
              præger branchen. Det var ikke den vej, vi ville gå. Vi ville gøre
              det ordentligt. Bruge gode olier, være transparente og skabe noget,
              man kan stå inde for — også uden et stort navn bag.
            </p>
            <p>
              Derfor får vi vores olier fra Grasse i Frankrig og producerer alt
              her i Danmark. Den nordiske tilgang — enkelthed, ærlighed og
              kvalitet — præger hele processen. Vi kalder det affordable
              exclusivity: Luksus, der føles ægte og tilgængelig.
            </p>
          </div>
        </div>
      </div>

      <ValuesAbout/>

      <section>
        <div>
            <h3>Ét Anstrøg af gangen</h3>
            <p>
                Vi skaber parfumer i dag — men vores vision rækker længere. Vi
                drømmer om et univers af objekter, der løfter hverdagen med ro,
                æstetik og ærlighed.
            </p>
            <p>
                Anstrøg skal vokse med menneskerne, relationerne og øjeblikkene, der
                former det. Det er kun begyndelsen.
            </p>
        </div>
      </section>
    </div>
  );
}