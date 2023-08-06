import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header/Header";
import Welcome from "./pages/Welcome";

function App() {
  const [activeView, setActiveView] = useState("");

  const viewState = { activeView, setActiveView };

  return (
    <div className="App">
      <Header {...viewState} />
      <Navbar {...viewState} />
      <main className="page-container">
        {activeView ? <Outlet /> : <Welcome setActiveView={setActiveView} />}
      </main>
    </div>
  );
}

export default App;
