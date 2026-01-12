import Deck from "./Deck";

export default function RenderDecks({ allDecks }) {
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
        {allDecks.map((deck) => (
          <Deck deckName={deck.name} numberOfCards={deck.cards.length} />
        ))}
      </div>
    </>
  );
}
