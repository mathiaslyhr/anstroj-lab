import intensityData from "../data/intensity.json";
import sensitivityData from "../data/sensitivity.json";

export default function IntensitySensitivityModule({ intensity, sensitivity }) {

  const intensityInfo = intensityData.find(i => i.id === intensity);
  const sensitivityInfo = sensitivityData.find(s => s.id === sensitivity);

  return (
    <div className="p-4 rounded-xl ui-element w-[450px] space-y-6">

      <h2 className="text-xl font-semibold">Intensitet & sensitivitet</h2>

      <div className="grid grid-cols-2 gap-4">

        {/* INTENSITY CARD */}
        <div className="p-4 bg-[#F4F4F4] rounded-lg shadow">
          <p className="text-sm font-semibold mb-1">Intensitet</p>
          <p className="text-base font-medium">
            {intensityInfo?.label ?? "—"}
          </p>
          <p className="text-sm text-stone-600 mt-1">
            Sådan foretrækker du din dufts styrke.
          </p>
        </div>

        {/* SENSITIVITY CARD */}
        <div className="p-4 bg-[#F4F4F4] rounded-lg shadow">
          <p className="text-sm font-semibold mb-1">Sensitivitet</p>
          <p className="text-base font-medium">
            {sensitivityInfo?.title ?? "—"}
          </p>
          <p className="text-sm text-stone-600 mt-1">
            {sensitivityInfo?.text ?? "Vi tilpasser din profil efter din duftoplevelse."}
          </p>
        </div>

      </div>

    </div>
  );
}
