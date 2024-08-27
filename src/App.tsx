import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "./components/gamePage";
import Login from "./components/auth";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="gamePage" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
