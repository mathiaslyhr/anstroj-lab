import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag } from "lucide-react";

const linkClasses =
  "cursor-pointer text-[12px] font-normal uppercase tracking-[0.16em] hover:opacity-70 transition-opacity";

export default function Navbar() {
  // detect if homepage
  const isHome =
    typeof window !== "undefined" ? window.location.pathname === "/" : false;

  // transparent only on very top of homepage
  const [isSolid, setIsSolid] = useState(!isHome);
  const [isOpen, setIsOpen] = useState(false);

  const goHome = () => (window.location.href = "/");
  const goAbout = () => (window.location.href = "/om-os");
  const goProducts = () => (window.location.href = "/produkter");

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  // icon + text color
  const isDarkOnLight = isOpen || isSolid;
  const iconColor = isDarkOnLight ? "#000" : "#fff";
  const textColor = isDarkOnLight ? "text-black" : "text-white";

  const lineBase = `
    block h-[2px] w-6 transition-all duration-200 ease-out
    ${isDarkOnLight ? "bg-black" : "bg-white"}
  `;

  // scroll logic
  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const navbarHeight = 80;

    const updateSolid = () => {
      const visionSection = document.getElementById("vision");
      if (!visionSection) return;

      const rect = visionSection.getBoundingClientRect();
      const visionTopAbsolute = rect.top + window.scrollY;

      if (window.scrollY >= visionTopAbsolute - navbarHeight) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    updateSolid();
    window.addEventListener("scroll", updateSolid);
    window.addEventListener("resize", updateSolid);

    return () => {
      window.removeEventListener("scroll", updateSolid);
      window.removeEventListener("resize", updateSolid);
    };
  }, []);

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-30
          transition-colors duration-300
          ${
            isSolid || isOpen
              ? "bg-white border-b border-black/10"
              : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <nav className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">

            {/* LEFT SIDE */}
            <div className="flex items-center">

              {/* Mobile burger */}
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

              {/* Desktop links */}
              <div className={`hidden md:flex items-center gap-6 ${textColor}`}>
                <button className={linkClasses} onClick={goAbout}>
                  Om os
                </button>
                <button className={linkClasses} onClick={goProducts}>
                  Produkter
                </button>
              </div>
            </div>

            {/* LOGO */}
            <div className="flex items-center justify-center">
              <span
                className={`cursor-pointer text-3xl font-bold uppercase tracking-[0.1em] transition-colors duration-200 ${textColor}`}
                onClick={goHome}
              >
                ANSTRØJ
              </span>
            </div>

            {/* RIGHT SIDE ICONS */}
            <div className="flex items-center justify-end gap-4 min-w-[50px]">

              {/* Search */}
              <button className="cursor-pointer hover:opacity-70 transition-opacity">
                <Search size={18} strokeWidth={2} stroke={iconColor} />
              </button>

              {/* Wishlist */}
              <button className="cursor-pointer hover:opacity-70 transition-opacity">
                <Heart size={18} strokeWidth={2} stroke={iconColor} />
              </button>

              {/* Cart */}
              <button className="cursor-pointer hover:opacity-70 transition-opacity">
                <ShoppingBag size={18} strokeWidth={2} stroke={iconColor} />
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`
          md:hidden fixed inset-0 z-20 bg-[#F6F1EB]
          transition-opacity duration-300 ease-out
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="pt-[72px] px-6">
          <div className="flex flex-col gap-4 text-[16px] uppercase tracking-[0.16em] text-black">

            <button
              onClick={() => {
                closeMenu();
                goAbout();
              }}
              className="text-left py-2"
            >
              Om os
            </button>

            <button
              onClick={() => {
                closeMenu();
                goProducts();
              }}
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
