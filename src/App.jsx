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
  const [selectedAge, setSelectedAge] = useState("");
  const selectedCivData = selectedCiv ? data[selectedCiv] : null;


  function handleCivSelection(civ) {
    setSelectedCiv(civ);    
  }

  function showCardsByAge(age){
    console.log("🌎")
  }

  function selectAge(age) {
    setSelectedAge(age)
  }
  // 
  return (
    <>
      <Dash 
      handleCivSelection={handleCivSelection}
      selectedCiv = {selectedCiv}
      civilizations ={civilizations}
      selectedCivData={selectedCivData}
      showCardsByAge={showCardsByAge}
      selectedAge ={selectedAge}
      />

    </>
  );
}

export default App;
