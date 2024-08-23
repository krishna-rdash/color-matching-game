import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setStatus } from "../store/gameStatus/gameStatus";
import { initializeColorIdxArray, isGameOver } from "../utility";
import "../styles/gameBoard.css";
let colorIndex: number[];
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F1C40F",
  "#8E44AD",
  "#1ABC9C",
  "#ccc",
];
const isMarked = (tileNumber: number): boolean => colorIndex[tileNumber] === 6;
const checkColorParity = (
  firstTileNumber: number,
  secondTileNumber: number
): boolean => colorIndex[firstTileNumber] === colorIndex[secondTileNumber];

const markTiles = (firstTileNumber: number, secondTileNumber: number): void => {
  colorIndex[firstTileNumber] = 6;
  colorIndex[secondTileNumber] = 6;
};
const GameBoard = () => {
  const dispatch = useAppDispatch();
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  const [firstClickedTileNo, setFirstClickedTileNo] = useState<number | null>(
    null
  );
  colorIndex = useMemo(() => initializeColorIdxArray(), []);
  const handleClick = (tileNumber: number) => {
    if (gameStatus !== "running") return;
    if (firstClickedTileNo === null) {
      setFirstClickedTileNo(tileNumber);
      return;
    }
    const secondClickedTileNo = tileNumber;
    if (firstClickedTileNo === secondClickedTileNo || isMarked(tileNumber)) {
      setFirstClickedTileNo(null);
      return;
    }
    const isSameColorTiles: boolean = checkColorParity(
      firstClickedTileNo,
      secondClickedTileNo
    );
    if (isSameColorTiles) {
      markTiles(firstClickedTileNo, secondClickedTileNo);
    } else {
      setFirstClickedTileNo(null);
      return;
    }
    if (isGameOver(colorIndex)) dispatch(setStatus("Won"));
    setFirstClickedTileNo(null);
  };

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
