import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux_hooks";
import { setStatus } from "../store/gameStatus/gameStatus";
const useTimer = (initialTime: number): number => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  const dispatch = useAppDispatch();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (gameStatus !== "Running") return;
    intervalRef.current = setInterval(() => {
      setTimeRemaining((time) => {
        if (time <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          dispatch(setStatus("Lost"));
          return 0;
        }
        return time - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [gameStatus, dispatch]);
  return timeRemaining;
};

export default useTimer;
