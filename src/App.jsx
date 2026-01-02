import { useState } from "react";
import CivSelector from "./components/CivSelector";
import Dash from "./components/Dash";

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

  const [selectedCiv, setSelectedCiv] = useState("");

  function handleCivSelection(civ) {
    // setSelectedCiv(e.target.value);
    setSelectedCiv(civ);
  }

  //
  return (
    <>
      <Dash />

      {/* <CivSelector
        handleCivSelection={handleCivSelection}
        selectedCiv={selectedCiv}
        civilizations={civilizations}
      /> */}
    </>
  );
}

export default App;
