// src/pages/ContactPage.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fafafa] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 md:px-10 pt-36 pb-20">
        {!submitted ? (
          <div className="max-w-3xl mx-auto">

            {/* Overskrift */}
            <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
              Kontakt os
            </h1>

            {/* Undertekst */}
            <p className="text-center text-neutral-600 text-sm md:text-base mb-10 leading-relaxed">
              Har du et spørgsmål eller vil du samarbejde med os?
              Send os en besked herunder.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4 font-normal w-full">

              {/* Navn + Telefon */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Navn"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none
                             focus:border-black placeholder:font-normal font-normal rounded-none"
                />

                <input
                  type="tel"
                  placeholder="Telefonnummer"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none
                             focus:border-black placeholder:font-normal font-normal rounded-none"
                />
              </div>

              {/* Mail */}
              <input
                type="email"
                required
                placeholder="Mailadresse"
                className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none
                           focus:border-black placeholder:font-normal font-normal rounded-none"
              />

              {/* Besked */}
              <textarea
                placeholder="Besked"
                rows={5}
                className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none
                           focus:border-black placeholder:font-normal font-normal resize-none rounded-none"
              />

              {/* KNAP */}
              <button
                type="submit"
                className="cursor-pointer border px-10 py-3 text-[12px] uppercase tracking-[0.2em]
                           bg-[#39516A] text-white border-[#39516A] font-semibold
                           hover:bg-white hover:text-black hover:border-black
                           transition-colors duration-200 mx-auto block rounded-none"
              >
                Send besked
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center pt-32 pb-32">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Tak for din besked!
            </h2>
            <p className="text-neutral-700 max-w-md mx-auto">
              Vi vender tilbage inden for 1–2 hverdage.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
