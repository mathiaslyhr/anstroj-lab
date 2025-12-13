import { useState, useRef, useEffect } from "react";
import intensity from "../data/intensity.json";

export default function IntensityStep({ onNext, onBack }) {
  const [valueIndex, setValueIndex] = useState(2); // starter på "balanceret"
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const positions = [0, 25, 50, 75, 100];

  // drag handlere
  const startDrag = () => setIsDragging(true);
  
  const stopDrag = () => setIsDragging(false);

  const onDrag = (e) => {
    if (!isDragging || !trackRef.current) return;

    const track = trackRef.current.getBoundingClientRect();
    const x = e.clientX - track.left;

    // percentage of track
    let percent = (x / track.width) * 100;
    percent = Math.max(0, Math.min(100, percent)); // clamp 0–100%

    // find nearest of our 5 positions
    const nearestIndex = positions.reduce((closest, current, idx) => {
      return Math.abs(current - percent) < Math.abs(positions[closest] - percent)
        ? idx
        : closest;
    }, 0);

    setValueIndex(nearestIndex);
  };

  // eventlisteners til draggin
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", stopDrag);
    } else {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    }

    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, [isDragging]);

  const current = intensity[valueIndex];

  return (
    <div className="h-[90vh] px-6 flex flex-col justify-between">

      {/* TEXT SECTION */}
      <div className="flex flex-col h-full">
       <div>
            <h1 className=" mb-4">
            Hvordan foretrækker du, at din duft opfører sig?
            </h1>

            <h3 className="font-normal leading-relaxed mb-12">
            Vælg den intensitet, der passer bedst til din hverdag, fra diskret til mere tilstedeværende.
            </h3>
       </div>
      
        {/* selve slideren med labels */}
        <div className="flex flex-col h-full justify-center p-6">
             {/* LABELS */}
            <div className="flex justify-between text-s mb-3">
            {intensity.map((lvl, idx) => (
                <span key={lvl.id} className={idx === valueIndex ? "font-medium" : ""}>
                {lvl.label}
                </span>
            ))}
            </div>

            {/* SLIDER */}
            <div
            ref={trackRef}
            className="relative w-full h-2 bg-[#39516A] self-center rounded-full mt-4"
            >
            {/* THUMB */}
            <div
                onMouseDown={startDrag}
                className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-[#39516A] rounded-full cursor-pointer"
                style={{
                left: `calc(${positions[valueIndex]}% - 16px)`, // center the circle
                }}
            ></div>
            </div>
        </div>
       
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-16 mb-10 w-[80%] self-center">
        <button
          onClick={onBack}
          className="text-sm text-stone-500 hover:text-stone-800"
        >
          Tilbage
        </button>

        <button
          onClick={() => onNext(current.id)}
          className="px-6 py-2 bg-[#39516A] cursor-pointer text-white hover:bg-[#2f4355] transition-all"
        >
          Næste
        </button>
      </div>

    </div>
  );
}
