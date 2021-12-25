import PropTypes from "prop-types";
import pic from "../images/green-rect-filled.png";

const Card = ({ fileName }) => {
  // function importAll(r) {
  //   let images = {};
  //   r.keys().map((item, index) => {
  //     images[item.replace("./", "")] = r(item);
  //   });
  //   return images;
  // }

  // const images = importAll(
  //   require.context("../images", false, /\.(png|jpe?g|svg)$/)
  // );

  return (
    <div
      className="card"
      onClick={() => {
        console.log("clicked");
      }}
    >
      <img src={pic} alt="" height="15px" width="50px"></img>
      <img src={pic} alt="" height="15px" width="50px"></img>
      <img src={pic} alt="" height="15px" width="50px"></img>
    </div>
  );
};

Card.defaultProps = {
  fileName: "green-rect-filled.png",
};

Card.propTypes = {
  Color: PropTypes.number,
  Shape: PropTypes.number,
  Pattern: PropTypes.number,
  Number: PropTypes.number,
};

export default Card;
