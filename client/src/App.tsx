import { Outlet } from "react-router-dom";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Outlet />
    </div>
  );
}

export default App;
