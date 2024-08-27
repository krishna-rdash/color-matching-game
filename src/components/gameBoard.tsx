import "../styles/gameBoard.css";
import useGame from "../hooks/useGame";
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F1C40F",
  "#8E44AD",
  "#1ABC9C",
  "#ccc",
];

const GameBoard = () => {
  const [colorIndex, handleClick] = useGame();
  return (
    <>
      <div className="boardContainer">
        {colorIndex.map((item, idx) => {
          return (
            <div
              className={`tile`}
              key={idx}
              onClick={() => handleClick(idx)}
              style={{ backgroundColor: colors[item] }}
            ></div>
          );
        })}
      </div>
    </>
  );
};
export default GameBoard;
