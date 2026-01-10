import Card from "./Card";

export default function CardsInventory({
  selectedAge,
  inventoryCardsByAge,
  addOrRemoveCardFromDeck,
}) {
  const ageDescriptions = {
    1: "I: Exploration Age",
    2: "II: Commerce Age",
    3: "III: Fortress Age",
    4: "V: Industrial Age",
  };

  return (
    <>
      <div className="wrapper  ">
        <h3 className="text-[#c9a24d] text-sm tracking-widest uppercase mt-4 mb-4">
          Inventory: {ageDescriptions[selectedAge] || "Select an Age"}
        </h3>
        <div className="wrapper grid grid-cols-4 gap-4grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
          {inventoryCardsByAge.map((cardData, index) => (
            <Card
              key={index}
              name={cardData.name}
              // description={cardData.description}
              image={cardData.image}
              addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
            />
          ))}
        </div>
      </div>
    </>
  );
}
