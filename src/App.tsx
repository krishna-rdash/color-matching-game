import { useState } from "react";
import "./App.css";
import GameBoard from "./components/gameBoard";
import Timer from "./components/timer";
import { useAppSelector } from "./hooks";
function App() {
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  return (
    <div className="App">
      <Timer />
      <GameBoard />
      {gameStatus}
    </div>
  );
}

export default App;
