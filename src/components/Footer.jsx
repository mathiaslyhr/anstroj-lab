// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-700">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-14 text-sm">
        {/* ØVERSTE SEKTION – 3 kolonner */}
        <div className="grid gap-10 md:grid-cols-3 items-start text-left md:pl-12">
          {/* Venstre kolonne: brand + citat */}
          <div className="place-self-start">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-neutral-900">
              Anstrøj Lab
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Et moderne nordisk duftunivers, hvor råt håndværk
              <br />
              underspillet luksus og ærlig kvalitet mødes.
            </p>
          </div>

          {/* Midterste kolonne: politik-links */}
          <div className="place-self-start text-xs text-neutral-600">
            <ul className="space-y-2">
              <li>
                <a href="/persondata" className="hover:text-neutral-900">
                  Politik om beskyttelse af persondata
                </a>
              </li>
              <li>
                <a href="/refusion" className="hover:text-neutral-900">
                  Refusionspolitik
                </a>
              </li>
              <li>
                <a href="/servicevilkar" className="hover:text-neutral-900">
                  Servicevilkår
                </a>
              </li>
              <li>
                <a href="/kontaktinformation" className="hover:text-neutral-900">
                  Kontaktinformation
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-neutral-900">
                  Præferencer for cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Højre kolonne: Kontakt + FAQ */}
          <div className="place-self-start text-xs text-neutral-600">
            <nav className="flex flex-col space-y-2">
              <a href="/kontakt" className="hover:text-neutral-900">
                Kontakt
              </a>
              <a href="/faq" className="hover:text-neutral-900">
                Ofte stillede spørgsmål
              </a>
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
