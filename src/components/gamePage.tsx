import GameBoard from "./gameBoard";
import Timer from "./timer";
import { useAppSelector } from "../hooks";
const GamePage = () => {
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  const reloadGame = () => {
    window.location.reload();
  };
  return (
    <>
      <Timer />
      <GameBoard />
      <div style={{ fontSize: "50px" }}>{gameStatus}</div>
      {gameStatus !== "running" && (
        <button onClick={reloadGame}>Play Again</button>
      )}
    </>
  );
};

export default GamePage;
