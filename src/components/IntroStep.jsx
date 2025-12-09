import { ArrowRight } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

export default function IntroStep({ onNext }) {
    const navigate = useNavigate();
  return (
    <div className="h-full">
      <div className="flex flex-col">
            <div className="w-[60%]">
                <h1 className="mb-4">Velkommen til Scent Lab</h1>
                <h3 className="mb-6">
                Træd ind i Scent Lab. Et lille interaktivt rum, hvor vi lærer dine præferencer at kende og skaber en duftprofil kun til dig. 7 trin, én anbefaling, der rammer din stemning.
                </h3>
            </div>
      </div>
     
        <div className="flex justify-end pt-50 pb-16">
            <div className="flex flex-col items-center">
                <h3 className="font-normal pb-4 w-[60%]">Din duft fortæller en historie. Lad os finde frem til din.</h3>
                <button
                onClick={onNext}
                className="px-4 py-2 cart-btn bg-[#39516A] p-2 w-[60%] text-white font-normal cursor-pointer"
                >
                Start din duftprofil
                </button>
            </div>
        </div>

        <div className="flex justify-center">
            <button onClick={navigate("/produkter")} className="flex">Spring over og gå til dufte <ArrowRight/></button>
        </div>


    </div>
  );
}