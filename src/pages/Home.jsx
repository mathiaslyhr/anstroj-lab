import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
