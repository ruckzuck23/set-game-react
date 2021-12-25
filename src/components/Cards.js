import Card from "./Card";

const Cards = ({ cards, onClick }) => {
  return (
    <div className="Board">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={onClick}></Card>
      ))}
    </div>
  );
};

export default Cards;
