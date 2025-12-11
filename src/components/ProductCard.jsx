import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductCard({ product, index }) {
    const navigate = useNavigate();
    const imageRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const img = imageRef.current;

        // starter blurred
        gsap.set(img, {filter: "blur(20px)", scale: 1.1})

        // Unik condition for første billede
        if (index === 0){
            gsap.to(img, {
                filter: "blur(0px)",
                scale: 1,
                duration:1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "300px top",
                    toggleActions: "play none none none",
                }
            });
            return;
        }

        // animation når billede er in view
        gsap.to(img, {
            filter: "blur(0px)",
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top, 30%",
                end: "top center",
                toggleActions: "play none none none"
            }
        })
    }, [index]);

    return (
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 h-[80vh]">
            
            <div className="product-image border-b min-h-full relative overflow-hidden">
                <img ref={imageRef} className="w-full h-full object-cover z-1" src={product.coverImage} alt={product.name} />
                <p className="z-10 absolute top-1/2 left-1/2 text-white mix-blend-difference text-3xl -translate-x-1/2 -translate-y-1/2">{product.name}</p>
            </div>

            <Link className="p-4 border-r border-b border-[#39516A] " to={`/produkter/${product.slug}`}>
                <div className="product-card cursor-pointer">
                    <p className="font-normal uppercase text-s">{product.mood}</p>
                    <div className="flex items-center pt-10 flex-col h-full justify-center">
                        <img className="w-[60%] pb-4" src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <span className="font-normal pb-4">{`${product.price} kr`}</span>
                        <button className="cart-btn bg-[#39516A] p-2 w-[60%] text-white font-normal cursor-pointer">Tilføj til kurv</button>
                    </div>
                </div>
            </Link>

            <div className="duft-info p-4 grid grid-cols-1 grid-rows-2 border-b border-[#39516A]">
                <div className="flex text-xs gap-10">
                    <div className="flex flex-col uppercase">
                        <p className="relative pl-5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:border before:border-black before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">Top</p>
                        <p className="relative pl-5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:border before:border-black before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">Heart</p>
                        <p className="relative pl-5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:border before:border-black before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">Base</p>
                    </div>

                    <div className="flex flex-col">
                        <p>{product.notes.top}</p>
                        <p>{product.notes.heart}</p>
                        <p>{product.notes.base}</p>    
                    </div>
                </div>

                <div className="grid grid-cols-[min-content_1fr] gap-10 ">
                    <div className="inline-block">
                        <p className="inline-block">MOOD</p>
                    </div>

                    <div>
                        <p className="pb-4">
                            {product.moodDescription}
                        </p>
                        <button onClick={() => navigate(`/produkter/${product.slug}`)} className="underline-btn cursor-pointer">Mere information</button>
                    </div>
                </div>
            </div>
        </div>
    );
}