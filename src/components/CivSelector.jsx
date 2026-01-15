export default function CivSelector({
  selectedAge,
  selectAge,
  handleCivSelection,
  selectedCiv,
  civilizations,
}) {
  function doTheThing(e) {
    selectAge(Number(e.target.value));
  }

  return (
    <div className=" font-['Cinzel']">
      {/* Civilization Selection */}
      <div>
        <h3 className="text-[#c9a24d] text-base tracking-widest uppercase mb-3">
          Civilizations
        </h3>

        <select
          value={selectedCiv}
          onChange={(e) => handleCivSelection(e.target.value)}
          className="w-full p-3 bg-[#3a2617] text-[#f5e6b8] border-2 border-[#c9a24d] rounded-md shadow-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#c9a24d] hover:bg-[#4a321a] transition-colors"
        >
          {civilizations.map((civ) => (
            <option
              key={civ}
              value={civ}
              className="bg-[#3a2617] text-[#f5e6b8]"
            >
              {civ}
            </option>
          ))}
        </select>
      </div>
      {/* Age Selection */}
      <div className=" border border-[#7a5a2e] bg-[#1e140c] rounded-lg mt-4">
        <p className="border-b border-[#7a5a2e]/60 px-4 py-2   uppercase tracking-widest text-[#c9a24d] text-[#c9a24d] text-base  uppercase ">
          Age
        </p>

        {[1, 2, 3, 4].map((age) => (
          <label
            key={age}
            className={`flex cursor-pointer items-center gap-4 px-4 py-3 border-b border-[#7a5a2e]/40
        ${
          selectedAge === age
            ? "bg-[#3a2a17] text-[#f1d27a]"
            : "text-[#c8b08a] hover:bg-[#2f2114]"
        }
      `}
          >
            <input
              type="radio"
              name="age"
              value={age}
              checked={selectedAge === age}
              onChange={doTheThing}
              className="hidden"
            />

            <div
              className={`flex h-7 w-7 items-center justify-center border text-sm font-semibold
          ${selectedAge === age ? "border-[#f1d27a]" : "border-[#7a5a2e]"}
        `}
            >
              {age === 1 && "I"}
              {age === 2 && "II"}
              {age === 3 && "III"}
              {age === 4 && "IV"}
            </div>

            <span className="text-sm">
              {age === 1 && "Exploration Age"}
              {age === 2 && "Commerce Age"}
              {age === 3 && "Fortress Age"}
              {age === 4 && "Industrial Age"}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
