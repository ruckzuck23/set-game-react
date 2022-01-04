const Header = ({ remainCount, shuffleRemain, shuffle, isGameOver }) => {
  return (
    <div className="header">
      <h2 style={{ textAlign: "center" }}>Set game</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div>
          <p style={{ display: "inline-block" }}>remain:</p>
          <span
            style={{ display: "inline-block", color: isGameOver ? "red" : "" }}
          >
            {" "}
            {remainCount}
          </span>
        </div>
        <button
          style={{
            backgroundColor: !shuffleRemain ? "gray" : "",
          }}
          className="btn"
          disabled={!shuffleRemain}
          onClick={shuffle}
        >
          Shuffle: {shuffleRemain}
        </button>
      </div>
    </div>
  );
};

export default Header;
