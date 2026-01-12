import { useState, useMemo } from "react";
import Dash from "./components/Dash";
import data from "./data/allCards.json";

function App() {
  const civilizations = [
    "British",
    "Dutch",
    "French",
    "Germans",
    "Ottomans",
    "Portuguese",
    "Russians",
    "Spanish",
  ];

  const [selectedCiv, setSelectedCiv] = useState(civilizations[0]);
  const [selectedAge, setSelectedAge] = useState("");
  const [deckList, setDeckList] = useState([]);
  const [listOfAllDecks, setListOfAllDecks] = useState({});
  const [selectedCard, setSelectedCard] = useState();
  const [deckName, setDeckName] = useState("");

  //
  function createNewDeck(name) {
    setDeckName(name);

    console.log("Deck Name ", deckName);
  }

  const selectedCivData = selectedCiv ? data[selectedCiv] : null;

  function handleCivSelection(civ) {
    setSelectedCiv(civ);
  }

  // Inventory Cards selected by age and civ
  const inventoryCardsByAge = useMemo(() => {
    if (!selectedCiv || !selectedAge) return [];
    return data[selectedCiv].cards.filter((card) => card.age === selectedAge);
  }, [data, selectedCiv, selectedAge]);

  // function createNewDeck() {
  //   setListOfAllDecks({
  //     ...listOfAllDecks,
  //     [selectedCiv]: deckList,
  //   });
  //   console.log("New Deck Created 🃏", listOfAllDecks);
  //   // setDeckList([]);
  // }

  function addOrRemoveCardFromDeck(card) {
    const isCardInDeck = deckList.some(
      (deckCard) => deckCard.name === card.name
    );
    if (isCardInDeck) {
      setDeckList(deckList.filter((deckCard) => deckCard.name !== card.name));
    } else {
      setDeckList([...deckList, card]);
    }
    //
    console.log("♠️ ♦️ ♣️ ♥️ ", deckList);
  }

  function selectAge(age) {
    setSelectedAge(age);
    console.log("selectedAge 🎁", selectedAge);
  }

  return (
    <>
      <Dash
        handleCivSelection={handleCivSelection}
        selectedCiv={selectedCiv}
        civilizations={civilizations}
        selectedCivData={selectedCivData}
        inventoryCardsByAge={inventoryCardsByAge}
        selectedAge={selectedAge}
        selectAge={selectAge}
        createNewDeck={createNewDeck}
        addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
        deckList={deckList}
        setDeckName={setDeckName}
      />
    </>
  );
}
export default App;
