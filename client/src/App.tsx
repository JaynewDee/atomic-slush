import { useState } from 'react';
import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [activeView, setActiveView] = useState("");

  return (
    <div className="App">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
