import { useState } from "react";
import moods from "../data/moods.json"

export default function MoodStep({ onNext, onBack } ) {
   const [selectedMood, setSelectedMood] = useState([]); 
  
   function toggleMood(id) {
    // Hvis mood allerede er valgt → fjern det
    if (selectedMood.includes(id)) {
      setSelectedMood(selectedMood.filter(m => m !== id));
      return;
    }
    // Ellers, kun tilføj hvis der er under 2 udvalgte
    if (selectedMood.length < 2) {
      setSelectedMood([...selectedMood, id]);
    }
  }
  
  

  return (
     <div className="h-full px-6 flex flex-col justify-between">
      
      {/* Text section */}
      <div className="w-full">
        <h1 className="text-3xl mb-4">Dufte forbindes altid med stemninger</h1>
        <h3 className="mb-4 font-normal w-[70%] leading-relaxed">
          Forestil dig, at parfumen bliver en forlængelse af din energi. 
          Hvilken vibe vil du gerne tage med dig ind i din hverdag?
        </h3>
        <h3 className="mb-8 w-[70%] font-normal">Vælg den vibe, du føler dig mest draget af – den hjælper os med at forstå, hvilken retning din duftprofil skal bevæge sig i.</h3>

        {/* Options */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-[80%] justify-self-center">
          {moods.map((mood) => {
            const isActive = selectedMood.includes(mood.id);
            const isBlocked = !isActive && selectedMood.length === 2;

            return (
              <button
                key={mood.id}
                onClick={() => toggleMood(mood.id)}
                disabled={isBlocked}
                className={`
                  relative h-40 rounded-xl overflow-hidden transition-all text-left
                  border
                  ${isActive
                    ? "bg-[#39516A] text-white border-[#39516A]"
                    : "bg-[#E8E8E8] text-stone-800 border-[#D4D4D4] hover:border-[#999]"
                  }
                  ${isBlocked ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                `}
              >
                {/* Mood image */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform group
                    ${isActive ? "opacity-40" : "group-hover:scale-105"}
                  `}
                  style={{ backgroundImage: `url(${mood.image})` }}
                />

                {/* Text overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className={`font-medium text-lg ${isActive ? "text-white" : "text-black"}`}>
                    {mood.label}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

   {/* navigation */}
      <div className="flex px-6 justify-between mt-10 mb-6 items-center">
        <button onClick={onBack} className="text-sm text-stone-500 hover:text-stone-800">
          Tilbage
        </button>

        <button
          onClick={() => onNext(selectedMood)}
          disabled={selectedMood.length === 0}
          className={`
            px-6 py-2 transition-all
            ${
              selectedMood
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
