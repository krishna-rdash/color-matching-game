import "../styles/gameBoard.css";
import useGame from "../hooks/useGame";
import { colors } from "../type/variables";
const GameBoard = () => {
  const sqSize = 6;
  const [colorIndex, handleClick] = useGame(sqSize);
  return (
    <>
      <div className="boardContainer" style={{ width: `${sqSize * 110}px` }}>
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
