import { useState } from "react";
// import PropTypes from "prop-types";

const Card = ({ card, onClick }) => {
  // dynamically importing images
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }

  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div
      className={card.isSelected ? "card card-selected" : "card"}
      onClick={() => {
        onClick(card.id);
      }}
    >
      {[...Array(card.number)].map((e, i) => (
        <img
          key={i}
          className="card-mark"
          src={images[card.fileName].default}
          alt=""
        />
      ))}
    </div>
  );
};

// Card.propTypes = {
//   color: PropTypes.number,
//   shape: PropTypes.number,
//   pattern: PropTypes.number,
//   number: PropTypes.number,
//   fileName: PropTypes.string,
// };

export default Card;
