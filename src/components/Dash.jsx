import CivSelector from "./CivSelector";
import SelectedDeckWindow from "./SelectedDeckWindow";

export default function Dash({
  handleCivSelection,
  OttomansData,
  selectedCiv,
  civilizations,
}) {
  return (
    <div className="h-screen w-screen bg-slate-900 text-slate-100 p-6">
      <div className="grid grid-cols-12 gap-6 h-full">
        {/* LEFT SIDEBAR */}
        <aside className="col-span-3 bg-slate-800 rounded-xl p-4 flex flex-col gap-4">
          {/* Top Left */}
          <div className="flex-1 bg-slate-700 rounded-lg p-4 text-center">
            <p className="text-sm text-slate-300">Top Left</p>
          </div>

          {/* Bottom Left */}
          <div className="bg-slate-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">Civilizations</h2>
            <CivSelector
              handleCivSelection={handleCivSelection}
              civilizations={civilizations}
            />
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <main className="col-span-9 bg-slate-800 rounded-xl p-4 flex flex-col gap-4">
          {/* Top Right */}
          <section className="flex-1 bg-slate-700 rounded-lg p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">
              {selectedCiv || "Selected Deck"}
            </h2>
            <SelectedDeckWindow OttomansData={OttomansData} />
          </section>

          {/* Bottom Right */}
          <section className="h-32 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">
            Bottom Panel
          </section>
        </main>
      </div>
    </div>
  );
}
