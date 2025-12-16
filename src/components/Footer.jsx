// src/components/Footer.jsx
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="border-t border-neutral-200 bg-[#fafafa] text-neutral-700">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-14 text-sm">
        {/* ØVERSTE SEKTION – 3 kolonner */}
        <div className="grid gap-10 md:grid-cols-3 items-start text-left md:pl-12">
          {/* Venstre kolonne: brand + citat */}
          <div className="place-self-start font-bold">
            <h3 className="font-medium tracking-[0.25em] uppercase text-neutral-900">
              Anstrøg Lab
            </h3>
            <h4 className="mt-3 font-bold leading-relaxed text-neutral-900">
              Et moderne nordisk duftunivers, hvor råt håndværk
              <br />
              underspillet luksus og ærlig kvalitet mødes.
            </h4>
          </div>

          {/* Midterste kolonne: politik-links */}
          <div className="place-self-start text-xs text-neutral-600">
            <ul className="space-y-2">
              <li>
                <button href="/persondata" className="hover:text-neutral-900 cursor-pointer">
                  Politik om beskyttelse af persondata
                </button>
              </li>
              <li>
                <button href="/refusion" className="hover:text-neutral-900 cursor-pointer">
                  Refusionspolitik
                </button>
              </li>
              <li>
                <button href="/servicevilkar" className="hover:text-neutral-900 cursor-pointer">
                  Servicevilkår
                </button>
              </li>
              <li>
                <button href="/kontaktinformation" className="hover:text-neutral-900 cursor-pointer">
                  Kontaktinformation
                </button>
              </li>
              <li>
                <button href="/cookies" className="hover:text-neutral-900 cursor-pointer">
                  Præferencer for cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Højre kolonne: Kontakt + FAQ */}
          <div className="place-self-start text-xs text-neutral-600">
            <nav className="flex flex-col items-start space-y-2">
              <button onClick={() => navigate("/kontakt")} className="hover:text-neutral-900 cursor-pointer">
                Kontakt
              </button>
              <button onClick={() => navigate("/faq")} className="hover:text-neutral-900 cursor-pointer">
                Ofte stillede spørgsmål
              </button>
            </nav>
          </div>
        </div>

        {/* STREG I MIDTEN (forbliver centreret) */}
        <div className="mt-12 border-t border-neutral-200" />

        {/* Copyright – centreret og ikke fed */}
        <div className="mt-6 text-xs text-neutral-600 text-center font-normal">
          © {year}, Anstrøj Lab. Alle rettigheder forbeholdes.
        </div>
      </div>
    </footer>
  );
}
