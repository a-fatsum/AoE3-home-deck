import Card from "./Card";

export default function SelectedDeckWindow({ OttomansData }) {
  return (
    <>
      <div className="wrapper">
        <div>
          {OttomansData.map((cardData) => {
            <Card
              name={cardData.name}
              description={cardData.description}
              image={cardData.image}
            />;
          })}
        </div>
      </div>
    </>
  );
}
