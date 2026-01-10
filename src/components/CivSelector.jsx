// export default function CivSelector({
//   handleCivSelection,
//   selectedCiv,
//   civilizations,
//   cardsByAge,
//   selectAge,
// }) {
//   function doTheThing(e) {
//     selectAge(Number(e.target.value));
//   }

//   //
//   return (
//     <div className=" ">
//       <h4>Civilisation Selected: {selectedCiv}</h4>

//       <div>
//         <label htmlFor="civ-select">Civilisation:</label>
//         <select
//           id="civ-select"
//           value={selectedCiv}
//           onChange={(e) => handleCivSelection(e.target.value)}
//         >
//           {civilizations.map((civ) => (
//             <option key={civ} value={civ}>
//               {civ}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Age selections */}

//       <div>
//         <h4>Select Age:</h4>
//         <select onChange={(e) => doTheThing(e)} defaultValue="">
//           <option value="" disabled>
//             -- Select an Age --
//           </option>
//           <option value={1}>I: Exploration Age</option>
//           <option value={2}>II: Commerce Age</option>
//           <option value={3}>III: Fortress Age</option>
//           <option value={4}>V: Industrial Age</option>
//         </select>
//       </div>
//     </div>
//   );
// }
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
