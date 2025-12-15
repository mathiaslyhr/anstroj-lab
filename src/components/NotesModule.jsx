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


  // clean ai tekst
  function cleanAIText(str) {
    if (!str) return "";

    return String(str)
      .replace(/^undefined/i, "")        // fjern undefined i starten
      .replace(/undefined$/i, "")        // fjern undefined i slutningen
      .replace(/^\s+/, "")               // leading whitespace/newlines
      .replace(/^\uFEFF/, "")            // Byte Order Mark
      .trim();
  }

  // CACHE
  function getCachedNote(id) {
    const cached = localStorage.getItem(`note-cache-v2-${id}`);
    return cached ? JSON.parse(cached) : null;
  }

  function saveCachedNote(id, data) {
    localStorage.setItem(`note-cache-v2-${id}`, JSON.stringify(data));
  }

  // fetch ai data
  async function fetchNoteDetails(id) {
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

    try {
      const res = await fetch(`/api/note-info?note=${id}`);
      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.message || "Fejl ved hentning af note-info");
      }

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

  // type animation
   useEffect(() => {
    if (!activeNote?.extra?.description) return;

    const cleaned = cleanAIText(activeNote.extra.description);
    let i = 0;

    setTypedText("");
    setTyping(true);

    const interval = setInterval(() => {
      if (i >= cleaned.length) {
        clearInterval(interval);
        setTyping(false);
        return;
      }

      setTypedText((p) => p + cleaned[i]);
      i++;
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

              setTypedText(""); // reset typing
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

            {/* Lokal beskrivelse (vises kun hvis AI ikke findes) */}
            {!activeNote.extra && (
              <p className="text-sm mb-4">{activeNote.description}</p>
            )}

            {/* AI Loading */}
            {loading && (
              <div className="animate-pulse space-y-3 my-4">
                <div className="h-3 w-3/4 bg-stone-200 rounded"></div>
                <div className="h-3 w-2/3 bg-stone-200 rounded"></div>
                <p className="text-xs text-stone-500 italic">AI skriver...</p>
              </div>
            )}

            {errorMsg && <p className="text-xs text-red-500 mb-2">{errorMsg}</p>}

            {/* AI info */}
            {!loading && activeNote.extra && (
              <div className="mb-4 text-sm space-y-2">
                <p className="font-medium">Ekstra info fra parfumøren:</p>

                {/* Typing text */}
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

            {/* Products containing note */}
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
