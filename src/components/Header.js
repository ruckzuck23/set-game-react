const Header = ({ remainCount, shuffleRemain, shuffle, isGameOver }) => {
  return (
    <div className="header" style={{ marginTop: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Set game</h2>
      <p style={{ display: "inline-block" }}>remain:</p>
      <span style={{ color: isGameOver ? "red" : "" }}> {remainCount}</span>
      <button
        style={{
          display: "inline-block",
          marginLeft: "50%",
          backgroundColor: !shuffleRemain ? "gray" : "",
        }}
        className="btn"
        disabled={!shuffleRemain}
        onClick={shuffle}
      >
        Shuffle: {shuffleRemain}
      </button>
    </div>
  );
};

export default Header;
