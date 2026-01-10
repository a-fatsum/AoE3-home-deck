export default function Button({ label, onClick }) {
  return (
    <>
      {/* <div className="wrapper m-2 capitalize "> */}
      <button onClick={onClick} className=" m-2 uppercase ">
        {label}
      </button>
      {/* </div> */}
    </>
  );
}
