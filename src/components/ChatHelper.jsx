import { useState } from "react";
import { Bot, ArrowRight } from "lucide-react";

export default function ChatHelper({ iconColor = "#000" }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

 
  async function sendMessage() {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply || "Fejl — prøv igen." },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Der opstod en fejl. Prøv igen." },
      ]);
    }

    setLoading(false);
  }

  
  return (
    <>
      {/* NAVBAR ICON — 3 små prikker */}
      <div
        className="cursor-pointer flex items-center justify-center"
        onClick={() => setOpen(true)}
      >
        <div className="flex">
          <Bot size={18} strokeWidth={2} stroke={iconColor}/>
        </div>
      </div>

      {/* CHAT PANEL */}
      {open && (
        <div
          className="fixed top-0 right-0 h-full w-[320px] bg-white shadow-xl border-l flex flex-col z-50 animate-slide-in"
          style={{ animation: "slideIn 0.2s ease-out" }}
        >
          {/* Header */}
          <div className="px-4 py-3 border-b flex justify-between items-center">
            <h3 className="font-semibold">Parfumeassistent</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-stone-500 cursor-pointer hover:text-black text-lg"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 font-normal overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 text-sm rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-[#39516A] text-white ml-auto"
                    : "bg-stone-200 text-stone-800"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <p className="text-xs text-stone-500 italic">Skriver…</p>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 font-normal border px-3 py-2 rounded-lg text-sm"
              placeholder="Spørg fx: Hvad er amber?"
            />

            {/* Send button: rund cirkel med pil */}
            <button
              onClick={sendMessage}
              className="w-8 h-8 cursor-pointer rounded-full bg-[#39516A] flex items-center justify-center hover:bg-[#2f4355] transition"
            >
              <ArrowRight stroke="white"/>
            </button>
          </div>
        </div>
      )}

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </>
  );
}
