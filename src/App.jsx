import { useState, useMemo } from "react";
import CivSelector from "./components/CivSelector";
import Dash from "./components/Dash";
// import data from "./data/allCards.json" with { type: "json" };
import data from "./data/allCards.json";
import SelectedDeckWindow from "./components/SelectedDeckWindow";
//
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
  // TASKS:
  // ☑️ Render the ottoman cards when Ottomans are selected.. Just do that..
  // ➠ Render celected civs cards
  const [selectedCiv, setSelectedCiv] = useState(civilizations[0]);
  const [selectedAge, setSelectedAge] = useState("");
  const selectedCivData = selectedCiv ? data[selectedCiv] : null;
  function handleCivSelection(civ) {
    setSelectedCiv(civ);
  }
  function showCardsByAge() {
    if (!selectedCiv) return [];
    // const cardsByAge = data[selectedCiv].cards.filter(
    //   (card) => card.selectedAge === selectedAge
    // );
    // return cardsByAge;
    return data[selectedCiv].cards.filter(
      (card) => card.selectedAge === selectedAge
    );
  }
  function selectAge(age) {
    setSelectedAge(age);
    console.log("selectedAge 🎁", selectedAge);
  }
  //
  return (
    <>
      {/* <div className=""> */}
      <Dash
        handleCivSelection={handleCivSelection}
        selectedCiv={selectedCiv}
        civilizations={civilizations}
        selectedCivData={selectedCivData}
        showCardsByAge={showCardsByAge}
        selectedAge={selectedAge}
        selectAge={selectAge}
      />
      {/* </div> */}
    </>
  );
}
export default App;
