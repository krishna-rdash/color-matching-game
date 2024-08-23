import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setStatus } from "../store/gameStatus/gameStatus";
import { initializeColorMap, isGameOver } from "../utility";
import "../styles/gameBoard.css";
const colorIndex = Array.from({ length: 16 }, () =>
  Math.floor(Math.random() * 6)
);
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
  const dispatch = useAppDispatch();
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  const [firstClickedTile, setFirstClickedTile] =
    useState<HTMLDivElement | null>(null);
  const { current: colorMap } = useRef<Map<number, number>>(new Map());
  initializeColorMap(colorMap);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (gameStatus !== "running") return;
    const clickedTile = e.target as HTMLDivElement;
    const tileNumber = Number(clickedTile.getAttribute("data-color-index"));
    const tileColorIdx = colorIndex[tileNumber];

    if (tileColorIdx === 6) return;
    if (!firstClickedTile) {
      setFirstClickedTile(clickedTile);
      return;
    }
    const secondClickedTile = clickedTile;
    if (firstClickedTile === secondClickedTile) {
      setFirstClickedTile(null);
      return;
    }
    const firstTileNumber = Number(
      firstClickedTile.getAttribute("data-color-index")
    );
    const secondTileNumber = tileNumber;
    const firstTileColorIdx = colorIndex[firstTileNumber];
    const secondTileColorIdx = tileColorIdx;
    if (firstTileColorIdx !== secondTileColorIdx) {
      setFirstClickedTile(null);
      return;
    }
    colorIndex[firstTileNumber] = 6;
    colorIndex[secondTileNumber] = 6;
    const prevCount = colorMap.get(tileColorIdx);
    if (!prevCount) return;
    colorMap.set(tileColorIdx, prevCount - 2);
    setFirstClickedTile(null);
    if (isGameOver(colorMap)) dispatch(setStatus("Won"));
  };
  return (
    <>
      <div className="boardContainer">
        {colorIndex.map((item, idx) => {
          const prevCount: number = colorMap.get(item)!;
          colorMap.set(item, prevCount + 1);
          return (
            <div
              className={`tile`}
              key={idx}
              onClick={handleClick}
              data-color-index={idx}
              style={{ backgroundColor: colors[item] }}
            ></div>
          );
        })}
      </div>
    </>
  );
};
export default GameBoard;
