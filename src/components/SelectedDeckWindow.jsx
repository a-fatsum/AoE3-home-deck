import Card from "./Card";

export default function SelectedDeckWindow({
  selectedDeck,
  selectedCiv,
  addOrRemoveCardFromDeck,
}) {
  const isValidDeck = selectedDeck && selectedDeck.civ === selectedCiv;

  // const deckCards = isValidDeck ? selectedDeck.cards : [];

  //
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

  // 🕵 Debug
  console.log({
    age1: age1_cards.length,
    age2: age2_cards.length,
    age3: age3_cards.length,
    age4: age4_cards.length,
    age_1_EXAMPLE: age1_cards,
  });

  const ageNumberDivStyle = "min-w-15 flex justify-center items-center mr-2";
  const ageNumberSpanStyle =
    "font-['Cinzel'] text-5xl font-bold text-[#d6b35a] flex text-center";
  const ageContainerStyle = "flex border-b-2 my-4";
  const cardsStyle = " flex gap-2 pb-4";

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
                addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
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
                addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
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
                addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
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
                addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All cards (debug / reference view) */}
      {/* <div className="wrapper grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
        {deckCards.map((deckData) => (
          <Card
            key={deckData.id ?? deckData.name}
            name={deckData.name}
            image={deckData.image}
            addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
          />
        ))}
      </div> */}
    </>
  );
}
