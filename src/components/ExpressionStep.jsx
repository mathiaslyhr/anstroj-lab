import { useState } from "react";
import expressions from "../data/expressions.json";

export default function ExpressionStep({ onNext, onBack }) {
  const [selected, setSelected] = useState(null);

  const active = expressions.find(e => e.id === selected);

  return (
    <div className="h-full px-6 flex flex-col justify-between">

      {/* TOP TEXT */}
      <div>
        <h1 className="text-3xl font-medium mb-4">
          Dufte kan farve, hvordan andre oplever os.
        </h1>

        <p className="text-stone-600 w-[70%] leading-relaxed mb-12">
          Vælg det udtryk, du helst vil have, at din duft sender.
        </p>

        {/* LAYOUT: LEFT OPTIONS + RIGHT LARGE IMAGE */}
        <div className="grid grid-cols-2 gap-16">

          {/* LEFT SIDE OPTIONS */}
          <div className="flex flex-col gap-10">

            {expressions.map(item => {
              const isSelected = selected === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  className={`flex cursor-pointer items-center gap-6 ${isSelected ? "underline" : "text-stone-800"}`}
                >
                  <span
                    className={`
                      text-lg cursor-pointer transition-all
                      ${isSelected ? "font-medium" : "text-stone-800"}
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Small image thumbnail */}
                  <div
                    className={`
                      w-16 h-16 bg-[#DCDCDC]
                      ${isSelected ? "ring-2" : ""}
                    `}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                </button>
              );
            })}

          </div>

          {/* RIGHT SIDE LARGE IMAGE */}
          <div
            className="w-[380px] h-[380px] bg-[#DCDCDC]"
            style={{
              backgroundImage: active ? `url(${active.largeImage})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>

        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-16 mb-10 w-[85%] self-center">
        <button
          onClick={onBack}
          className="text-sm text-stone-500 hover:text-stone-800"
        >
          Tilbage
        </button>

        <button
          onClick={() => onNext(selected)}
          disabled={!selected}
          className={`
            px-6 py-2 transition-all
            ${
              selected
                ? "bg-[#39516A] text-white hover:bg-[#2f4355]"
                : "bg-stone-300 text-stone-500 cursor-not-allowed"
            }
          `}
        >
          Næste
        </button>
      </div>

    </div>
  );
}
