import { useEffect, useState, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const intensityScale = {
  subtle: 1,
  soft: 2,
  balanced: 3,
  clear: 4,
  strong: 5,
};

function scoreProduct(product, answers) {
  // 1. HARD FILTERS (udluk åbenlyst dårlige matches)
  if (answers.sensitivity === "high_sensitive") {
    // meget sensitiv → undgå stærke + tunge noter
    const heavyNotes = ["spicy", "amber"];
    if (heavyNotes.some(n => product.notesSum?.includes(n))) {
      return -Infinity; // fuldstændigt udelukket
    }
    if (product.intensity === "strong" || product.intensity === "clear") {
      return -Infinity;
    }
  }

  // bruger vil have meget mild → stærk parfume er no go
 if (answers.intensity === "strong" && product.intensity === "subtle") {
  return -Infinity;
}
if (answers.intensity === "subtle" && product.intensity === "strong") {
  return -Infinity;
}

  // 2. BLØD SCORING
  let score = 0;

  // NOTES – vigtigst
  if (answers.notes?.length && product.notesSum) {
    const overlap = answers.notes.filter(n => product.notesSum.includes(n)).length;
    score += overlap * 3; // hver matchende note giver 3 point
  }

  // MOODS – næstvigtigst
  if (answers.mood?.length && product.moods) {
    const overlap = answers.mood.filter(m => product.moods.includes(m)).length;
    score += overlap * 2;
  }

  // SITUATIONS – finjusterer
  if (answers.situations?.length && product.situations) {
    const overlap = answers.situations.filter(s => product.situations.includes(s)).length;
    score += overlap * 1;
  }

  // INTENSITY – vi kigger på afstand
  if (answers.intensity && product.intensity) {
    const userI = intensityScale[answers.intensity];
    const prodI = intensityScale[product.intensity];

    if (userI && prodI) {
      const diff = Math.abs(userI - prodI); // 0 = perfekt, 4 = meget off
      const intensityScore = Math.max(0, 3 - diff); 
      // diff 0 → +3, diff 1 → +2, diff 2 → +1, diff 3+ → 0
      score += intensityScore;
    }
  }

  // SENSITIVITY – hvis produktet er "mild_friendly" og brugeren er sensitiv
  if (answers.sensitivity && product.sensitivityFit) {
    if (product.sensitivityFit.includes("mild_preferences") && answers.sensitivity !== "not_sensitive") {
      score += 2;
    }
  }

  // EXPRESSION – lille ekstra nuance
  if (answers.expression && product.expressions) {
    if (product.expressions.includes(answers.expression)) {
      score += 1;
    }
  }

  // INTENT – lille ekstra nuance
  if (answers.intent && product.intents) {
    if (product.intents.includes(answers.intent)) {
      score += 1;
    }
  }

  return score;
}


export default function RecommendationModule({ answers }) {
  const [products, setProducts] = useState([]);

  const recommended = useMemo(() => {
  if (!products.length) return [];

  const scored = products
    .map(p => ({ product: p, score: scoreProduct(p, answers) }))
    .filter(p => p.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 2).map(s => s.product);
}, [products, answers]);
  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "products"));
      const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(list);
    }
    load();
  }, []);

 

  if (!recommended.length) {
    return (
      <div className="bg-white p-6 rounded-xl ui-element w-[520px]">
        <h2 className="text-xl font-semibold mb-2">Dine anbefalede dufte</h2>
        <p className="text-sm ">
          Vi kunne ikke finde et perfekt match – men du er altid velkommen til at udforske vores dufte manuelt.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl ui-element w-[550px]">
      <h2 className="text-xl font-semibold mb-2">Dine anbefalede dufte</h2>
      <p className="text-sm  mb-4">
        Ud fra dine fantastiske svar har vi fundet de dufte, der passer bedst til din profil.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {recommended.map(product => (
          <Link
            key={product.id}
            to={`/produkter/${product.slug}`}
            className="p-4 border border-[#39516A] rounded-xl hover:shadow-md transition"
          >
            <div className="product-card cursor-pointer flex flex-col items-center text-center">
              <p className="font-normal uppercase text-xs">{product.mood}</p>

              <img
                className="w-[60%] pb-4 pt-4"
                src={product.image}
                alt={product.name}
              />

              <h3 className="text-base font-medium mb-1">{product.name}</h3>
              <p className="text-sm  mb-2">
                {product.description}
              </p>

              <button className="cart-btn bg-[#39516A] p-2 w-[80%] text-white font-normal cursor-pointer">
                Tilføj til kurv
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
