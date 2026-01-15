import Card from "./Card";

export default function SelectedDeckWindow({
  selectedDeck,
  selectedCiv,
  addOrRemoveCardFromDeck,
}) {
  const isValidDeck = selectedDeck && selectedDeck.civ === selectedCiv;

  // --------------------------------------------------------------------------------- Keep old code for reference later
  //   const age1_cards = isValidDeck
  //     ? selectedDeck.cards.filter((card) => Number(card.age) === 1)
  //     : [];

  //   const age2_cards = isValidDeck
  //     ? selectedDeck.cards.filter((card) => Number(card.age) === 2)
  //     : [];

  //   const age3_cards = isValidDeck
  //     ? selectedDeck.cards.filter((card) => Number(card.age) === 3)
  //     : [];

  //   const age4_cards = isValidDeck
  //     ? selectedDeck.cards.filter((card) => Number(card.age) === 4)
  //     : [];

  // Group cards by age dynamically instead of writing separate variables
  const cardsByAge = isValidDeck
    ? selectedDeck.cards.reduce((acc, card) => {
        const age = Number(card.age);
        if (!acc[age]) acc[age] = [];
        acc[age].push(card);
        return acc;
      }, {})
    : {};

  const ageNumberDivStyle = "min-w-15 flex justify-center items-center mr-2";
  const ageNumberSpanStyle =
    "font-['Cinzel'] text-5xl font-bold text-[#d6b35a] flex text-center";
  const ageContainerStyle = "flex border-b-2 my-4";
  const cardsStyle = "flex gap-2 pb-4";

  //
  const ages = [1, 2, 3, 4];
  const ageRoman = ["I", "II", "III", "IV"];

  return (
    <>
      <div className="wrapper font-['Cinzel']">
        {ages.map((age, index) => (
          <div key={age} className={ageContainerStyle}>
            <div className={ageNumberDivStyle}>
              <span className={ageNumberSpanStyle}>{ageRoman[index]}</span>
            </div>
            <div className={cardsStyle}>
              {(cardsByAge[age] ?? []).map((card) => (
                <Card
                  key={card.id ?? card.name}
                  name={card.name}
                  // description={card.description}
                  image={card.image}
                  addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Age IV */}
      {/* <div className={ageContainerStyle}>    ///  THIS CODE WAS REPEATED 4 TIMES - before refactoring
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
      */}
      {/* -------- */}
    </>
  );
}
