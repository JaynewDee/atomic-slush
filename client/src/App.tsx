import { Outlet } from "react-router-dom";
import { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Strip from "./components/Strip";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Strip />
      <Navbar />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
