import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-3xl px-6 text-center">
        {!submitted ? (

          <div className="px-4 py-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Få 10% rabat på din første ordre
            </h2>

            <p className="text-sm md:text-base text-neutral-700 mb-8">
              Tilmeld dig vores nyhedsbrev og få tidlig adgang til nye dufte,
              limited releases og historier fra værkstedet.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 md:flex-row md:items-center justify-center"
            >
              <input
                type="email"
                required
                placeholder="Din e-mailadresse"
                className="w-full md:flex-1 rounded-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black placeholder:font-normal"
              />


              <button
                type="submit"
                className="cursor-pointer rounded-full border px-6 py-3 text-[12px] uppercase tracking-[0.2em]
                           bg-[#39516A] text-white border-[#39516A]
                           hover:bg-white hover:text-black hover:border-black
                           transition-colors duration-200"
              >
                Tilmeld
              </button>
            </form>
          </div>
        ) : (

          <div className="flex flex-col items-center text-center py-10">
            <CheckCircle className="text-green-600 w-14 h-14 mb-6" />

            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Tak for din tilmelding!
            </h2>

            <p className="text-neutral-700 max-w-md text-sm md:text-base">
              Din rabatkode på 10% er sendt til din indbakke.  
              Vi glæder os til at dele nye dufte og historier med dig.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
