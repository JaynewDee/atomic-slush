import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header/Header";

function App() {
  const [activeView, setActiveView] = useState("");

  const viewState = { activeView, setActiveView };

  return (
    <div className="App">
      <Header {...viewState} />
      <Navbar {...viewState} />
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
