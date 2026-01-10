export default function Card({
  name,
  description,
  image,
  addOrRemoveCardFromDeck,
}) {
  return (
    <div
      className="w-30 bg-[#2b1d12] border-2 border-[#c9a24d] rounded-md shadow-lg overflow-hidden
                    hover:scale-[1.03] hover:shadow-2xl transition-all duration-200"
      onClick={addOrRemoveCardFromDeck}
    >
      {/* Image Frame */}
      <div className="h-24 bg-[#1a120b] border-b-2 border-[#c9a24d] flex items-center justify-center p-3">
        {image ? (
          <img
            src={`src/${image}`}
            alt={name}
            className="h-full w-full object-contain image-pixelated"
          />
        ) : (
          <span className="text-[#c9a24d] text-sm tracking-wide">
            {/* Change me later ⚠️ */}
            No Illustration
          </span>
        )}
      </div>

      {/* Text Content */}
      <div className="p-2 bg-gradient-to-b from-[#3a2617] to-[#24160d]">
        {/* Card Name */}
        <h5 className="text-[#f5e6b8] text-xs font-semibold tracking-wide   border-[#c9a24d]  ">
          {name}
        </h5>

        {/* Description */}
        <p className="text-[#e3d3a1] text-sm leading-snug">{description}</p>
      </div>
    </div>
  );
}
