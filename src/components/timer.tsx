import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setStatus } from "../store/gameStatus/gameStatus";
const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(15);
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  const dispatch = useAppDispatch();
  let intervalRef = useRef<NodeJS.Timeout | null>();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeRemaining((time) => time - 1);
    }, 1000);
  }, []);
  if (gameStatus !== "running" || timeRemaining === 0) {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeRemaining === 0) dispatch(setStatus("LOST"));
  }

  return <div style={{ fontSize: "50px" }}>{timeRemaining}</div>;
};
export default Timer;
