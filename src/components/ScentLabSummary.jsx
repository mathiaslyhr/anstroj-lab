import { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import SummaryNav from "./SummaryNav";
import ProfileCard from "./ProfileCard";
import "../summary.css";

export default function ScentLabSummary({ answers, onReset }) {

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

  return (
    <div
      ref={containerRef}
      className="summary-scroll-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
        <SummaryNav onReset={onReset} answers={answers}/>

      {/* BIG CANVAS */}
      <div ref={canvasRef} className="summary-canvas">
        <div className="sticky"><ArrowLeft/> Tilbage</div>

       {/* modules */}
        
        {/* Selve duftprofil kortet */}
        <div className="profile-name">
            <h1>{generateProfileName(answers)}</h1>
             <div className="module">
            <ProfileCard/>
        </div>
        </div>

        {/* steminger modul */}
        <div className="module mood-block">
          <h2>Stemninger du matcher</h2>
          <p>{moodExplainer(answers.mood)}</p>
        </div>

        {/* foretrukne noter modul */}
        <div className="note-block">
            <h2>Dine foretrukne duftnoter</h2>
            <div className="module">
            <p>{answers.notes}</p>
        </div>
        </div>


        <div className="module expression-block">
          <h2>Udtryk</h2>
          <p>{expressionExplainer(answers.expression)}</p>
        </div>

        <div className="module intent-block">
          <h2>Intent</h2>
          <p>{intentExplainer(answers.intent)}</p>
        </div>

      </div>
    </div>
  );
}


// ======================
// HELPERS
// ======================

function generateProfileName(answers) {
  if (!answers || !answers.mood) return "Din Duftprofil";
  return "Din Duftprofil";
}

function moodExplainer(mood) {
  return {
    soft_clean: "Du søger renhed og lethed.",
    warm_cozy: "Du drages mod varme og tryghed."
  }[mood] ?? "";
}

function expressionExplainer(e) {
  return {
    elegant: "Raffineret og afbalanceret.",
    natural: "Roligt og effortless."
  }[e] ?? "";
}

function intentExplainer(i) {
  return {
    standout: "Du søger karakter og dybde.",
    everyday: "Du vil have noget let og anvendeligt."
  }[i] ?? "";
}
