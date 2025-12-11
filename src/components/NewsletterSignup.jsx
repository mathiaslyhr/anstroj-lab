export default function NewsletterSignup() {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Her kan I koble rigtigt signup på (Klaviyo, Mailchimp, Shopify, osv.)
      console.log("Newsletter submit");
    };
  
    return (
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="rounded-3xl border border-neutral-200 px-8 py-10 md:px-14 md:py-14 bg-white">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Nyheder fra Anstrøj
              </h2>
              <p className="text-sm md:text-base text-neutral-700 mb-6">
                Få besked om nye dufte, limited drops og historier fra værkstedet.
                Ingen spam – kun dufte, der giver mening.
              </p>
            </div>
  
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 md:flex-row md:items-center"
            >
              <input
                type="email"
                required
                placeholder="Din e-mailadresse"
                className="w-full md:flex-1 rounded-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
              <button
                type="submit"
                className="rounded-full border border-black px-6 py-3 text-[12px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
              >
                Tilmeld
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  