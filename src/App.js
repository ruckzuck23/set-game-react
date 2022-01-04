import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  // create all 3**4 = 81 patterns of cards
  function generateCards() {
    const card_properties = {
      color: ["red", "blue", "green"],
      shape: ["rect", "romb", "wave"],
      pattern: ["emp", "filled", "stripe"],
    };

    const all_cards = [];
    let index = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          for (let l = 1; l < 4; l++) {
            const fileName = `${card_properties.color[i]}-${card_properties.shape[j]}-${card_properties.pattern[k]}.svg`;
            all_cards.push({
              id: index,
              color: i,
              shape: j,
              pattern: k,
              number: l,
              fileName: fileName,
              isSelected: false,
            });
            index += 1;
          }
        }
      }
    }
    //TODO revert change
    return all_cards;
  }

  const [cardsInDeck, setCardsInDeck] = useState(() => generateCards());

  const [cards, setCards] = useState([]);

  // const [selectedCards, setSelectedCards] = useState([]);

  const [shuffleRemain, setShuffleRemain] = useState(3);

  const [isGameOver, setIsGameOver] = useState(false);

  function checkIfValidSet(selected) {
    const card_properties = ["color", "shape", "pattern", "number"];
    const result = {};
    card_properties.forEach((property) => {
      result[property] = new Set();
    });
    selected.forEach((card) => {
      result["color"].add(card.color);
      result["shape"].add(card.shape);
      result["pattern"].add(card.pattern);
      result["number"].add(card.number);
    });
    const legal = new Set([1, 3]);
    if (
      legal.has(result["color"].size) &&
      legal.has(result["shape"].size) &&
      legal.has(result["pattern"].size) &&
      legal.has(result["number"].size)
    ) {
      return true;
    } else {
      return false;
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  function updateCardsInDeck(cardsInDeck, newCards) {
    const index = new Set();
    newCards.forEach((card) => {
      index.add(card.id);
    });
    setCardsInDeck(cardsInDeck.filter((card) => !index.has(card.id)));
  }

  function refillCards(cards, selected, newCards) {
    setCards(
      cards
        .map((card) => (selected.includes(card) ? newCards.pop() : card))
        .filter((x) => x)
    );
  }

  useEffect(() => {
    if (!cards.length) {
      // emptied the cards!
      console.log("Game Clear!!");
    } else if (!(shuffleRemain || isSolutionPresent(cards))) {
      // If you are stuck, game over
      setIsGameOver(true);
      setIsModalOpen(true);
      console.log("Game Over");
    }

    function emptySelected() {
      setCards(
        cards.map((card) => {
          return { ...card, isSelected: false };
        })
      );
    }

    const selected = cards.filter((card) => card.isSelected);

    if (selected.length > 2) {
      if (checkIfValidSet(selected)) {
        const newCards = pickNewCards(cardsInDeck, 3);
        updateCardsInDeck(cardsInDeck, newCards);
        refillCards(cards, selected, newCards);
      } else {
        alert("not a valid set");
        emptySelected();
      }
    }
  }, [cards]);

  function isSolutionPresent() {
    for (let i = 0; i < cards.length; i++) {
      for (let j = i + 1; j < cards.length; j++) {
        for (let k = j + 1; k < cards.length; k++) {
          if (checkIfValidSet(Array.from([i, j, k].map((x) => cards[x])))) {
            return true;
          }
        }
      }
    }
    return false;
  }

  useEffect(() => {
    console.log(isSolutionPresent(cards));
  }, [cardsInDeck]);

  const toggleCardSelect = (id) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isSelected: !card.isSelected } : card
      )
    );
  };

  function pickNewCards(cardsInDeck, cards_num) {
    // if there is not enough cards, return every card remaining
    if (cardsInDeck.length < cards_num) {
      return cardsInDeck;
    }
    // get 3 unique random integers from range(with size greater than 3)
    const max = cardsInDeck.length; // expected value: 3 - 81
    const result = new Set();
    while (result.size < cards_num) {
      result.add(cardsInDeck[Math.floor(Math.random() * max)]);
    }
    return Array.from(result);
  }

  // refill the empty board at the start
  useEffect(() => {
    const newCards = pickNewCards(cardsInDeck, 12);
    console.log("newCards", newCards);
    setCards(newCards);
    // updating cardsInDeck
    updateCardsInDeck(cardsInDeck, newCards);
  }, []);

  function shuffleClick() {
    if (shuffleRemain > 0) {
      const newCards = pickNewCards([...cardsInDeck, ...cards], cards.length);
      console.log("shuffled", newCards);
      updateCardsInDeck([...cardsInDeck, ...cards], newCards);
      setCards(newCards);

      setShuffleRemain(shuffleRemain - 1);
    } else {
      console.log("no more shuffles remainnig");
    }
  }

  return (
    <div>
      <Header
        remainCount={[...cardsInDeck, ...cards].length}
        shuffleRemain={shuffleRemain}
        shuffle={shuffleClick}
        isGameOver={isGameOver}
      />
      <Cards cards={cards} onClick={toggleCardSelect} />
      <Footer />
    </div>
  );
};

export default App;
