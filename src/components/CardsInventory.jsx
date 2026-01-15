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
      <div className="wrapper  font-['Cinzel'] ">
        <h3 className="text-[#c9a24d] text-sm tracking-widest uppercase mt-4 mb-4">
          Inventory: {ageDescriptions[selectedAge] || "Select an Age"}
        </h3>
        {/* <div className="wrapper grid grid-cols-4 gap-4grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2"> */}
        <div className="wrapper grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1  ">
          {inventoryCardsByAge.map((cardData, index) => (
            <Card
              key={index}
              name={cardData.name}
              // description={cardData.description}
              image={cardData.image}
              addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
              age={cardData.age}
            />
          ))}
        </div>
      </div>
    </>
  );
}
