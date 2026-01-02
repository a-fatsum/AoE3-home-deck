import { useState } from "react";
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
  // -> create 
// 
  const [selectedCiv, setSelectedCiv] = useState("");

  const OttomansData = (()=>{
    const ottomanCards = data.Ottomans
    return ottomanCards;
  })();

  function handleCivSelection(civ) {
    // setSelectedCiv(e.target.value);
    setSelectedCiv(civ);
    console.log("Ottoman Cards", OttomansData[0].name)
  }

  //
  return (
    <>
      <Dash 
      handleCivSelection={handleCivSelection}
      OttomansData = {OttomansData}
      selectedCiv = {selectedCiv}
      civilizations ={civilizations}
      />

      {/* <CivSelector
        handleCivSelection={handleCivSelection}
        selectedCiv={selectedCiv}
        civilizations={civilizations}
      /> */}
    </>
  );
}

export default App;
