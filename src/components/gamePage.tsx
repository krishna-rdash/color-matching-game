import GameBoard from "./gameBoard";
import Timer from "./timer";
import { useAppSelector, useAppDispatch } from "../hooks/redux_hooks";
import { setStatus } from "../store/gameStatus/gameStatus";
import { useState } from "react";
const GamePage = () => {
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  const dispatch = useAppDispatch();
  const [key,setKey] = useState<number>(1);
  const reloadGame = () => {
    dispatch(setStatus("Running"));
    setKey(key=>key+1);
  };
  const userExists = localStorage.getItem("user");
  if(!userExists) return <div>Login First</div>
  return (
    <>
      <Timer key={key}/>
      <GameBoard key={-key}/>
      <div style={{ fontSize: "50px" }}>{gameStatus}</div>
      {gameStatus !== "Running" && (
        <button onClick={reloadGame}>Play Again</button>
      )}
    </>
  );
};

export default GamePage;
