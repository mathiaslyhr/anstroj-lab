import { useState } from "react";
import situations from "../data/situations.json"

export default function SituationsStep({  onNext, onBack }) {
    const [selected, setSelected] = useState([]);

   function toggle(id) {
    if (selected.includes(id)) {
      setSelected(selected.filter(x => x !== id));
    } else {
      if (selected.length >= 2) return;
      setSelected([...selected, id]);
    }
  }
  return (
     <div className="h-full flex flex-col">

      {/* heading */}
      <div>
        <h1 className="text-3xl px-6 font-medium mb-4">
          Dufte passer ind i vores rytmer og rutiner.
        </h1>

        <h3 className="font-normal w-[80%] leading-relaxed px-6">
          Vælg de situationer, der ligner din hverdag mest. Det handler om dig — 
          ikke om at matche en duft. <br/>Vælg op til 2.
        </h3>

        {/* valgmuligheder */}
        <div className="mt-12 flex flex-col gap-16 w-full">

           {situations.map((situation, index) => {
            const isSelected = selected.includes(situation.id);
            const alignRight = index % 2 === 0;

            return (
              <div
                key={situation.id}
                className={`
                  w-full flex 
                  ${alignRight ? "justify-end" : "justify-start"}
                `}
              >
                <button
                  onClick={() => toggle(situation.id)}
                  className={`
                    w-[70%] p-8 border transition-all text-left cursor-pointer
                    ${
                      isSelected
                        ? "bg-[#39516A] text-white border-[#39516A]"
                        : "bg-[#E8E8E8] border-[#D4D4D4] hover:border-[#999]"
                    }
                  `}
                >
                  <div className="flex flex-row gap-20 justify-between">

                    {/* Left content */}
                    <div className="w-2/3">
                      <h3 className="font-medium text-lg mb-2">
                        {situation.title}
                      </h3>
                      <p className={`text-sm ${isSelected ? "text-stone-100" : "text-stone-700"}`}>
                        {situation.text}
                      </p>
                    </div>

                    {/* Notes */}
                    <div className="w-1/3 ">
                      <h4 className={`font-medium mb-2 ${isSelected ? "text-white" : "text-stone-700"}`}>
                        Noter
                      </h4>

                      <ul className="text-sm font-normal space-y-1">
                        {situation.notes.map(note => (
                          <li 
                            key={note} 
                            className={isSelected ? "text-stone-100" : "text-stone-700"}
                          >
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </button>
              </div>
            );
          })}

        </div>
      </div>

      {/* --- NAVIGATION BUTTONS --- */}
      <div className="flex justify-between mt-16 px-6 mb-10 w-[90%] self-center">
        <button
          onClick={onBack}
          className="cursor-pointer text-sm text-stone-500 hover:text-stone-800"
        >
          Tilbage
        </button>

        <button
          onClick={() => onNext(selected)}
          disabled={selected.length === 0}
          className={`
            px-6 py-2 transition-all cursor-pointer
            ${
              selected.length > 0
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
