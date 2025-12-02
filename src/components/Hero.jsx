import { useEffect, useRef, useState } from "react";

const images = [
  "/img/Anstrog0549.jpg",
  "/img/Anstrog0553.jpg",
  "/img/Anstrog0555.jpg",
  "/img/Anstrog0573.jpg",
  "/img/Anstrog0585.jpg",
  "/img/Anstrog0587.jpg",
  "/img/Anstrog0600.jpg",
  "/img/Anstrog0610.jpg",
  "/img/Anstrog0612.jpg",
  "/img/Anstrog0622.jpg",
  "/img/Anstrog0626.jpg",
  "/img/Anstrog0630.jpg",
  "/img/Anstrog0646.jpg",
  "/img/Anstrog0655.jpg",
  "/img/Anstrog0670.jpg",
  "/img/Anstrog0674.jpg",
  "/img/Anstrog0678.jpg",
  "/img/Anstrog0681.jpg",
  "/img/Anstrog0686.jpg",
  "/img/Anstrog0709.jpg",
];

function getRandomIndex(exclude = []) {
  if (images.length <= exclude.length) return exclude[0] ?? 0;

  let idx = Math.floor(Math.random() * images.length);
  let safety = 0;

  while (exclude.includes(idx) && safety < 30) {
    idx = Math.floor(Math.random() * images.length);
    safety++;
  }

  return idx;
}

export default function Hero() {
  // start med 0 til venstre og 1 til højre
  const leftRef = useRef(0);
  const rightRef = useRef(1);

  const [leftIndex, setLeftIndex] = useState(leftRef.current);
  const [rightIndex, setRightIndex] = useState(rightRef.current);

  // VENSTRE: skifter hvert 3. sekund
  useEffect(() => {
    if (images.length < 2) return;

    const intervalId = setInterval(() => {
      const next = getRandomIndex([leftRef.current, rightRef.current]);
      leftRef.current = next;
      setLeftIndex(next);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // HØJRE: starter efter 1 sekund, derefter også hvert 3. sekund
  useEffect(() => {
    if (images.length < 2) return;

    let intervalId;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        const next = getRandomIndex([rightRef.current, leftRef.current]);
        rightRef.current = next;
        setRightIndex(next);
      }, 3000);
    }, 1000); // kun ét delay i starten

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        {/* Venstre kolonne */}
        <div className="relative h-full w-full">
          {images.map((src, idx) => (
            <img
              key={`left-${src}`}
              src={src}
              alt=""
              className={[
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                idx === leftIndex ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Højre kolonne */}
        <div className="relative h-full w-full">
          {images.map((src, idx) => (
            <img
              key={`right-${src}`}
              src={src}
              alt=""
              className={[
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                idx === rightIndex ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
