import { useState } from "react";
import { Search, ShoppingBag } from "lucide-react";

const linkClasses =
  "cursor-pointer text-[12px] font-normal uppercase tracking-[0.16em] hover:opacity-70 transition-opacity";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const goHome = () => (window.location.href = "/");
  const goAbout = () => (window.location.href = "/om-os");
  const goProducts = () => (window.location.href = "/produkter");

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  const iconColor = isOpen ? "#000" : "#fff";
  const textColor = isOpen ? "text-black" : "text-white";

  const lineBase = `
    block h-[2px] w-6 transition-all duration-200 ease-out
    ${isOpen ? "bg-black" : "bg-white"}
  `;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30">
        <nav className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
            
            <div className="flex items-center">
              <div className="md:hidden flex items-center justify-start min-w-[50px]">
                <button
                  aria-label="Menu"
                  className="flex flex-col justify-center gap-[5px] cursor-pointer"
                  onClick={toggleMenu}
                >
                  <span
                    className={
                      lineBase + (isOpen ? " translate-y-[7px] rotate-45" : "")
                    }
                  />
                  <span
                    className={
                      lineBase +
                      " transition-opacity" +
                      (isOpen ? " opacity-0" : " opacity-100")
                    }
                  />
                  <span
                    className={
                      lineBase +
                      (isOpen ? " -translate-y-[7px] -rotate-45" : "")
                    }
                  />
                </button>
              </div>

              <div className="hidden md:flex items-center gap-6 text-white">
                <button className={linkClasses} onClick={goAbout}>
                  Om os
                </button>
                <button className={linkClasses} onClick={goProducts}>
                  Produkter
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <span
                className={`cursor-pointer text-3xl font-bold uppercase tracking-[0.1em] transition-colors duration-200 ${textColor}`}
                onClick={goHome}
              >
                ANSTRØJ
              </span>
            </div>

            <div className="flex items-center justify-end gap-4 min-w-[50px]">
              <button className="cursor-pointer hover:opacity-70 transition-opacity">
                <Search size={18} strokeWidth={2} stroke={iconColor} />
              </button>

              <button className="cursor-pointer hover:opacity-70 transition-opacity">
                <ShoppingBag size={18} strokeWidth={2} stroke={iconColor} />
              </button>
            </div>

          </div>
        </nav>
      </header>


      <div
        className={`
          md:hidden fixed inset-0 z-20 bg-[#F6F1EB]
          transition-opacity duration-300 ease-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="pt-[72px] px-6">
          <div className="flex flex-col gap-4 text-[16px] uppercase tracking-[0.16em] text-black">
            <button
              onClick={() => { closeMenu(); goAbout(); }}
              className="text-left py-2"
            >
              Om os
            </button>

            <button
              onClick={() => { closeMenu(); goProducts(); }}
              className="text-left py-2"
            >
              Produkter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
