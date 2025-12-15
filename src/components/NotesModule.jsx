import { useState, useEffect } from "react";
import notesData from "../data/notes.json";

export default function NotesModule({ notesSelected = [] }) {
  const [activeNote, setActiveNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Typing animation
  const [typedText, setTypedText] = useState("");
  const [typing, setTyping] = useState(false);

  const notes = notesData.filter((n) => notesSelected.includes(n.id));

  // CACHING FUNKTION
  function getCachedNote(id) {
    const cached = localStorage.getItem(`note-cache-${id}`);
    return cached ? JSON.parse(cached) : null;
  }

  function saveCachedNote(id, data) {
    localStorage.setItem(`note-cache-${id}`, JSON.stringify(data));
  }

  async function fetchNoteDetails(id) {
    setErrorMsg("");
    setLoading(true);
    setTypedText("");
    setTyping(false);

    // Check cache før API-kald
    const cached = getCachedNote(id);
    if (cached) {
      setLoading(false);
      return cached; // returner straks
    }

    // Ellers hent fra API
    try {
      const res = await fetch(`/api/note-info?note=${id}`);
      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.message || "Fejl ved hentning af note-info");
      }

      // Gem i cache til fremtiden
      saveCachedNote(id, data);

      return data;
    } catch (err) {
      console.error(err);
      setErrorMsg("Vi kunne ikke hente ekstra info om noten lige nu.");
      return null;
    } finally {
      setLoading(false);
    }
  }

  // Typing animation når AI-tekst er klar
  useEffect(() => {
    if (!activeNote?.extra?.description) return;

    const text = activeNote.extra.description;
    let index = 0;

    setTyping(true);
    setTypedText("");

    const interval = setInterval(() => {
      setTypedText((prev) => prev + text[index]);
      index++;

      if (index >= text.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [activeNote]);



  return (
    <div className="p-4 rounded-xl w-[380px] ui-element">
      <h2 className="mb-4">De noter, du naturligt læner dig mod.</h2>
      <p>Klik på en note for at få en mere detaljeret forklaring på, hvad den betyder i en parfume.</p>

      <div className="flex flex-wrap pt-4 gap-4">
        {notes.map((note) => (
          <button
            key={note.id}
            onClick={async () => {
              const extra = await fetchNoteDetails(note.id);
              if (!extra) return;
              setActiveNote({ ...note, extra });
            }}
            className="px-4 py-2 rounded-full bg-[#F3F3F3] border border-[#D4D4D4] hover:bg-[#39516A] hover:text-white transition cursor-pointer"
          >
            {note.label}
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeNote && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setActiveNote(null)}
        >
          <div
            className="bg-white rounded-xl p-6 w-[400px] shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 hover:text-stone-700 cursor-pointer"
              onClick={() => setActiveNote(null)}
            >
              ✕
            </button>

            {/* Note Image */}
            <div
              className="h-32 rounded-lg mb-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeNote.image})` }}
            />

            <h3 className="text-xl font-semibold mb-2">{activeNote.label}</h3>

            {/* Lokal beskrivelse */}
            <p className="text-sm mb-4">{activeNote.description}</p>

            {/* API LOADING / TYPING */}
            {loading && (
              <div className="animate-pulse space-y-3 my-4">
                <div className="h-3 w-3/4 bg-stone-200 rounded"></div>
                <div className="h-3 w-2/3 bg-stone-200 rounded"></div>
                <div className="h-3 w-1/2 bg-stone-200 rounded"></div>
                <p className="text-xs text-stone-500 italic">AI skriver...</p>
              </div>
            )}

            {errorMsg && <p className="text-xs text-red-500 mb-2">{errorMsg}</p>}

            {!loading && activeNote.extra && (
              <div className="mb-4 text-sm space-y-2">
                <p className="font-medium">Ekstra info fra parfumøren:</p>

                {/* Typing Effect */}
                <p className="whitespace-pre-line">
                  {typedText}
                  {typing && <span className="animate-pulse">|</span>}
                </p>

                <p className="text-xs text-stone-500">
                  Oprindelse: {activeNote.extra.origin}
                </p>

                {activeNote.extra.families?.length > 0 && (
                  <p className="text-xs text-stone-500">
                    Duftfamilier: {activeNote.extra.families.join(", ")}
                  </p>
                )}

                {activeNote.extra.mood && (
                  <p className="text-xs text-stone-500">
                    Stemning: {activeNote.extra.mood}
                  </p>
                )}
              </div>
            )}

            {/* Found in */}
            <h4 className="font-medium text-sm mb-1">Findes i:</h4>
            <ul className="list-disc list-inside text-sm">
              {activeNote.foundIn.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
