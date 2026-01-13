import { useState } from "react";
import { Modal, Box } from "@mui/material";
import CivSelector from "./CivSelector";
import SelectedDeckWindow from "./SelectedDeckWindow";
import CardsInventory from "./CardsInventory";
import Button from "./Button";
import AddDeck from "./AddDeck";
import RenderDecks from "./RenderDecks";

export default function Dash({
  handleCivSelection,
  selectedCivData,
  selectedCiv,
  civilizations,
  selectedAge,
  inventoryCardsByAge,
  selectAge,
  createNewDeck,
  addOrRemoveCardFromDeck,
  deckList,
  setDeckName,
  allDecks,
  setSelectedDeckId,
  selectedDeck,
}) {
  const flag = selectedCivData?.flag;

  const [showModal, setShowModal] = useState(false);
  function renderModal() {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  };

  const numberOfDecks = allDecks.length;
  const numberOfDecksPerCiv = allDecks.filter(
    (deck) => deck.civ === selectedCiv
  );

  //
  return (
    <div className=" bg-[#1a120b] w-screen text-[#f5e6b8] p-6 font-['Cinzel']  ">
      {/* Main Frame */}
      <div className="h-full grid grid-cols-12 gap-6 border-4 border-[#c9a24d] bg-[#2b1d12] p-4 shadow-2xl">
        {/* LEFT PANEL – Civ Selection */}
        <aside className="col-span-3 flex flex-col gap-4">
          {/* Top Left Panel */}

          {/* RENDER DECKS */}
          <RenderDecks
            allDecks={allDecks}
            setSelectedDeckId={setSelectedDeckId}
            selectedCiv={selectedCiv}
          />

          {/* =================================================== */}

          {/* Pop up */}
          <Modal open={showModal} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                // bgcolor: "#333533",
                boxShadow: 24,
                p: 3,
                borderRadius: 2,
                minWidth: 350,
              }}
            >
              <AddDeck
                createNewDeck={createNewDeck}
                // x={e.taregt}
                setDeckName={setDeckName}
                handleClose={handleClose}
              />
            </Box>
          </Modal>

          {/* Buttons -> CREATE | SAVE | DELETE | COPY */}
          <div className="grid grid-cols-2">
            <Button
              label={"create"}
              onClick={() => {
                // createNewDeck(),
                renderModal();
              }}
            />
            <Button label={"save"} />
            <Button label={"delete"} />
            <Button label={"copy"} />
          </div>

          {/* Bottom Left – Civ Selector */}
          <div
            className="bg-gradient-to-b from-[#3a2617] to-[#24160d]
                          border-2 border-[#c9a24d] rounded-md p-4"
          >
            <CivSelector
              handleCivSelection={handleCivSelection}
              selectedCiv={selectedCiv}
              civilizations={civilizations}
              inventoryCardsByAge={inventoryCardsByAge}
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
                <div className="flex gap-4   ">
                  <h2 className="text-xl tracking-wide">
                    {selectedCiv || "Civilization Deck"}
                  </h2>
                  <span>{numberOfDecksPerCiv.length} </span>
                </div>
                <img className="w-18 h-12" src={flag} alt={selectedCiv} />
              </div>

              <span className="text-sm text-[#c9a24d] uppercase tracking-widest">
                Total Number of Decks:{" "}
                <span className="text-lg">{numberOfDecks}</span>
              </span>
            </div>

            {/* Cards */}
            <div
              className="h-full overflow-y-auto pr-2
                            scrollbar-thin scrollbar-thumb-[#c9a24d]/60 scrollbar-track-transparent"
            >
              <SelectedDeckWindow
                deckList={deckList}
                allDecks={allDecks}
                selectedDeck={selectedDeck}
                selectedCiv={selectedCiv}
                addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
              />
            </div>
          </section>

          {/* Bottom Right – Action Bar */}
          <section
            className="min-h-46 bg-gradient-to-b from-[#3a2617] to-[#24160d]
                              border-2 border-[#c9a24d] rounded-md flex items-center justify-center gap-6"
          >
            <CardsInventory
              selectedAge={selectedAge}
              inventoryCardsByAge={inventoryCardsByAge}
              // createNewDeck={createNewDeck}
              addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
            />
          </section>
        </main>
      </div>
    </div>
  );
}
