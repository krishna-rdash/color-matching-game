import { useRef, useState } from "react";
import "../styles/gameBoard.css";
import { click } from "@testing-library/user-event/dist/click";
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
];
const GameBoard = () => {
  const [over, setOver] = useState<Boolean>(false);
  let { current: clickedElement } = useRef<HTMLDivElement | null>(null);
  const myMap: Map<number, number> = new Map();
  for (let i: number = 0; i < 6; i++) myMap.set(i, 0);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (over) return;
    const clickedTile = e.target as HTMLDivElement;
    if (!clickedElement) {
      clickedElement = clickedTile;
      return;
    }
    const firstTileClassList = clickedElement.classList;
    const secondTileClassList = clickedTile.classList;
    if (firstTileClassList.length <= 1 && secondTileClassList.length <= 1) {
      clickedElement = null;
      return;
    }
    if (firstTileClassList[1] !== secondTileClassList[1]) {
      clickedElement = null;
      return;
    }
    clickedTile.style.backgroundColor = "#ccc";
    clickedElement.style.backgroundColor = "#ccc";
    const colorIdx: number = Number(firstTileClassList[1]);
    firstTileClassList.remove(firstTileClassList[1]);
    secondTileClassList.remove(firstTileClassList[1]);
    const prevCount = myMap.get(colorIdx);
    if (!prevCount) return;
    myMap.set(colorIdx, prevCount - 2);
    clickedElement = null;
    let noPairCount: number = 0;
    for (let i: number = 0; i < 6; i++) {
      let colorCount = myMap.get(i);
      if (colorCount === undefined) return;
      if (colorCount <= 1) noPairCount++;
    }
    console.log(myMap);
    if (noPairCount === 6) setOver(true);
  };
  return (
    <>
      <div className="boardContainer">
        {colorIndex.map((item, idx) => {
          const prevCount: number = myMap.get(item)!;
          myMap.set(item, prevCount + 1);
          return (
            <div
              className={`tile ${item}`}
              key={idx}
              onClick={handleClick}
              style={{ backgroundColor: colors[item] }}
            ></div>
          );
        })}
      </div>
      {over && <div>Game Over</div>}
    </>
  );
};
export default GameBoard;
