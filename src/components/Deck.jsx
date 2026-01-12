import { useState } from "react";

export default function Deck({ deckName, numberOfCards, onClick }) {
  //   const [selected, setSelected] = useState(false);
  //  ${selected ? "bg-[#4b341f]" : ""} <-------------- Add this stytle later
  return (
    <div
      //   onClick={() => setSelected(true)}
      onClick={onClick}
      className={`
        flex items-center justify-between
        p-3 rounded-md font-serif
        cursor-pointer
        transition-all duration-200s
        hover:bg-[#3a2617]
      `}
    >
      <h4 className="tracking-wide">{deckName}</h4>

      <div className="flex items-center gap-2">
        <img
          className="h-8 w-12"
          src="src/assets/images/deck-card-two.svg"
          alt="Deck"
        />
        <span className="text-amber-200 font-semibold">{numberOfCards}</span>
      </div>
    </div>
  );
}
