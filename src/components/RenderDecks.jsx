import Deck from "./Deck";

export default function RenderDecks({
  allDecks,
  selectedDeckId,
  setSelectedDeckId,
  selectedCiv,
}) {
  const filteredDecks = allDecks.filter((deck) => deck.civ === selectedCiv);

  return (
    <div
      className="flex-1 bg-gradient-to-b from-[#3a2617] to-[#24160d]
                 border-2 border-[#c9a24d] rounded-md p-4    font-['Cinzel']"
    >
      <h2 className="text-[#c9a24d] text-xl tracking-wide tracking-widest uppercase mb-2">
        Available Decks
      </h2>

      {filteredDecks.map((deck) => (
        <Deck
          key={deck.id}
          deckName={deck.name}
          numberOfCards={deck.cards.length}
          isSelected={deck.id === selectedDeckId}
          onClick={() => setSelectedDeckId(deck.id)}
        />
      ))}
    </div>
  );
}
