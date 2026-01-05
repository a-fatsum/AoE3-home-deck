import { useState, useMemo } from "react";
import CivSelector from "./components/CivSelector";
import Dash from "./components/Dash";
import data from "./data/allCards.json" with { type: "json" };
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

  const [selectedCiv, setSelectedCiv] = useState("");

  const selectedCivData = selectedCiv ? data[selectedCiv] : null;


  function handleCivSelection(civ) {
    setSelectedCiv(civ);    
  }

  //
  return (
    <>
      <Dash 
      handleCivSelection={handleCivSelection}
      selectedCivAvailableCards = {selectedCivData}
      selectedCiv = {selectedCiv}
      civilizations ={civilizations}
      selectedCivData={selectedCivData}
      />

    </>
  );
}

export default App;
