import GameBoard from "./gameBoard";
import { useAppSelector, useAppDispatch } from "../hooks/redux_hooks";
import { setStatus } from "../store/gameStatus/gameStatus";
import { reInitializeColorIdx } from "../store/gameVariable/gameVariable";
import useTimer from "../hooks/useTimer";
const GamePage = () => {
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  const dispatch = useAppDispatch();
  const reloadGame = () => {
    dispatch(setStatus("Running"));
    dispatch(reInitializeColorIdx());
    restartTimer();
  };
  const { restartTimer, timeRemaining, resumeTimer, stopTimer } = useTimer(30);
  const userExists = localStorage.getItem("user");
  if (!userExists) return <div>Login First</div>;
  return (
    <>
      <div style={{ fontSize: "50px" }}>{timeRemaining}</div>;
      <GameBoard />
      <div style={{ fontSize: "50px" }}>{gameStatus}</div>
      {gameStatus !== "Running" && (
        <button onClick={reloadGame}>Play Again</button>
      )}
      <button onClick={() => stopTimer()}>stop</button>
      <button onClick={() => resumeTimer()}>resume</button>
    </>
  );
};

export default GamePage;
