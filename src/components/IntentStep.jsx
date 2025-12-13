import { useState } from "react";
import intentOptions from "../data/intent.json";

export default function IntentStep({ onNext, onBack }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="h-full px-6 flex flex-col justify-between">

      {/* TEXT SECTION */}
      <div>
        <h1 className=" mb-4">
          Hvad håber du at finde i en duft?
        </h1>

        <p className=" leading-relaxed mb-12">
          Vælg det udtryk, du søger lige nu —
          eller lad os overraske dig.
        </p>

        {/* OPTION CARDS */}
        <div className="flex flex-col  gap-6 w-[70%]">

          {intentOptions.map((option) => {
            const isSelected = selected === option.id;

            return (
              <button
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={`
                  text-left p-6 border w-full transition-all cursor-pointer
                  ${
                    isSelected
                      ? "bg-[#39516A] text-white border-[#39516A]"
                      : "bg-[#E8E8E8] text-stone-800 border-[#D4D4D4] hover:border-[#999]"
                  }
                `}
              >
                <h3 className="font-medium text-lg mb-1">
                  {option.title}
                </h3>

                <p
                  className={`text-sm ${
                    isSelected ? "text-stone-200" : "text-stone-700"
                  }`}
                >
                  {option.text}
                </p>
              </button>
            );
          })}

        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-16 mb-10 w-[90%] self-center">
        <button
          onClick={onBack}
          className="text-sm text-stone-500 hover:text-stone-800"
        >
          Tilbage
        </button>

        <button
          onClick={() => onNext(selected)}
          disabled={!selected}
          className={`
            px-6 py-2 transition-all cursor-pointer
            ${
              selected
                ? "bg-[#39516A] text-white hover:bg-[#2f4355]"
                : "bg-stone-300 text-stone-500 cursor-not-allowed"
            }
          `}
        >
          Næste
        </button>
      </div>

    </div>
  );
}
