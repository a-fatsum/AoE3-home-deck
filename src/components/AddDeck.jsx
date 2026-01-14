// import { useState } from "react";
import Button from "./Button";

export default function AddDeck({
  createNewDeck,
  handleClose,
  deckName,
  setDeckName,
}) {
  // const [localDeckName, setLocalDeckName] = useState("");

  function handleSubmit() {
    // if (!localDeckName.trim()) return;
    if (!deckName.trim()) return;
    createNewDeck(deckName);
    setDeckName("");
    handleClose();
  }

  return (
    <div className="w-80 p-4 rounded-md border-2 border-[#c9a14a] bg-gradient-to-b from-[#2a1d12] to-[#1a120b]">
      <input
        type="text"
        placeholder="Enter Deck Name..."
        value={deckName}
        onChange={(e) => setDeckName(e.target.value)}
        className="
          w-full
          px-3 py-2
          rounded
          font-serif text-base
          text-[#f5e6c8]

          bg-gradient-to-b from-[#3b2a17] to-[#2a1d12]
          border border-[#b89645]

          placeholder-[#cbb68a]/70

          shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_0_6px_rgba(201,161,74,0.2)]

          outline-none
          transition-all duration-200

          focus:border-[#e6c76a]
          focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.9),0_0_10px_rgba(230,199,106,0.6)]
        "
      />

      <Button label="Create Deck" onClick={handleSubmit} />
    </div>
  );
}
