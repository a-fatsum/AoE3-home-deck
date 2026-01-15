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
  const [allDecks, setAllDecks] = useState([]);
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
    setDeckName(name);
  }

  const selectedDeck = allDecks.find((deck) => deck.id === selectedDeckId);

  function addOrRemoveCardFromDeck(card) {
    if (!selectedDeckId) {
      alert("Please select a deck first.");
      return;
    }
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
          // Add card logic
          if (deck.cards.length >= 25) {
            alert("Deck limit reached (25 cards).");
            // console.log("Deck limit reached (25 cards).");
            return deck;
          }

          // --------------------------------------------------------------------------------- Keep old code for reference later
          // const age1cardsLessThan10 =
          //   deck.cards.filter((c) => c.age === 1).length < 10;
          // const age2cardsLessThan10 =
          //   deck.cards.filter((c) => c.age === 2).length < 10;
          // const age3cardsLessThan10 =
          //   deck.cards.filter((c) => c.age === 3).length < 10;
          // const age4cardsLessThan10 =
          //   deck.cards.filter((c) => c.age === 4).length < 10;

          // if (
          //   (card.age === 1 && !age1cardsLessThan10) ||
          //   (card.age === 2 && !age2cardsLessThan10) ||
          //   (card.age === 3 && !age3cardsLessThan10) ||
          //   (card.age === 4 && !age4cardsLessThan10)
          // ) {
          //   alert("Cannot add more cards of this age (max 10).");
          //   console.log("Cannot add more cards of this age (max 10).");
          //   return deck;
          // }

          // note to self: refactor above code to be dynamic based on card.age
          const cardsOfSameAge = deck.cards.filter((c) => c.age === card.age);

          const ageCardsLessThan10 = cardsOfSameAge.length < 10; // <------------------ Cards count check

          if (!ageCardsLessThan10) {
            alert("Cannot add more cards of this age (max 10).");
            // console.log("Cannot add more cards of this age (max 10).");
            return deck;
          }

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
  }

  // Handle Delete Deck

  function deleteDeck(deckId) {
    if (!selectedDeckId) {
      alert("Please select a deck first.");
      return;
    }
    const isSelected = selectedDeckId === deckId;
    const isNotEmpty = selectedDeck?.cards?.length > 0;
    if (isSelected && isNotEmpty) {
      const confirmed = window.confirm(
        "Deck is not empty. Are you sure you want to delete?"
      );
      if (!confirmed) return;
    }
    setAllDecks((prevDecks) => prevDecks.filter((deck) => deck.id !== deckId));
    if (deckId === selectedDeckId) {
      setSelectedDeckId(null);
    }
  }

  // Handle Copy Deck
  function copyDeck(deckId) {
    const deckToCopy = allDecks.find((deck) => deck.id === deckId);
    if (deckToCopy) {
      const copiedDeck = {
        ...deckToCopy,
        id: Date.now(),
        name: deckToCopy.name + " (Copy)",
      };
      setAllDecks((prevDecks) => [...prevDecks, copiedDeck]);
      setSelectedDeckId(copiedDeck.id);
      console.log("Deck copied:", copiedDeck);
    }
  }

  // ================================
  //
  function selectAge(age) {
    setSelectedAge(age);
    // console.log("selectedAge 🎁", selectedAge);
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
        deckName={deckName}
        addOrRemoveCardFromDeck={addOrRemoveCardFromDeck}
        setDeckName={setDeckName}
        allDecks={allDecks}
        setSelectedDeckId={setSelectedDeckId}
        selectedDeck={selectedDeck}
        selectedDeckId={selectedDeckId}
        deleteDeck={deleteDeck}
        copyDeck={copyDeck}
        setAllDecks={setAllDecks}
      />
    </>
  );
}

export default App;
