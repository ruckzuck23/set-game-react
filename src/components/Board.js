import { useState } from "react";
import Card from "./Card";

const cards = [
  { id: 0, fileName: "green-rect-filled.svg", number: 3 },
  { id: 1, fileName: "red-wave-stripe.svg", number: 2 },
  { id: 2, fileName: "green-rect-filled.svg", number: 1 },
  { id: 3, fileName: "blue-rect-filled.svg", number: 2 },
  { id: 4, fileName: "blue-wave-filled.svg", number: 2 },
  { id: 5, fileName: "green-wave-stripe.svg", number: 2 },
  { id: 6, fileName: "red-rect-emp.svg", number: 1 },
  { id: 7, fileName: "red-romb-emp.svg", number: 2 },
  { id: 8, fileName: "red-rect-stripe.svg", number: 3 },
  { id: 9, fileName: "blue-rect-emp.svg", number: 2 },
  { id: 10, fileName: "green-rect-emp.svg", number: 2 },
  { id: 11, fileName: "green-romb-filled.svg", number: 3 },
];

const Board = () => {
  return (
    <div className="Board">
      {cards.map((card) => (
        <Card id={card.id} fileName={card.fileName} number={card.number}></Card>
      ))}
    </div>
  );
};

export default Board;
