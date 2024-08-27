import useTimer from "../hooks/useTimer";
const Timer = () => {
  const timeRemaining = useTimer(30);
  return <div style={{ fontSize: "50px" }}>{timeRemaining}</div>;
};
export default Timer;
