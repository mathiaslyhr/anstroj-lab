import intensityData from "../data/intensity.json";
import sensitivityData from "../data/sensitivity.json";

export default function IntensitySensitivityModule({ intensity, sensitivity }) {

  const intensityInfo = intensityData.find(i => i.id === intensity);
  const sensitivityInfo = sensitivityData.find(s => s.id === sensitivity);

  return (
    <div className="p-4 rounded-xl ui-element w-[600px] space-y-6">
      
      <h2 className="text-xl font-semibold">Intensitet & sensitivitet</h2>

      <div className="grid grid-cols-2 gap-4">

        {/* INTENSITY CARD */}
        <div className="p-4 bg-[#F4F4F4] rounded-lg shadow space-y-2">
          <p className="text-sm font-semibold">Intensitet</p>

          <p className="text-base font-medium">
            {intensityInfo?.label ?? "—"}
          </p>

          {/* Kort text */}
          <p className="text-sm text-stone-600">
            {intensityInfo?.short ?? "Sådan foretrækker du din dufts styrke."}
          </p>

          {/* Dybere forklaring */}
          {intensityInfo?.deep && (
            <p className="text-sm text-stone-500 leading-relaxed">
              {intensityInfo.deep}
            </p>
          )}
        </div>

        {/* SENSITIVITY CARD */}
        <div className="p-4 bg-[#F4F4F4] rounded-lg shadow space-y-2">
          <p className="text-sm font-semibold">Sensitivitet</p>

          <p className="text-base font-medium">
            {sensitivityInfo?.title ?? "—"}
          </p>

          {/* Kort text */}
          <p className="text-sm text-stone-600">
            {sensitivityInfo?.text ?? "Vi tilpasser din profil efter din duftoplevelse."}
          </p>

          {/* Dybere forklaring */}
          {sensitivityInfo?.deep && (
            <p className="text-sm text-stone-500 leading-relaxed">
              {sensitivityInfo.deep}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
