import { useState } from "react";
import moods from "../data/moods.json"

export default function MoodStep({ onNext, onBack } ) {
   const [selectedMood, setSelectedMood] = useState(null); 
  
  
  

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
            const selected = selectedMood === mood.id;

            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`
                  h-32 flex items-center justify-center border 
                  transition-all text-sm font-medium
                  ${
                    selected
                      ? "bg-[#39516A] text-white border-[#39516A]"
                      : "bg-[#E6E6E6] border-[#D4D4D4] hover:border-[#999]"
                  }
                `}
              >
                <h3 className="font-medium mb-1">{mood.label}</h3>
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
          disabled={!selectedMood}
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
