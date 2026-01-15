export default function Deck({ deckName, numberOfCards, isSelected, onClick }) {
  //
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-between
        p-3 rounded-md font-serif
        cursor-pointer
        transition-all duration-200
        hover:bg-[#593d28]
        font-['Cinzel']
        ${isSelected ? "bg-[#4b341f]" : ""}
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
