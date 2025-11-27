export default function About() {
    return (
      <section className="bg-neutral-50 py-20" id="about">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start">
          <div className="md:w-1/2">
            <h2 className="mb-3 text-sm uppercase tracking-[0.3em]">
              Om Anstrøj Lab
            </h2>
            <h3 className="mb-6 text-2xl md:text-3xl">
              Duft som et statement – ikke som støj.
            </h3>
          </div>
  
          <div className="space-y-4 md:w-1/2">
            <p>
              Anstrøj Lab er et uafhængigt parfumeværksted, der arbejder i små
              batches med høj parfumeolie-koncentration og fokus på
              langtidsholdbarhed.
            </p>
            <p>
              Alle dufte er udviklet til at være minimalistiske i udtryk, men rige
              i karakter – til dig, der går mere op i stemningen du efterlader end
              logoet på flasken.
            </p>
          </div>
        </div>
      </section>
    );
  }
  