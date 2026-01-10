import Card from "./Card";

export default function SelectedDeckWindow({ cardsByAge }) {
  return (
    <>
      <div className="wrapper grid grid-cols-4 gap-4grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
        {/* {cardsByAge.map((cardData, index) => (
          <Card
            key={index}
            name={cardData.name}
            description={cardData.description}
            image={cardData.image}
          />
        ))} */}
      </div>
    </>
  );
}
