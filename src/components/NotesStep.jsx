import { useState } from "react";
import notes from "../data/notes.json";  

export default function NotesStep({ onNext, onBack }) {
  const [selectedNotes, setSelectedNotes] = useState([]);

  // Find data om valgte note
  const activeNote =
  selectedNotes.length > 0
    ? notes.find(n => n.id === selectedNotes[selectedNotes.length - 1]) || null
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
    <div className="px-6 pt-10 h-[90vh] flex flex-col justify-between">

      {/* TOP SECTION */}
      <div className="flex gap-12 w-full">

        {/* INFO BOX */}
        <div
          className="w-[50%] h-full rounded-xl flex items-center justify-center px-10 text-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${activeNote ? activeNote.image : "/img/lab/bg-notes.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Blur overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xs"></div>

          {/* Text */}
          <p className="relative text-white z-10 leading-relaxed text-lg">
            {activeNote
              ? activeNote.description
              : "Klik på en note for at se mere om den."}
          </p>
        </div>

        {/* RIGHT: TITLE + NOTE GRID */}
        <div className="w-[55%]">

          <h1 className="mb-4">Vælg de noter, du foretrækker.</h1>

          <h3 className="font-normal mb-10 leading-relaxed">
            Den 2 noter du vælger guider os tættere på den rigtige duftprofil til dig.
          </h3>

          <div className="grid grid-cols-3 gap-6">

            {notes.map(note => {
              const isSelected = selectedNotes.includes(note.id);

              return (
                <button
                  key={note.id}
                  onClick={() => toggleNote(note.id)}
                  className={`
                    h-35 cursor-pointer rounded-xl p-4 flex items-center justify-center
                    text-sm font-medium transition-all relative overflow-hidden
                    border
                    ${
                      isSelected
                        ? "border-[#39516A] ring-2 ring-[#39516A] text-white"
                        : "border-[#D4D4D4] hover:border-[#999] text-white"
                    }
                  `}
                  style={{
                    backgroundImage: `url(${note.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  {/* mørk overlay */}
                  <div
                    className={`
                      absolute inset-0 transition-all
                      ${isSelected ? "bg-black/40" : "bg-black/25 hover:bg-black/35"}
                    `}
                  />

                  {/* note titel */}
                  <span className="relative z-10 drop-shadow-md">
                    {note.label}
                  </span>
                </button>
              );
            })}

          </div>

        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-8 mb-10 w-full">
        <button
          onClick={onBack}
          className="text-sm text-stone-500 hover:text-stone-800"
        >
          Tilbage
        </button>

        <button
          onClick={() => onNext(selectedNotes)}
          disabled={selectedNotes.length === 0}
          className={`
            px-6 py-2 transition-all cursor-pointer
            ${
              selectedNotes.length > 0
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
