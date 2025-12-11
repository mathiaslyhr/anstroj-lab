import { useState } from "react";
import notesData from "../data/notes.json";

export default function NotesModule({ notesSelected = [] }) {
  const [activeNote, setActiveNote] = useState(null);

  const notes = notesData.filter(n => notesSelected.includes(n.id));

  return (
    <div className="p-4 rounded-xl w-[380px] ui-element">
      <h2 className="mb-4">
        De noter, du naturligt læner dig mod.
      </h2>
        <p>Du kan lære mere om noterne og deres betydning for din duft. Klik på noterne for at blive klogere.</p>
      <div className="flex flex-wrap pt-4 gap-4">
        {notes.map(note => (
          <button
            key={note.id}
            onClick={() => setActiveNote(note)}
            className="px-4 py-2 rounded-full bg-[#F3F3F3] border border-[#D4D4D4]
                       hover:bg-[#39516A] hover:text-white transition cursor-pointer"
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
              className="absolute top-3 right-3 hover:text-stone-700"
              onClick={() => setActiveNote(null)}
            >
              ✕
            </button>

            {/* Note Image */}
            <div
              className="h-32 rounded-lg mb-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeNote.image})` }}
            />

            <h3 className="text-xl font-semibold mb-2">
              {activeNote.label}
            </h3>

            <p className="text-sm mb-4">
              {activeNote.description}
            </p>

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
