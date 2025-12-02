import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const leftImages = [
  "/img/Anstrog0600.jpg",
  "/img/Anstrog0646.jpg",
  "/img/Anstrog0610.jpg",
  "/img/Anstrog0655.jpg",
];

const rightImages = [
  "/img/Anstrog0612.jpg",
  "/img/Anstrog0622.jpg",
  "/img/Anstrog0626.jpg",
  "/img/Anstrog0630.jpg",
];

const DISPLAY_TIME = 3000;

export default function Hero() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftImages.length);
    }, DISPLAY_TIME);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let intervalId;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setRightIndex((prev) => (prev + 1) % rightImages.length);
      }, DISPLAY_TIME);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const handleCtaClick = () => {
    window.location.href = "/produkter";
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">

      <div className="grid h-full grid-cols-1 md:grid-cols-2">

        <div className="relative h-full w-full overflow-hidden">
          {leftImages.map((src, idx) => (
            <img
              key={`left-${src}`}
              src={src}
              alt=""
              className={[
                "absolute inset-0 h-full w-full object-cover object-[50%_center]",
                "transition-opacity duration-700",
                idx === leftIndex ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          ))}
        </div>

        <div className="relative h-full w-full overflow-hidden">
          {rightImages.map((src, idx) => (
            <img
              key={`right-${src}`}
              src={src}
              alt=""
              className={[
                "absolute inset-0 h-full w-full object-cover object-[50%_center]",
                "transition-opacity duration-700",
                idx === rightIndex ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-end justify-center pb-16">
        <button
          type="button"
          onClick={handleCtaClick}
          className="group cursor-pointer flex flex-col items-center text-white"
        >
          <div className="flex items-center gap-3 uppercase text-[12px] tracking-[0.25em] font-normal">
            <span>Køb nu</span>
            <ArrowRight
              size={16}
              strokeWidth={2.25}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </div>

          <div className="mt-2 h-[1px] w-full max-w-[110px] bg-white" />
        </button>
      </div>
    </section>
  );
}
