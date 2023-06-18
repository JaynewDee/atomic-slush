import { Outlet } from "react-router-dom";
import { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <Jumbotron /> */}
      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
