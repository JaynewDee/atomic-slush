import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Strip from "./components/Strip";
import Footer from "./components/Footer/Footer";

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
