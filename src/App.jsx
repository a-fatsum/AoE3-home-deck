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
  const [allDecks, setAllDecks] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [deckName, setDeckName] = useState("");
  const [selectedDeckId, setSelectedDeckId] = useState("");

  const selectedCivData = selectedCiv ? data[selectedCiv] : null;

  function handleCivSelection(civ) {
    setSelectedCiv(civ);
  }

  // Inventory Cards selected by age and civ
  const inventoryCardsByAge = useMemo(() => {
    if (!selectedCiv || !selectedAge) return [];
    return data[selectedCiv].cards.filter((card) => card.age === selectedAge);
  }, [data, selectedCiv, selectedAge]);

  function createNewDeck(name) {
    const newDeck = {
      id: Date.now(),
      name,
      civ: selectedCiv,
      cards: [],
    };
    setAllDecks((prev) => [...prev, newDeck]);
    // setDeckList([]); // <------------ empty deck for new creation
    setDeckName(name);
    //
    console.log("🃏 New Deck Created:", newDeck);
    console.log("🙏 Deck list: ", allDecks);
    console.log("Selected Deck ▶▶▶ ", selectedDeck);
  }

  const selectedDeck = allDecks.find((deck) => deck.id === selectedDeckId);

  function addOrRemoveCardFromDeck(card) {
    setAllDecks((prevDecks) => {
      return prevDecks.map((deck) => {
        if (deck.id !== selectedDeckId) {
          return deck;
        }
        const cardAlreadyInDeck = deck.cards.some(
          (deckCard) => deckCard.name === card.name
        );
        let updatedCards = [];
        if (cardAlreadyInDeck) {
          // Remove card
          updatedCards = deck.cards.filter(
            (deckCard) => deckCard.name !== card.name
          );
        } else {
          // Add card
          updatedCards = [...deck.cards, card];
        }
        // Return a new deck object
        return {
          ...deck,
          cards: updatedCards,
        };
      });
    });
    console.log("selectedDeck =>>.>>", selectedDeck);
  }

  // ================================
  //
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
        allDecks={allDecks}
        setSelectedDeckId={setSelectedDeckId}
        selectedDeck={selectedDeck}
      />
    </>
  );
}
export default App;
