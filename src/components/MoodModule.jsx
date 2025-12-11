import moodData from "../data/moods.json";

export default function MoodModule({ moodsSelected = [] }) {
//    sørg for at moods altid er et array
  const selectedArray = Array.isArray(moodsSelected) ? moodsSelected : [moodsSelected];

   // Find de moods der matcher id'er
  const selected = moodData.filter((m) => selectedArray.includes(m.id));

  return (
    <div className="bg-white p-6 rounded-xl w-[380px] ui-element">

      <div className="grid grid-cols-2 gap-4">
        {selected.map((mood) => (
          <div
            key={mood.id}
            className="rounded-lg overflow-hidden shadow relative h-32 group"
          >
            {/* Image */}
            <div
              className="
                absolute inset-0 bg-cover bg-center
                transition-transform duration-300
                group-hover:scale-105
              "
              style={{ backgroundImage: `url(${mood.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white font-medium text-center px-2">
                {mood.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
