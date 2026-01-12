import Card from "./Card";

export default function SelectedDeckWindow({ selectedDeck, selectedCiv }) {
  const deckCards =
    selectedDeck && selectedDeck.civ === selectedCiv ? selectedDeck.cards : [];

  return (
    <div className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {deckCards.map((deckData) => (
        <Card
          key={deckData.id ?? deckData.name}
          name={deckData.name}
          description={deckData.description}
          image={deckData.image}
        />
      ))}
    </div>
  );
}
