import GameBoard from "./gameBoard";
import Timer from "./timer";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setStatus } from "../store/gameStatus/gameStatus";
const GamePage = () => {
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  const dispatch = useAppDispatch();
  const reloadGame = () => {
    dispatch(setStatus("Running"));
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
