const Modal = ({ isOpen, isGameOver, onClose }) => {
  const MESSAGE = {
    GAME_OVER: "Game Over :(",
    GAME_CLEAR: "Game Clear!!",
  };
  const MODAL_STYLES = {
    borderRadius: "10px",
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "30px",
    zIndex: 1000,
  };

  const OVERLAY_STYLE = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  };

  if (!isOpen) return null;
  return (
    <div>
      <div style={OVERLAY_STYLE}></div>
      <div style={MODAL_STYLES}>
        <h2 style={{ color: "white" }}>
          {isGameOver ? MESSAGE.GAME_OVER : MESSAGE.GAME_CLEAR}
        </h2>
      </div>
    </div>
  );
};

export default Modal;
