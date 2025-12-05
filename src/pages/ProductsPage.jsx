import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { useState,useEffect } from "react";
import { db } from "../firebase";
import { collection,getDocs } from "firebase/firestore";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadProducts() {
            const snapshot = await getDocs(collection(db, "products"));
            const list = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(list);
            setLoading(false);
        }
        loadProducts();
    }, []);

     if (loading) return <div>Loading...</div>;

    return (
        <div>
            <Navbar/>

            <div className="pt-24 px-4 pb-8 grid grid-cols-2">
                <div>
                    <h1>Vores duftkollektion</h1>
                </div>

                <div className="font-medium">
                    <h3>Tre stemninger. Tre fortællinger. Tre måder at sætte et anstrøg på øjeblikket.</h3>
                </div>
            </div>

            <div className="filterbar border-t p-4 flex items-center space-x-8 font-normal border-b border-[#39516A]">
                <button>Amber</button>
                
                <button>Woody</button>
                
                <button>Fresh</button>
                
                <button>Spicy</button>
                
                <button>Floral</button>
            </div>

            <div>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    );
}