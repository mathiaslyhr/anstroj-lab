import { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import SummaryNav from "./SummaryNav";
import ProfileCard from "./ProfileCard";
import { useEffect } from "react";
import { calculateBestProfile } from "../utils/calcProfileScore";
import { scentProfiles } from "../data/profiles";
import "../summary.css";
import MoodModule from "./MoodModule";
import NotesModule from "./NotesModule";
import SituationModule from "./SituationsModule";
import IntensitySensitivityModule from "./IntensitySensitivityModule";
import ExpressionModule from "./ExpressionsModule";
import RecommendationModule from "./RecommendationModule";

export default function ScentLabSummary({ answers, onReset, }) {

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPanning, setIsPanning] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  // Start pan
  const handleMouseDown = (e) => {
  if (e.target.closest(".ui-element")) return;

  setIsPanning(true);
  setLastPos({ x: e.clientX, y: e.clientY });

  canvasRef.current.style.transform = "scale(0.97)";
};

  // End pan
   const handleMouseUp = () => {
    setIsPanning(false);

    // ZOOM BACK IN
    canvasRef.current.style.transform = "scale(1)";
  };

  // Move pan
  const handleMouseMove = (e) => {
    if (!isPanning) return;

    const dx = e.clientX - lastPos.x;
    const dy = e.clientY - lastPos.y;

    containerRef.current.scrollLeft -= dx;
    containerRef.current.scrollTop -= dy;

    setLastPos({ x: e.clientX, y: e.clientY });
  };

   

    // Useeffect der sikrer man starter med viewport i midten af canvasset
    useEffect(() => {
  const container = containerRef.current;
  const canvas = canvasRef.current;

  if (!container || !canvas) return;

  // Scroll til center
  container.scrollLeft = (canvas.scrollWidth - container.clientWidth) / 2;
  container.scrollTop = (canvas.scrollHeight - container.clientHeight) / 2;

    }, []);

//       function handleShareProfile() {
//     // placeholder – senere: brug det genererede profil-link
//     console.log("Del profil", profile.id);
//   }

    const bestId = calculateBestProfile(answers);
    const profile = scentProfiles[bestId];

  return (
    <div
      ref={containerRef}
      className="summary-scroll-container overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
        <SummaryNav onReset={onReset} answers={answers}/>
        <div className="fixed z-100 bottom-10 left-35 -translate-x-1/2 w-[15%] text-xs">
            <p>Her kan du trække rundt på skærmen og udforske din personlige duftprofil.</p>
        </div>
      {/* BIG CANVAS */}
      <div ref={canvasRef} className="summary-canvas relative">
        <div className="fixed flex items-center ui-element"><ArrowLeft size={15}/> Tilbage</div>

       {/* modules */}
        
        {/* Selve duftprofil kortet */}
        <div className="profile-name absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="pb-6">Din Duftprofil</h1>
             <div className="module">
            <ProfileCard profile={profile} onSave={() => console.log("Gem profil")}/>
        </div>
        </div>

        {/* steminger modul */}
        <div className=" absolute top-[calc(50%+100px)]  left-[calc(50%+600px)] -translate-y-1/2 ">
          <h2 className="pb-6">Stemninger du matcher</h2>
            <div className="module">
            <MoodModule moodsSelected={[answers.moods]}/>
            </div>
        </div>

        {/* foretrukne noter modul */}
        <div className="note-block absolute top-[calc(50%+180px)]  right-[calc(50%+500px)] -translate-y-1/2">
            <h2 className="pb-6">Dine foretrukne duftnoter</h2>
            <div className="module">
           <NotesModule notesSelected={answers.notes}/>
        </div>
        </div>

        {/* situationer modul */}
        <div className="absolute top-[calc(20%)]  right-[calc(50%+400px)] -translate-y-1/2">
            <h2 className="pb-6">Du nyder at  </h2>
            <div className="">
           <SituationModule situationsSelected={answers.situations}/>
        </div>
        </div>

        {/* intensitet og sensitivitet modul */}
        <div className="absolute top-[calc(20%)]  left-[calc(50%+650px)] -translate-y-1/2">
            <h2 className="pb-6">Finjusteret til din komfort</h2>
            <div className="module">
           <IntensitySensitivityModule intensity={answers.intensity} sensitivity={answers.sensitivity}/>
        </div>
        </div>

        {/* udtryk modul */}
        <div className="absolute top-[calc(5%)]  left-[calc(50%)]">
            <h2 className="pb-6 w-[60%]">Her er den energi du udstråler, omsat til din duftstil.</h2>
            <div className="module">
           <ExpressionModule expression={answers.expression}/>
        </div>
        </div>

        {/* anbefalinger modul */}
        <div className="absolute top-[calc(5%)]  left-[calc(50%)]">
            <h2 className="pb-6 w-[60%]">Her er de bedste parfume macthes til dig</h2>
            <div className="module">
           <RecommendationModule answers={answers}/>
        </div>
        </div>



      </div>
    </div>
  );
}

