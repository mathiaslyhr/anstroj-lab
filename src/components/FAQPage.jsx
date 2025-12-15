// src/pages/FAQPage.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "Hvor længe holder duften?",
    answer:
      "Holdbarhed afhænger af både hudtype og miljø. Som udgangspunkt anbefaler vi 2–4 sprays og at du genopfrisker efter behov i løbet af dagen.",
  },
  {
    question: "Er det unisex?",
    answer:
      "Ja. Vores parfumer er skabt til alle – bær dem alene eller layer dem efter humør.",
  },
  {
    question: "Kan jeg returnere, hvis jeg ombestemmer mig?",
    answer:
      "Du har 30 dages nem retur fra levering.\n\n• Fuldt beløb for uåbnede/uforseglede varer i original stand.\n• Åbnet/afprøvet parfume kan også returneres, men med et eventuelt værdifradrag.\n• Reklamationsret: 24 måneder.\n\nSend en mail til kontakt@anstrog.dk for at modtage en returlabel.",
  },
  {
    question: "Hvad hvis I bliver udsolgt?",
    answer:
      "Første batch er på 25 stk. pr. duft. Tilmeld dig ventelisten – så får du besked, inden næste genopfyldning går live 🙂",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 md:px-8 pt-36 pb-20">
          {/* INTRO */}
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl font-semibold mb-3">
              Ofte stillede spørgsmål
            </h1>

            <p className="text-neutral-600 text-sm md:text-base mb-6 leading-relaxed">
              Kan du ikke finde det, du leder efter? Du er altid velkommen til
              at skrive til os.
            </p>

            <a
              href="/kontakt"
              className="inline-flex items-center justify-center border px-6 py-3 text-[12px] uppercase tracking-[0.2em]
                         bg-[#39516A] text-white border-[#39516A] font-semibold
                         hover:bg-white hover:text-black hover:border-black
                         transition-colors duration-200 cursor-pointer
                         rounded-none"
            >
              Kontakt os
            </a>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              const answerParagraphs = item.answer.split("\n\n");

              return (
                <div
                  key={item.question}
                  className="border border-neutral-200 bg-white rounded-none"
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="text-[15px] md:text-base font-medium text-neutral-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div className="px-6 pb-4 text-neutral-600 text-xs md:text-sm leading-relaxed space-y-3">
                      {answerParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
