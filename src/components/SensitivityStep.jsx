import { useState } from "react";
import sensitivityOptions from "../data/sensitivity.json"; 

export default function SensitivityStep({ onNext, onBack }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="h-full px-6 flex flex-col justify-between">

      {/* TEXT TOP */}
      <div>
        <h1 className="text-3xl font-medium mb-4">
          Nogle dufte kan virke mere overvældende end andre.
        </h1>

        <p className="w-[70%] leading-relaxed mb-12">
          Vælg den beskrivelse, der passer bedst til dig —
          det hjælper os med at undgå noter, der kan føles for stærke eller dominerende.
        </p>

        {/* OPTIONS GRID */}
        <div className="flex gap-4">

          {sensitivityOptions.map(option => {
            const isSelected = selected === option.id;

            return (
              <button
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={`
                text-left p-6 border transition-all h-70 w-70 flex flex-col
                  ${isSelected 
                    ? "bg-[#39516A] text-white border-[#39516A]" 
                    : "bg-[#E8E8E8] text-stone-800 border-[#D4D4D4] hover:border-[#999]"
                  }
                `}
              >
                <h3 className="font-medium pb-4 text-lg">{option.title}</h3>
                <p className={`text-sm ${isSelected ? "text-stone-200" : "text-stone-700"}`}>
                  {option.text}
                </p>
              </button>
            );
          })}

        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-16 mb-10 w-[85%] self-center">
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
            px-6 py-2 font-normal transition-all
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
