export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand / intro */}
          <div className="max-w-sm">
            <div className="text-xl font-semibold tracking-[0.18em] uppercase mb-3">
              ANSTRØJ
            </div>
            <p className="text-sm text-neutral-300">
              Ærlige dufte, dansk håndværk og gennemsigtighed i hver eneste
              flakon.
            </p>
          </div>

          {/* Kontakt */}
          <div id="kontakt" className="text-sm">
            <h3 className="text-[13px] uppercase tracking-[0.18em] mb-3">
              Kontakt
            </h3>
            <div className="space-y-1 text-neutral-300">
              <p>Mail: <span className="underline decoration-neutral-500">kontakt@anstroej.dk</span></p>
              <p>Instagram: @anstroj</p>
              <p>København, Danmark</p>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="text-sm">
            <h3 className="text-[13px] uppercase tracking-[0.18em] mb-3">
              FAQ
            </h3>
            <ul className="space-y-1 text-neutral-300">
              <li>
                <a href="/faq" className="hover:text-white">
                  Levering & retur
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  Holdbarhed på duftene
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  Veganske & cruelty free?
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  Kontakt support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-white/10 pt-4 text-xs text-neutral-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} ANSTRØJ. Alle rettigheder forbeholdes.</span>
          <div className="flex gap-4">
            <a href="/vilkar" className="hover:text-neutral-300">
              Handelsbetingelser
            </a>
            <a href="/privatliv" className="hover:text-neutral-300">
              Privatlivspolitik
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
