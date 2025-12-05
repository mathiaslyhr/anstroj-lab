import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 h-[80vh]">
            
            <div className="product-image border-b min-h-full">
                <img className="w-full h-full object-cover" src={product.coverImage} alt={product.name} />
            </div>

            <div className="product-card p-4 border-r border-b border-[#39516A]">
                <p className="font-normal uppercase pt-4 text-s">{product.mood}</p>
                <div className="flex items-center flex-col h-full justify-center">
                    <img className="w-[60%] pb-4" src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <span className="font-normal">{product.price}</span>
                    <AddToCartButton />
                </div>
            </div>

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
                        <button>Mere information</button>
                    </div>
                </div>
            </div>
        </div>
    );
}