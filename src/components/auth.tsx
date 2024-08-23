import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { MouseEventHandler, useRef } from "react";
const Login = () => {
  const navigate = useNavigate();
  const contactNo = useRef<HTMLInputElement>(null);
  const handleLogin: MouseEventHandler<HTMLButtonElement> = () => {
    const contactNumber = contactNo.current;
    if (!contactNumber || !contactNumber.value) return;
    navigate("gamePage");
  };
  return (
    <div className="authContainer">
      <input
        placeholder="Your Number"
        className="numberInput"
        type="number"
        ref={contactNo}
      ></input>
      <button className="LoginButton" onClick={handleLogin}>
        Log In & Play
      </button>
    </div>
  );
};
export default Login;
