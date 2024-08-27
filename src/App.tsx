import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "./components/gamePage";
import Login from "./components/auth";
const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "gamePage", element: <GamePage /> },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
