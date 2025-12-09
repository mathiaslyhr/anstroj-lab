import { useState } from "react";
import IntroStep from "./IntroStep";
import Navbar from "./Navbar";
import MoodStep from "./MoodStep";
import SituationsStep from "./SituationsStep";
import NotesStep from "./NotesStep";
import IntensityStep from "./IntensityStep";


export default function ScentLabFlow(){
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({
    mood: null,
    situations: [],
    notes:null,
    intensity: null,
    longevity: null,
    budget: null,
    openness: null,
    });

   const next = () => setStep(prev => prev + 1);
    const back = () => setStep((prev) => Math.max(prev - 1, 0));

   function updateAnswers(changes) {
  setAnswers(prev => ({ ...prev, ...changes }));
}
    
    return(
        <div className="pt-20" style={{ height: "calc(100vh - 80px)" }}>
             <Navbar/>
            <div className="">
                <div 
                key={step}
                className="animation-fade transition-opacity duration-500 h-full"
                >
                    {step === 0 && <IntroStep onNext={next} />}

                    {step === 1 && <MoodStep
                    onNext={(value) => {
                        updateAnswers({ mood: value });
                        next();
                    }}
                    onBack={back}
                    />}

                    {step === 2 && (<SituationsStep onBack={back} onNext={(values) => {
                        updateAnswers({ situations: values });
                        next();
                    }} />)}

                    {step === 3 && <NotesStep 
                    onBack={back}
                    onNext={(noteArray) => {
                    updateAnswers({ preferredNote: noteArray });
                    next();
                    }}/>}

                    {step === 4 && <IntensityStep
                    onBack={back}
                    onNext={(intensityValue) => {
                    updateAnswers({ intensity: intensityValue });
                    next();
                    }}
                />}
                    
                </div>
            </div>
        </div>
    );
}