import situationData from "../data/situations.json";

export default function SituationModule({ situationsSelected }) {
  const selected = situationData.filter(s => 
    situationsSelected.includes(s.id)
  );

  return (
    <div className=" p-4 rounded-xl ui-element w-[450px]">

      <div className="grid grid-cols-2 gap-4">
        {selected.map((situation) => (
          <div
            key={situation.id}
            className="relative h-32 rounded-xl overflow-hidden group shadow"
          >
            {/* Billede */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${situation.image})` }}
            />

            {/* Hover overlay */}
            <div className="
              absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
              flex items-center justify-center transition-opacity
            ">
              <p className="text-white font-medium text-center px-2">
                {situation.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
