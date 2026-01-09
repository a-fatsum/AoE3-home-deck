import CivSelector from "./CivSelector";
import SelectedDeckWindow from "./SelectedDeckWindow";

export default function Dash({
  handleCivSelection,
  selectedCivData,
  selectedCiv,
  civilizations,
  selectedAge,
  cardsByAge,

  selectAge,
}) {
  const cards = selectedCivData?.cards || [];
  // console.log("🔄", cards.length);

  // const selectedCivCards = selectedCivData?.cards || [];
  // const cards = selectedCivCards.cards.filter(
  //   (card) => card.selectedAge === selectedAge
  // );

  const flag = selectedCivData?.flag;

  //
  return (
    <div className=" bg-[#1a120b] text-[#f5e6b8] p-6 font-serif">
      {/* Main Frame */}
      <div className="h-full grid grid-cols-12 gap-6 border-4 border-[#c9a24d] bg-[#2b1d12] p-4 shadow-2xl">
        {/* LEFT PANEL – Civ Selection */}
        <aside className="col-span-3 flex flex-col gap-4">
          {/* Top Left Panel */}
          <div
            className="flex-1 bg-gradient-to-b from-[#3a2617] to-[#24160d]
                          border-2 border-[#c9a24d] rounded-md p-4"
          >
            <h3 className="text-[#c9a24d] text-sm tracking-widest uppercase mb-2">
              Overview
            </h3>
            <p className="text-sm text-[#e3d3a1] opacity-80">
              Select a civilization and manage your deck.
            </p>
          </div>

          {/* Bottom Left – Civ Selector */}
          <div
            className="bg-gradient-to-b from-[#3a2617] to-[#24160d]
                          border-2 border-[#c9a24d] rounded-md p-4"
          >
            <h3 className="text-[#c9a24d] text-sm tracking-widest uppercase mb-3">
              Civilizations
            </h3>
            <CivSelector
              handleCivSelection={handleCivSelection}
              civilizations={civilizations}
              cardsByAge={cardsByAge}
              selectedAge={selectedAge}
              selectAge={selectAge}
            />
          </div>
        </aside>

        {/* RIGHT PANEL – Deck */}
        <main className="col-span-9 flex flex-col gap-4">
          {/* Top Right – Deck Window */}
          <section
            className="flex-1 bg-gradient-to-b from-[#3a2617] to-[#24160d]
                              border-2 border-[#c9a24d] rounded-md p-4 overflow-hidden"
          >
            {/* Header Bar */}
            <div className="border-b border-[#c9a24d] pb-2 mb-4 flex items-center justify-between">
              {/* FLAG */}
              <div>
                <h2 className="text-xl tracking-wide">
                  {selectedCiv || "Civilization Deck"}
                </h2>
                <img className="w-18 h-12" src={flag} alt={selectedCiv} />
              </div>

              <span className="text-sm text-[#c9a24d] uppercase tracking-widest">
                Home City
              </span>
            </div>

            {/* Cards */}
            <div
              className="h-full overflow-y-auto pr-2
                            scrollbar-thin scrollbar-thumb-[#c9a24d]/60 scrollbar-track-transparent"
            >
              <SelectedDeckWindow cards={cards} />
            </div>
          </section>

          {/* Bottom Right – Action Bar */}
          <section
            className="h-24 bg-gradient-to-b from-[#3a2617] to-[#24160d]
                              border-2 border-[#c9a24d] rounded-md flex items-center justify-center gap-6"
          >
            <button
              className="px-6 py-2 bg-[#c9a24d] text-[#1a120b]
                               font-semibold tracking-wide rounded
                               hover:bg-[#e0b85f] transition"
            >
              Save Deck
            </button>

            <button
              className="px-6 py-2 border border-[#c9a24d]
                               text-[#f5e6b8] tracking-wide rounded
                               hover:bg-[#c9a24d]/10 transition"
            >
              Reset
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
