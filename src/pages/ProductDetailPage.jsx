import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Heart } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ProductDetailPage() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProduct() {
            try {
                const q = query(
                    collection(db, "products"),
                    where("slug", "==", slug)
                );

                const snapshot = await getDocs(q);

                if (!snapshot.empty) {
                    setProduct({
                        id: snapshot.docs[0].id,
                        ...snapshot.docs[0].data(),
                    });
                } else {
                    setProduct(null);
                }
            } finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [slug]);

    
    if (loading) return <div></div>;


    if (!product) return <div></div>;

   
    return (

        <div>
            <Navbar/>
            <section className="pt-20 grid grid-cols-2 h-screen">
                <div>
                    {/* {product.detailImages?.map((img, index) => (
                          <img key={index} src={img} alt={`${product.name}`} />
                    ))} */}
                </div>

                <div className="flex flex-col justify-center items-center ">
                    <div className="w-[70%]">
                        <div className="flex justify-between">
                            <h3>{product.name}</h3>
                            <button className="favorite border p-2"><Heart strokeWidth={1}/></button>
                        </div>
                        <p className="pb-4">{product.description}</p>
                        <p>{product.moodDescription}</p>
                        <div className="size pt-18 flex justify-between items-center">
                            <p>Størrelse</p>
                            <div className="gap-4 flex">
                            <button className="p-2 bg-[#39516A] border border-transparent text-white font-normal">30mL</button>
                            <button className="p-2 font-normal border">50mL</button>
                            </div>
                        </div>
                        <div className="pt-4 flex gap-4 justify-between">
                        <button className="cart-btn w-full border border-transparent bg-[#39516A] p-2 text-white font-normal cursor-pointer">{`Tilføj til kurv - ${product.price} kr.`}</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-14 grid grid-cols-[2fr_1fr] h-[90%]">
                <div className="px-6 w-[80%] flex flex-col justify-between">
                    <div>
                        <h2 className="pb-6">{product.detailTitle}</h2>
                        <p>{product.details}</p>
                    </div>
                    <div>
                    <h3><i>{product.quote}</i></h3>
                    </div>
                </div>
                
                <div>
                    <img className="" src="/img/Anstrog0670.jpg" alt="Anstrøg parfumer" />
                </div>
            </section>
            


            <section className="px-6 mt-20 h-[90vh] grid grid-cols-2 items-end pb-12 bg-cover bg-center bg-no-repeat" 
            style={{backgroundImage: `url(${product.coverImage})`,}}>

                 <div className="duft-info p-4 flex flex-col gap-14 text-white bg-[#fdfbf7]/50 backdrop-blur-lg w-[90%]">
                    <h3 className="font-normal">NOTES</h3>
                    <div className="flex gap-10">
                        <div className="flex flex-col uppercase">
                            <p className="">Top</p>
                            <p className="">Heart</p>
                            <p className="">Base</p>
                        </div>

                        <div className="flex flex-col">
                            <p>{product.notes.top}</p>
                            <p>{product.notes.heart}</p>
                            <p>{product.notes.base}</p>    
                        </div>
                    </div>

                    <div className="grid grid-cols-[min-content_1fr] gap-10 w-[80%] ">
                        <div className="inline-block">
                            <p className="inline-block">MOOD</p>
                        </div>

                        <div>
                            <p className="pb-4">
                                {product.moodDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
    );
}
