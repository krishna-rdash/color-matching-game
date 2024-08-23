import { useEffect, useState } from "react";
import { useAppDispatch,useAppSelector } from "../hooks";
import { setStatus } from "../store/gameStatus/gameStatus";
const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(30);
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(gameStatus!=="running") return;
    if (timeRemaining === 0) {
      dispatch(setStatus("Lost"));
      return;
    }
    setTimeout(() => {
      setTimeRemaining((time) => time - 1);
    }, 1000);
  }, [timeRemaining]);
  return <div style={{ fontSize: "50px" }}>{timeRemaining}</div>;
};
export default Timer;
