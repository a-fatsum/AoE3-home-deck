export default function CivSelector({ selectedAge, selectAge }) {
  function doTheThing(e) {
    selectAge(Number(e.target.value));
  }

  return (
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
  );
}
