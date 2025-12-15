import { useState } from "react";
import notesData from "../data/notes.json";

export default function NotesModule({ notesSelected = [] }) {
  const [activeNote, setActiveNote] = useState(null);
  const [loading, setLoading] = useState(false);

  const notes = notesData.filter(n => notesSelected.includes(n.id));

  async function fetchNoteDetails(id) {
    try {
      setLoading(true);
      const res = await fetch(`/api/note-info?note=${id}`);
      const data = await res.json();
      return data;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 rounded-xl w-[380px] ui-element">
      <h2 className="mb-4">De noter, du naturligt læner dig mod.</h2>
      <p>Du kan lære mere om noterne og deres betydning for din duft. Klik på noterne for at blive klogere.</p>

      <div className="flex flex-wrap pt-4 gap-4">
        {notes.map(note => (
          <button
            key={note.id}
            onClick={async () => {
              const extra = await fetchNoteDetails(note.id);
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

            <p className="text-sm mb-4">{activeNote.description}</p>

            {/* ----- API EXTRA INFO ----- */}
            {loading && <p className="text-sm text-stone-500">Henter detaljer…</p>}

            {!loading && activeNote.extra && (
              <div className="mb-4 text-sm">
                <p className="font-medium">Ekstra info:</p>
                <p className="mt-1">{activeNote.extra.description}</p>

                <p className="mt-2 text-xs text-stone-500">
                  Oprindelse: {activeNote.extra.origin}
                </p>

                {activeNote.extra.families?.length > 0 && (
                  <p className="text-xs mt-1">
                    Duftfamilier: {activeNote.extra.families.join(", ")}
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
