import PropTypes from "prop-types";

const Card = ({ fileName, number }) => {
  // dynamically importing images
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  const onClick = () => {
    console.log({ fileName });
  };

  return (
    <div className="card" onClick={onClick}>
      {[...Array(number)].map((e, i) => (
        <img className="card-mark" src={images[fileName].default} alt="" />
      ))}
    </div>
  );
};

Card.defaultProps = {
  fileName: "green-rect-filled.png",
};

Card.propTypes = {
  color: PropTypes.number,
  shape: PropTypes.number,
  pattern: PropTypes.number,
  number: PropTypes.number,
  fileName: PropTypes.string,
};

export default Card;
