import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { MouseEventHandler, useState, ChangeEventHandler } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [contactNo, setContactNo] = useState<string>("");
  const handleLogin: MouseEventHandler<HTMLButtonElement> = () => {
    const loginStatus = localStorage.getItem(contactNo);
    if(!loginStatus) {
      localStorage.setItem("user",contactNo);
    }
    navigate("gamePage");
  };
  const isValidNumber = contactNo.length === 10;
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setContactNo(event.target.value);
  };
  return (
    <div className="authContainer">
      <input
        placeholder="Your Number"
        className="numberInput"
        type="number"
        onChange={handleChange}
      ></input>
      <button
        className="LoginButton"
        onClick={handleLogin}
        disabled={!isValidNumber}
      >
        Log In & Play
      </button>
    </div>
  );
};
export default Login;
