import { useState } from "react";
import notes from "../data/notes.json";  

export default function NotesStep({ onNext, onBack }) {
  const [selectedNotes, setSelectedNotes] = useState([]);

  // Find data om valgte note
const activeNote = selectedNotes.length > 0 
  ? notes.find(n => n.id === selectedNotes[selectedNotes.length - 1])
  : null;
  
  
  function toggleNote(id) {
  if (selectedNotes.includes(id)) {
    setSelectedNotes(selectedNotes.filter(n => n !== id));
  } else {
    if (selectedNotes.length >= 2) return;
    setSelectedNotes([...selectedNotes, id]);
  }
}

  return (
    <div className="px-6 h-[90vh] flex flex-col justify-between">

      {/* TOP SECTION */}
      <div className="flex gap-12 w-full">

        {/* LEFT: BIG INFO BOX */}
        <div className="w-[50%] h-(80%) bg-[#DCDCDC] rounded-xl flex items-center justify-center px-6 text-center">
          {activeNote ? (
            <p className="text-stone-800 leading-relaxed text-lg">{activeNote.description}</p>
          ) : (
            <p className="text-stone-700">Klik på en note for at se mere om den.</p>
          )}
        </div>

        {/* RIGHT: TITLE + NOTE GRID */}
        <div className="w-[55%]">

          <h1 className="text-3xl font-medium mb-4">Vælg de noter, du foretrækker.</h1>

          <h3 className="font-normal mb-10 leading-relaxed">
            De 2 noter du vælger guider os tættere på den rigtige duftprofil.
          </h3>

          <div className="grid grid-cols-3 gap-6">

            {notes.map(note => {
              const isSelected = selectedNotes.includes(note.id);

              return (
                <button
                  key={note.id}
                  onClick={() => toggleNote(note.id)}
                  className={`
                    h-50 cursor-pointer border p-4 flex items-center justify-center
                    text-sm font-medium transition-all
                    ${
                      isSelected
                        ? "bg-[#39516A] text-white border-[#39516A]"
                        : "bg-[#E8E8E8] border-[#D4D4D4] hover:border-[#999]"
                    }
                  `}
                >
                  {note.label}
                </button>
              );
            })}

          </div>

        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-16 mb-10 w-full">
        <button
          onClick={onBack}
          className="text-sm text-stone-500 hover:text-stone-800"
        >
          Tilbage
        </button>

        <button
          onClick={() => onNext(selectedNotes)}
          disabled={!selectedNotes}
          className={`
            px-6 py-2 rounded-full transition-all
            ${
              selectedNotes
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
