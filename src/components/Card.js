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

export default Card;
