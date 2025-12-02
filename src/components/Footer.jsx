export default function Footer() {
    return (
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Anstrøj Lab. Alle rettigheder forbeholdes.</p>
          <div className="flex gap-6">
            <button className="hover:opacity-70">Handelsbetingelser</button>
            <button className="hover:opacity-70">Privatlivspolitik</button>
          </div>
        </div>
      </footer>
    );
  }
  