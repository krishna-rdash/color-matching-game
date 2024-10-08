import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux_hooks";
import { setStatus } from "../store/gameStatus/gameStatus";
import { isGameOver } from "../utility";
const useGame = (sqSize: number): [number[], (tileNumber: number) => void] => {
  const dispatch = useAppDispatch();
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  const fullColorIdxArray = useAppSelector(
    (state) => state.gameVariable.colorIndexArray
  );
  const [firstClickedTileNo, setFirstClickedTileNo] = useState<number | null>(
    null
  );
  const colorIndex = useMemo(
    () => fullColorIdxArray.slice(0, sqSize * sqSize),
    [sqSize, fullColorIdxArray]
  );
  const isMarked = (tileNumber: number): boolean =>
    colorIndex[tileNumber] === 6;
  const checkColorParity = (
    firstTileNumber: number,
    secondTileNumber: number
  ): boolean => colorIndex[firstTileNumber] === colorIndex[secondTileNumber];

  const markTiles = (
    firstTileNumber: number,
    secondTileNumber: number
  ): void => {
    colorIndex[firstTileNumber] = 6;
    colorIndex[secondTileNumber] = 6;
  };
  return [
    colorIndex,
    function handleClick(tileNumber: number) {
      if (gameStatus !== "Running") return;
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
    },
  ];
};
export default useGame;
