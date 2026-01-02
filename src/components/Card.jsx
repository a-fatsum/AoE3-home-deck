export default function Card({ name, description, image }) {
  return (
    <>
      <div className="wrapper flex flec-col">
        <h5 className="">{name}</h5>
        <div className="w-20 h-20 bg-gray-400">♥️</div>
        <div>
          <h5>Description</h5>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
