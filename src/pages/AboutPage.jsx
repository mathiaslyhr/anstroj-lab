import Navbar from "../components/Navbar";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ValuesAbout from "../components/ValuesAbout"
import Footer from "../components/Footer";

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

      <div className="h-[calc(100vh-76px)] bg-[#D9D9D9] flex items-center justify-center leading-tight px-4 mt-[76px] bg-no-repeat bg-cover bg-center bg-[url('/img/Anstrog0612.jpg')]">
        <h1 className="text-4xl text-white md:text-5xl leading-tight text-center">
          mere end bare en parfume.
        </h1>
      </div>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* LEFT - Image background */}
        <div className=" h-full bg-cover bg-center bg-no-repeat md:h-full bg-[url('/img/about-image2.jpg')]">
          <div className="px-8 py-8 h-full">
            <div ref={leftRef} className="relative min-h-screen">
              <div
                ref={textRef}
                className=" absolute left-0 right-0 flex justify-between text-m text-white will-change-transform"
              >
                <span>Forskel</span>
                <span>Med</span>
                <span>Sammenhold</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - brødtekst */}
        <div className="flex items-start flex-col gap-4 px-8 py-10 max-w-2xl ">
          <div className="flex flex-col gap-4">
             <h2 className="pb-6">Vores Historie</h2>
              <p>
                Anstrøg udspringer ikke af en forretningsplan, men af en følelse.
                En undren. En lille frustration. Og et ønske om at skabe noget mere ærligt.
              </p>
              <p>Vi stod som to unge fyre fra Aarhus og kiggede på parfumehylderne. Det slog os, hvor lidt af prisen der egentlig handlede om selve duften. Hvor meget luft – logoer, emballage og markedsføring – der lå mellem produktet og prisen. Det føltes hverken gennemsigtigt eller rigtigt.

              Der opstod et tomrum mellem high-end luksus og billig hverdagsduft, som slet ikke ramte den måde, vi og vores venner lever på. Vi savnede et brand med sjæl. Noget, der føltes menneskeligt. Ikke poleret og afstandstagende, men jordnært, tilgængeligt og ægte.</p>

              <p>Anstrøg blev vores svar.</p>
          </div>
         
          <div className="pt-6 flex flex-col gap-4">
             <h4>Hvorfor gør vi det anderledes?</h4>
            <p>Fra begyndelsen stod det klart for os, at vi ikke bare ville lave endnu en parfume. Vi ville udfordre måden, branchen tænker værdi på. Når man skræller de store kampagner, de tunge glasflasker og den blankpolerede storytelling væk, står man tilbage med det, der virkelig betyder noget: selve duften og oplevelsen af at bære den.</p>
            <p>Vi spurgte os selv, hvorfor ærlig kvalitet skulle være forbeholdt dem, der har råd til at betale for brandnavnet. Hvorfor følelsen af luksus ikke måtte være inkluderende. Og hvorfor unge mennesker, der gerne vil dufte godt og udtrykke sig selv, ofte står over for valget mellem noget billigt og uinspirerende — eller noget uopnåeligt dyrt.</p>
            <p>For os handler Anstrøg om at genopfinde den balance. At skabe dufte, der er så veludførte, at de kan stå skulder ved skulder med de store brands, men uden at kræve en pris, der føles urealistisk. Vi gør det anderledes, fordi vi mener, at kvalitet ikke skal være en illusion. Den skal kunne mærkes, duftes og retfærdiggøres.</p>
          </div>

         
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
         
          <div>
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

      <section className="grid grid-cols-[1fr_2fr]">
           <div>
            <img src="/img/about-2.jpg" alt="Anstrøg parfume" />
           </div>

           <div className="pt-12 px-8">
             <h3>Ét Anstrøg af gangen</h3>
             <div className="grid grid-cols-2 gap-12 pt-4">
                <div className="flex flex-col gap-4">
                  <p>
                Vi skaber parfumer i dag — men vores vision rækker længere. Vi
                drømmer om et univers af objekter, der løfter hverdagen med ro,
                æstetik og ærlighed.
                </p>
                <p> Anstrøg skal vokse med menneskerne, relationerne og øjeblikkene, der former det. Vi ser det som et levende projekt, der udvikler sig i takt med dem, der bærer det. Ikke som et færdigt brand, men som noget organisk — et lille kultunivers, man kan træde ind i og være en del af.</p>
                </div>

                <div>
                   <p>
                    Vi tror på, at de små ting gør en forskel. Et lys i vindueskarmen. En duft i entréen. Et objekt på natbordet. Et lille øjeblik af nærhed eller æstetik, der ændrer stemningen i et rum eller i kroppen.
                  </p>
                  <p>Derfor bygger vi Anstrøg ét lag ad gangen. Ét produkt, én idé, én fortælling ad gangen.
                    Med tid, med tålmodighed og med respekt for håndværk.</p>
                    <p>Det her er kun begyndelsen — det første anstrøg i et større billede.</p>
                </div>
             </div>
           </div>
      </section>
      <Footer/>
    </div>
  );
}