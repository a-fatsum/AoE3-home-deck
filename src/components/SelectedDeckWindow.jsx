import Card from "./Card";

export default function SelectedDeckWindow({ deckList }) {
  return (
    <>
      <div className="wrapper grid grid-cols-4 gap-4grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
        {deckList.map((deckData, index) => (
          <Card
            // key={deckData.id}
            key={index}
            name={deckData.name}
            description={deckData.description}
            image={deckData.image}
          />
        ))}
      </div>
    </>
  );
}
