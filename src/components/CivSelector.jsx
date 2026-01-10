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
    <div>
      {/* Civilization Selection */}
      <div>
        <h3 className="text-[#c9a24d] text-sm tracking-widest uppercase mb-3">
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
      <div>
        <p>Age</p>
        {[1, 2, 3, 4].map((age) => (
          <label key={age} style={{ display: "block" }}>
            <input
              type="radio"
              name="age"
              value={age}
              checked={selectedAge === age}
              onChange={doTheThing}
            />
            {age === 1 && "I: Exploration Age"}
            {age === 2 && "II: Commerce Age"}
            {age === 3 && "III: Fortress Age"}
            {age === 4 && "V: Industrial Age"}
          </label>
        ))}
      </div>
    </div>
  );
}
