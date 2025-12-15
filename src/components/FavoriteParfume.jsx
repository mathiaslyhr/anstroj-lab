import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoriteItem({ product, onRemove }) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleToggle = () => {
    toggleFavorite(product.id);  
    if (onRemove) onRemove(product.id); // ← fjerner produktet fra UI’et med det samme
  };

  return (
    <div className="p-4 border w-[80%] border-[#39516A]">
      <Link
        to={`/produkter/${product.slug}`}
        className="block product-card cursor-pointer"
      >
        <p className="font-normal uppercase text-s">{product.mood}</p>

        <div className="flex items-center pt-10 flex-col justify-center">
          <img className="w-[60%] pb-4" src={product.image} alt={product.name} />

          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span className="font-normal pb-4">{`${product.price} kr`}</span>
        </div>
      </Link>

      <div className="w-full flex items-center justify-center gap-2 mt-4">
        <button className="cart-btn bg-[#39516A] p-2 w-[50%] text-white font-normal cursor-pointer">
          Se duft
        </button>

        <button
          onClick={handleToggle}
          className="favorite border p-2 cursor-pointer"
        >
          <Heart
            strokeWidth={1}
            fill={isFavorite(product.id) ? "black" : "none"}
          />
        </button>
      </div>
    </div>
  );
}
