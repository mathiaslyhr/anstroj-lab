import { RotateCcw } from "lucide-react";

export default function SummaryNav({ onReset, answers }) {
    return(
        <nav className="fixed z-100 bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 ui-element">
            <div className="relative group">               
                <span className="absolute right-12 top-1/2 -translate-y-1/2 
          bg-[#39516A] text-white text-sm px-3 py-1 rounded-md 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-200 whitespace-nowrap
          pointer-events-none">Lav ændringer i din duftprofil</span>
                <button onClick={onReset} className="bg-white border border-stone-300 
            w-10 h-10 rounded-full flex items-center justify-center
            hover:bg-stone-100 transition cursor-pointer
            shadow-sm"><RotateCcw strokeWidth={1.5} className="text-stone-800"/></button>
            </div>

            <div>
                <button onMouseDown={(e) => e.stopPropagation()} onClick={async () => {
                const res = await fetch("/api/save-profile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ profile: answers })
                });

                const data = await res.json();
                const shareLink = `${window.location.origin}/profil/${data.id}`;
                console.log("Saved with ID:", data.id);
                 alert(`Din duftprofil er gemt! Link:\n${shareLink}`);
                }} 
                className=" bg-[#39516A] text-white px-5 py-2 rounded-full text-sm
                hover:bg-[#2f4355] transition shadow-sm">
                Gem din duftprofil
            </button>
            </div>
        </nav>    
    );
}