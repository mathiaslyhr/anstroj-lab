import { Search, ShoppingBag } from "lucide-react";

const linkClasses =
  "cursor-pointer text-[11px] uppercase tracking-[0.16em] hover:opacity-70 transition-opacity";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <nav className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 py-5">
        
        {/* Venstre */}
        <div className="flex items-center gap-6 text-neutral-900">
          <span className={linkClasses} onClick={() => scrollToSection("about")}>
            Om os
          </span>
          <span className={linkClasses} onClick={() => scrollToSection("products")}>
            Produkter
          </span>
        </div>

        {/* Midten: større logo uden hover */}
        <div className="flex items-center justify-center">
          <span
            className="cursor-pointer text-xl md:text-2xl font-bold uppercase tracking-[0.35em] text-neutral-900"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ANSTRØJ
          </span>
        </div>

        {/* Højre */}
        <div className="flex items-center justify-end gap-4 text-neutral-900">
          <button aria-label="Søg" className="cursor-pointer hover:opacity-70 transition-opacity">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button aria-label="Kurv" className="cursor-pointer hover:opacity-70 transition-opacity">
            <ShoppingBag size={18} strokeWidth={1.5} />
          </button>
        </div>

      </nav>
    </header>
  );
}
