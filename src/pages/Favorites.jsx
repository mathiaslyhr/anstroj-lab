import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/Navbar";
import FavoriteItem from "../components/FavoriteParfume";
import { useFavorites } from "../context/FavoritesContext";
import Footer from "../components/Footer";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleRemove = (id) => {
  setProducts(prev => prev.filter(p => p.id !== id));
};

  useEffect(() => {
    async function loadFavorites() {
      const snapshot = await getDocs(collection(db, "products"));
      const all = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filtrer kun favoritter
      const selected = all.filter((p) => favorites.includes(p.id));
      setProducts(selected);

      setLoading(false);
    }

    loadFavorites();
  }, [favorites]);

  return (
    <div>
      <Navbar />

      <div className="pt-24 px-4 pb-8">
        <h1 className="text-3xl font-normal mb-6">Dine favoritter</h1>
      </div>

      {loading && <p className="px-6">Indlæser...</p>}

      {!loading && products.length === 0 && (
        <p className="px-6">Du har ingen favoritter endnu.</p>
      )}

      <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 h-[70vh]">
        {products.map((product) => (
          <FavoriteItem key={product.id} product={product} onRemove={handleRemove} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
