import { useState } from 'react';
import { Link } from "react-router-dom";
import logoImg from '/asset-1.png'

export default function Navbar() {
  const [activeView, setActiveView] = useState("")
  return (
    <div className="navbar">
      <img src={logoImg} className="logo-img"></img>
      <div className="nav-links-container">
        {/* <Link to={"/"}>Home</Link> */}
        <Link to={"/recipes"} style={activeView === "recipes" ? { color: "#5f4b9f" } : {}} onClick={() => setActiveView("recipes")}>Recipes</Link>
        {/* <Link to={"/services"}>Services</Link> */}
        <Link to={"/about"} style={activeView === "about" ? { color: "#5f4b9f" } : {}} onClick={() => setActiveView("about")}>Who We Are</Link>
        <Link to={"/quote"} style={activeView === "quote" ? { color: "#5f4b9f" } : {}} onClick={() => setActiveView("quote")}>Get a Quote</Link>
      </div>
      <hr style={{ width: "90vw", borderRadius: "50%", height: "3px", backgroundColor: "white" }} />
    </div>
  );
}
