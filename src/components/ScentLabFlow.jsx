import { useState } from "react";
import IntroStep from "./IntroStep";
import Navbar from "./Navbar";
import MoodStep from "./MoodStep";
import SituationsStep from "./SituationsStep";
import NotesStep from "./NotesStep";
import IntensityStep from "./IntensityStep";
import SensitivityStep from "./SensitivityStep";
import ExpressionStep from "./ExpressionStep";
import IntentStep from "./IntentStep";
import ScentLabSummary from "./ScentLabSummary";


export default function ScentLabFlow(){
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({
    moods: [],
    situations: [],
    notes:[],
    intensity: null,
    sensitivity: null,
    expression: null,
    intent: null,
    });

   const next = () => setStep(prev => prev + 1);
    const back = () => setStep((prev) => Math.max(prev - 1, 0));

   function updateAnswers(changes) {
  setAnswers(prev => ({ ...prev, ...changes }));
}

    function resetFlow() {
    setAnswers({
        moods: [],
        situations: [],
        notes: [],
        intensity: null,
        sensitivity: null,
        expression: null,
        intent: null,
    });

    setStep(1); 
    }
    
    return(
        <div className={step === 8 ? "" : "pt-26"} >
             {step !== 8 && <Navbar />}
            <div className="">
                <div 
                key={step}
                className="animation-fade transition-opacity duration-500 h-full"
                >
                    {step === 0 && <IntroStep onNext={next} />}

                    {step === 1 && <MoodStep
                    onNext={(selectedMoods) => {
                        updateAnswers({ moods: selectedMoods });
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
                    updateAnswers({ notes: noteArray });
                    next();
                    }}/>}

                    {step === 4 && <IntensityStep
                    onBack={back}
                    onNext={(intensityValue) => {
                    updateAnswers({ intensity: intensityValue });
                    next();
                    }}
                    />}

                    {step === 5 && <SensitivityStep
                    onBack={back}
                    onNext={(value) => {
                    updateAnswers({ sensitivity: value });
                    next();
                    }}
                    />}

                    {step === 6 && <ExpressionStep
                    onBack={back}
                    onNext={(value) => {
                    updateAnswers({ expression: value });
                    next();
                    }}
                    />}

                    {step === 7 && <IntentStep
                    onBack={back}
                    onNext={(value) => {
                    updateAnswers({ intent: value });
                    next();
                    }}
                    />}

                    {step === 8 && <ScentLabSummary answers={answers} onReset={resetFlow}/>}

                    
                    
                </div>
            </div>
        </div>
    );
}