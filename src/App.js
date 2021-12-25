import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 0,
      fileName: "green-rect-filled.svg",
      color: "red",
      shape: "rect",
      pattern: "filled",
      number: 3,
      isSelected: false,
    },
    { id: 1, fileName: "red-wave-stripe.svg", number: 2, isSelected: false },
    { id: 2, fileName: "green-rect-filled.svg", number: 1, isSelected: false },
    { id: 3, fileName: "blue-rect-filled.svg", number: 2, isSelected: false },
    { id: 4, fileName: "blue-wave-filled.svg", number: 2, isSelected: false },
    { id: 5, fileName: "green-wave-stripe.svg", number: 2, isSelected: false },
    { id: 6, fileName: "red-rect-emp.svg", number: 1, isSelected: false },
    { id: 7, fileName: "red-romb-stripe.svg", number: 2, isSelected: false },
    { id: 8, fileName: "red-rect-stripe.svg", number: 3, isSelected: false },
    { id: 9, fileName: "blue-rect-emp.svg", number: 2, isSelected: false },
    { id: 10, fileName: "green-rect-emp.svg", number: 2, isSelected: false },
    { id: 11, fileName: "green-romb-filled.svg", number: 3, isSelected: false },
  ]);
  useEffect(() => {
    // Update the document title using the browser API
    // if 3 cards are selected, submit an answer
    const selected = cards.filter((card) => card.isSelected);
    console.log("selected cards", selected);
  }, [cards]);

  const selectCard = (id) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isSelected: !card.isSelected } : card
      )
    );
  };

  return (
    <div>
      <Header />
      <Cards cards={cards} onClick={selectCard} />
    </div>
  );
};

export default App;
