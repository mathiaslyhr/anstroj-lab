import { useState, useEffect } from "react";
import notes from "../data/notes.json";

export default function NotesStep({ onNext, onBack }) {
  const [selectedNotes, setSelectedNotes] = useState([]);


  const [activeNote, setActiveNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typing, setTyping] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // CACHING

  function getCachedNote(id) {
    const cached = localStorage.getItem(`note-cache-${id}`);
    return cached ? JSON.parse(cached) : null;
  }

  function saveCachedNote(id, data) {
    localStorage.setItem(`note-cache-${id}`, JSON.stringify(data));
  }

  
  // FETCH AI NOTE DETAILS
  async function fetchAIDetails(id) {
    setErrorMsg("");
    setLoading(true);
    setTypedText("");
    setTyping(false);

    // Check cache
    const cached = getCachedNote(id);
    if (cached) {
      setLoading(false);
      return cached;
    }

    // Fetch from API
    try {
      const res = await fetch(`/api/note-info?note=${id}`);
      const data = await res.json();

      if (!res.ok || data.error) throw new Error(data.message);

      saveCachedNote(id, data);
      return data;
    } catch (err) {
      console.error(err);
      setErrorMsg("Kunne ikke hente AI-beskrivelse.");
      return null;
    } finally {
      setLoading(false);
    }
  }


  // When user clicks a note tile
  
  async function toggleNote(id) {
    let newSelection = [...selectedNotes];

    if (selectedNotes.includes(id)) {
      newSelection = selectedNotes.filter(n => n !== id);
    } else {
      if (newSelection.length >= 2) return;
      newSelection.push(id);
    }

    setSelectedNotes(newSelection);

    // Update active note
    const note = notes.find(n => n.id === newSelection[newSelection.length - 1]);
    if (!note) return;

    // Fetch AI details
    const extra = await fetchAIDetails(note.id);

    setActiveNote({
      ...note,
      ai: extra
    });
  }

  
  // Typing animation
  
  useEffect(() => {
    if (!activeNote?.ai?.description) return;

    const text = activeNote.ai.description;
    let i = 0;

    setTyping(true);
    setTypedText("");

    const interval = setInterval(() => {
      setTypedText(prev => prev + text[i]);
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [activeNote]);

  
  // Render
  
  const currentNote = activeNote || null;

  return (
    <div className="px-6 pt-10 h-[90vh] flex flex-col justify-between">

      {/* TOP SECTION */}
      <div className="flex gap-12 w-full">

        {/* LEFT NOTE PREVIEW */}
        <div
          className="w-[50%] h-full rounded-xl flex items-center justify-center px-10 
                     text-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${currentNote ? currentNote.image : "/img/lab/bg-notes.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xs"></div>

          <div className="relative text-white z-10 leading-relaxed text-lg">
            
            {/* If no note selected */}
            {!currentNote && (
              <p>Klik på en note for at se mere om den.</p>
            )}

            {/* If loading */}
            {loading && (
              <div className="animate-pulse space-y-4">
                <div className="h-3 bg-white/30 rounded w-3/4"></div>
                <div className="h-3 bg-white/30 rounded w-1/2"></div>
                <p className="text-sm opacity-80 italic">AI analyserer noten...</p>
              </div>
            )}

            {/* fallback JSON */}
            {!loading && errorMsg && (
              <p className="text-sm">{currentNote.description}</p>
            )}

            {/* AI typing */}
            {!loading && currentNote?.ai && (
              <p className="whitespace-pre-line">
                {typedText}
                {typing && <span className="animate-pulse">|</span>}
              </p>
            )}

            {/* Fallback hvis ingen AI tekst */}
            {!loading && !currentNote?.ai && currentNote?.description && (
              <p>{currentNote.description}</p>
            )}

          </div>
        </div>

        {/* RIGHT NOTE GRID */}
        <div className="w-[55%]">

          <h1 className="mb-4">Vælg de noter, du foretrækker.</h1>

          <h3 className="font-normal mb-10 leading-relaxed">
            De 2 noter du vælger guider os tættere på den rigtige duftprofil til dig.
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
                  <div
                    className={`
                      absolute inset-0 transition-all
                      ${isSelected ? "bg-black/40" : "bg-black/25 hover:bg-black/35"}
                    `}
                  />

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
      <div className="fixed bottom-0 left-0 right-0 
                      flex justify-between items-center 
                      px-6 py-4 z-50">
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
