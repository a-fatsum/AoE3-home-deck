import { useState, useMemo } from "react";
import CivSelector from "./components/CivSelector";
import Dash from "./components/Dash";
import data from "./data/allCards.json";
import SelectedDeckWindow from "./components/SelectedDeckWindow";

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
  const selectedCivData = selectedCiv ? data[selectedCiv] : null;

  function handleCivSelection(civ) {
    setSelectedCiv(civ);
  }

  const cardsByAge = useMemo(() => {
    if (!selectedCiv || !selectedAge) return [];
    return data[selectedCiv].cards.filter((card) => card.age === selectedAge);
  }, [data, selectedCiv, selectedAge]);

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
        cardsByAge={cardsByAge}
        selectedAge={selectedAge}
        selectAge={selectAge}
      />
    </>
  );
}
export default App;
