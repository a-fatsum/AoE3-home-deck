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
    </div>
  );
}
