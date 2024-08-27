import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux_hooks";
import { setStatus } from "../store/gameStatus/gameStatus";

const useTimer = (initialTime: number) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const gameStatus = useAppSelector((state) => state.gameStatus.status);
  const dispatch = useAppDispatch();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimer = () => {
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
  };
  useEffect(() => {
    if (gameStatus !== "Running") return;
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  });

  const restartTimer = () => {
    setTimeRemaining(initialTime);
  };
  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const resumeTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startTimer();
  };

  return {
    timeRemaining,
    restartTimer,
    resumeTimer,
    stopTimer,
  };
};

export default useTimer;
