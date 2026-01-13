// import Card from "./Card";

// export default function SelectedDeckWindow({ selectedDeck, selectedCiv }) {
//   const deckCards =
//     selectedDeck && selectedDeck.civ === selectedCiv ? selectedDeck.cards : [];
//   //

//   const age1_cards = selectedDeck
//     ? selectedDeck.cards.filter((card) => card.age === 1)
//     : [];
//   const age2_cards = selectedDeck
//     ? selectedDeck.cards.filter((card) => card.age === 2)
//     : [];
//   const age3_cards = selectedDeck
//     ? selectedDeck.cards.filter((card) => card.age === 3)
//     : [];
//   const age4_cards = selectedDeck
//     ? selectedDeck.cards.filter((card) => card.age === 4)
//     : [];

//   //
//   const ageNumberDivStyle = "w-15 flex justify-center items-center";

//   const ageNumberSpanStyle =
//     "font-['Cinzel'] text-5xl font-bold text-[#d6b35a] flex text-center";

//   const ageContainerStyle = "flex border-b-2 my-4";

//   const cardsStyle = "flex";

//   //
//   return (
//     <>
//       <div className="wrapper">
//         {/* Age I */}
//         <div className={ageContainerStyle}>
//           {" "}
//           <div className={ageNumberDivStyle}>
//             <span className={ageNumberSpanStyle}>I</span>{" "}
//           </div>
//           {/* // ------------------------------------------------------------------CARDS Age I */}
//           <div className={cardsStyle}>
//             {age1_cards.map((card) => (
//               <Card
//                 key={card.id ?? card.name}
//                 name={card.name}
//                 description={card.description}
//                 image={card.image}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Age II */}
//         <div className={ageContainerStyle}>
//           <div className={ageNumberDivStyle}>
//             <span className={ageNumberSpanStyle}>II</span>{" "}
//           </div>
//           {/* // ------------------------------------------------------------------CARDS Age II */}

//           <div className={cardsStyle}>
//             {age2_cards.map((card) => (
//               <Card
//                 key={card.id ?? card.name}
//                 name={card.name}
//                 description={card.description}
//                 image={card.image}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Age III */}
//         <div className={ageContainerStyle}>
//           {" "}
//           <div className={ageNumberDivStyle}>
//             <span className={ageNumberSpanStyle}>III</span>{" "}
//           </div>
//           {/* // ------------------------------------------------------------------CARDS Age III */}
//           <div className={cardsStyle}>
//             {age3_cards.map((card) => (
//               <Card
//                 key={card.id ?? card.name}
//                 name={card.name}
//                 description={card.description}
//                 image={card.image}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Age IV */}
//         <div className={ageContainerStyle}>
//           {" "}
//           <div className={ageNumberDivStyle}>
//             <span className={ageNumberSpanStyle}>IV</span>{" "}
//           </div>
//           {/* // ------------------------------------------------------------------CARDS Age IV */}
//           <div className={cardsStyle}>
//             {age4_cards.map((card) => (
//               <Card
//                 key={card.id ?? card.name}
//                 name={card.name}
//                 description={card.description}
//                 image={card.image}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="wrapper grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1  ">
//         {deckCards.map((deckData) => (
//           <Card
//             key={deckData.id ?? deckData.name}
//             name={deckData.name}
//             // description={deckData.description}
//             image={deckData.image}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
//==============================================================================================================
//==============================================================================================================
//==============================================================================================================
//==============================================================================================================
//==============================================================================================================
//==============================================================================================================
//==============================================================================================================
import Card from "./Card";

export default function SelectedDeckWindow({
  selectedDeck,
  selectedCiv,
  addOrRemoveCardFromDeck,
}) {
  const isValidDeck = selectedDeck && selectedDeck.civ === selectedCiv;

  const deckCards = isValidDeck ? selectedDeck.cards : [];

  const age1_cards = isValidDeck
    ? selectedDeck.cards.filter((card) => Number(card.age) === 1)
    : [];

  const age2_cards = isValidDeck
    ? selectedDeck.cards.filter((card) => Number(card.age) === 2)
    : [];

  const age3_cards = isValidDeck
    ? selectedDeck.cards.filter((card) => Number(card.age) === 3)
    : [];

  const age4_cards = isValidDeck
    ? selectedDeck.cards.filter((card) => Number(card.age) === 4)
    : [];

  // ✅ Debug (temporary, but VERY useful)
  console.log({
    age1: age1_cards.length,
    age2: age2_cards.length,
    age3: age3_cards.length,
    age4: age4_cards.length,
  });

  const ageNumberDivStyle = "w-15 flex justify-center items-center";
  const ageNumberSpanStyle =
    "font-['Cinzel'] text-5xl font-bold text-[#d6b35a] flex text-center";
  const ageContainerStyle = "flex border-b-2 my-4";
  const cardsStyle = "flex";

  return (
    <>
      <div className="wrapper">
        {/* Age I */}
        <div className={ageContainerStyle}>
          <div className={ageNumberDivStyle}>
            <span className={ageNumberSpanStyle}>I</span>
          </div>
          <div className={cardsStyle}>
            {age1_cards.map((card) => (
              <Card
                key={card.id ?? card.name}
                name={card.name}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>

        {/* Age II */}
        <div className={ageContainerStyle}>
          <div className={ageNumberDivStyle}>
            <span className={ageNumberSpanStyle}>II</span>
          </div>
          <div className={cardsStyle}>
            {age2_cards.map((card) => (
              <Card
                key={card.id ?? card.name}
                name={card.name}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>

        {/* Age III */}
        <div className={ageContainerStyle}>
          <div className={ageNumberDivStyle}>
            <span className={ageNumberSpanStyle}>III</span>
          </div>
          <div className={cardsStyle}>
            {age3_cards.map((card) => (
              <Card
                key={card.id ?? card.name}
                name={card.name}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>

        {/* Age IV */}
        <div className={ageContainerStyle}>
          <div className={ageNumberDivStyle}>
            <span className={ageNumberSpanStyle}>IV</span>
          </div>
          <div className={cardsStyle}>
            {age4_cards.map((card) => (
              <Card
                key={card.id ?? card.name}
                name={card.name}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All cards (debug / reference view) */}
      <div className="wrapper grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
        {deckCards.map((deckData) => (
          <Card
            key={deckData.id ?? deckData.name}
            name={deckData.name}
            image={deckData.image}
            addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
          />
        ))}
      </div>
    </>
  );
}
