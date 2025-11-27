const products = [
    {
      id: 1,
      name: "No. 01",
      description: "Træ, musk & varme krydderier.",
      image: "/img/parfume-1.jpg",
      price: "950 kr.",
    },
    {
      id: 2,
      name: "No. 02",
      description: "Frisk citrus med dyb base.",
      image: "/img/parfume-2.jpg",
      price: "950 kr.",
    },
    {
      id: 3,
      name: "No. 03",
      description: "Røg, læder & blomster.",
      image: "/img/parfume-3.jpg",
      price: "950 kr.",
    },
  ];
  
  export default function ProductGrid() {
    return (
      <section className="bg-neutral-50 py-20" id="products">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="mb-3 text-sm uppercase tracking-[0.3em]">
                Kollektion
              </h2>
              <h3 className="text-2xl md:text-3xl">Tre dufte. Én identitet.</h3>
            </div>
          </div>
  
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.id}
                className="flex flex-col rounded-3xl border border-neutral-200 bg-white/70 p-4 backdrop-blur-sm"
              >
                <div className="mb-4 aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4">
                  <div>
                    <h4 className="mb-2 text-sm uppercase tracking-[0.25em]">
                      {p.name}
                    </h4>
                    <p className="text-sm">{p.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span>{p.price}</span>
                    <button className="rounded-full bg-black px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white">
                      Læg i kurv
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  