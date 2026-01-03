import Card from "./Card";

export default function SelectedDeckWindow({ OttomansData }) {
  return (
    <>
      <div className="wrapper grid grid-cols-4 gap-4">
        {OttomansData.map((cardData, index) => (
          <Card
            key={index}
            name={cardData.name}
            description={cardData.description}
            image={cardData.image}
          />
        ))}
      </div>
    </>
  );
}
