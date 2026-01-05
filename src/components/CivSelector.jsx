export default function CivSelector({
  handleCivSelection,
  selectedCiv,
  civilizations,
}) {
  return (
    <div className=" ">
      <h4>Civilisation Selected: {selectedCiv}</h4>

      <div>
        <label htmlFor="civ-select">Civilisation:</label>
        <select
          id="civ-select"
          value={selectedCiv}
          onChange={(e) => handleCivSelection(e.target.value)}
        >
          {civilizations.map((civ) => (
            <option key={civ} value={civ}>
              {civ}
            </option>
          ))}
        </select>
      </div>

      {/* Age selections */}

      <div>
        <input type="radio" id="age1" name="age" value="Age1" />
        <label htmlFor="age1"> I: Exploration Age</label>
        <br />
        <input type="radio" id="age2" name="age" value="Age2" />
        <label htmlFor="age2"> II: Commerce Age</label>
        <br />
        <input type="radio" id="age3" name="age" value="Age3" />
        <label htmlFor="age3">III: Fortress Age</label>
        <br />
        <input type="radio" id="age4" name="age" value="Age4" />
        <label htmlFor="age4"> V: Industerial Age</label>
        <br />
      </div>
    </div>
  );
}
