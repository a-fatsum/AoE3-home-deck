export default function Card({ name, description, image }) {
  return (
    <>
      <div className="wrapper border-1  ">
        <h5 className=""> {name}</h5>
        <div className="w-20 h-20 bg-gray-400">
          ♥️
          <div>
            <h5>Description</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
