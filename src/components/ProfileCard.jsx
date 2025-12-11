import { useState } from "react";

export default function ProfileCard({ profile, onShare, }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className=" 
        w-[550px] max-w-full 
        p-4
        flex flex-col ui-element">
      
      {/* TITLE */}
      <h1 className="profile-title">{profile.title}</h1>


        <div className="relative pb-4 ss">
        {/* SHORT TEXT */}
        {!expanded && (
          <p
            className="
              leading-relaxed font-semibold
              transition-opacity duration-300
              opacity-100
            "
          >
            {profile.short}
          </p>
        )}

        {/* LONG TEXT */}
        {expanded && (
          <p
            className="
              leading-relaxed whitespace-pre-line
              transition-opacity duration-300
              opacity-100
            "
          >
            {profile.long}
          </p>
        )}
      </div>


        <div className="flex justify-start gap-6 w-full items-center pt-4">
             {/* TOGGLE */}
      <button 
        className="underline-btn cursor-pointer w-[20%]" 
        onClick={() => setExpanded(prev => !prev)}
      >
        {expanded ? "Vis mindre" : "Læs mere"}
      </button>

      {/* Del knap */}

        <button
          type="button"
          onClick={onShare}
          className="
            bg-white
            border
            px-4 py-2
            rounded-md
            text-sm
            hover:bg-[#39516A]
            hover:text-white
            transition
          "
        >
          Del din profil
        </button>
        </div>
     

    </div>
  );
}
