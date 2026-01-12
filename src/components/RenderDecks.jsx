import Deck from "./Deck";

export default function RenderDecks({
  allDecks,
  setSelectedDeckId,
  selectedCiv,
}) {
  // Filter decks by selected civilization
  const filteredDecks = allDecks.filter((deck) => deck.civ === selectedCiv);
  return (
    <>
      <div
        className="flex-1 bg-gradient-to-b from-[#3a2617] to-[#24160d]
                          border-2 border-[#c9a24d] rounded-md p-4 font-serif
                          "
      >
        <h3 className="text-[#c9a24d] text-sm tracking-widest uppercase mb-2">
          Available Decks
        </h3>

        {/* Render decks */}
        {filteredDecks.map((deck, index) => (
          <Deck
            key={index}
            deckName={deck.name}
            numberOfCards={deck.cards.length}
            onClick={() => setSelectedDeckId(deck.id)}
          />
        ))}
      </div>
    </>
  );
}
