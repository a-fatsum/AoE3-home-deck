// import Card from "./Card";

// export default function CardsInventory({
//   selectedAge,
//   inventoryCardsByAge,
//   addOrRemoveCardFromDeck,
// }) {
//   const ageDescriptions = {
//     1: "I: Exploration Age",
//     2: "II: Commerce Age",
//     3: "III: Fortress Age",
//     4: "V: Industrial Age",
//   };

//   return (
//     <>
//       <div className="wrapper  font-['Cinzel'] ">
//         <h3 className="text-[#c9a24d] text-sm tracking-widest uppercase mt-4 mb-4">
//           Inventory: {ageDescriptions[selectedAge] || "Select an Age"}
//         </h3>
//         <div className="wrapper grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1  ">
//           {inventoryCardsByAge.map((cardData, index) => (
//             <Card
//               key={index}
//               name={cardData.name}
//               description={cardData.description}
//               image={cardData.image}
//               addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
//               age={cardData.age}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

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
    4: "IV: Industrial Age",
  };

  return (
    <div className="wrapper font-['Cinzel'] p-2">
      <h3
        className="text-[#c9a24d] text-base tracking-widest uppercase 
                     border-b border-[#c9a24d] pb-1 mb-3"
      >
        Inventory: {ageDescriptions[selectedAge] || "Select an Age"}
      </h3>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2
                      max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#c9a24d]/60 scrollbar-track-transparent"
      >
        {inventoryCardsByAge.map((cardData, index) => (
          <Card
            key={index}
            name={cardData.name}
            description={cardData.description}
            image={cardData.image}
            addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
            age={cardData.age}
          />
        ))}
      </div>
    </div>
  );
}
