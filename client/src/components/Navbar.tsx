import { useState } from 'react';
import { Link } from "react-router-dom";
import logoImg from '/asset-1.png'

const NavLink = (path: string, activeView: string, viewSetter: any) => <Link to={path === "recipes" ? `/${path}/${path}/1` : `/${path}`} className={path} style={activeView === path ? { color: "var(--rich-purp)" } : {}} onClick={() => viewSetter(path)}>{path === "about" ? "Who We Are" : path === "quote" ? "Grab A Quote" : path}</Link>

export default function Navbar() {
  const [activeView, setActiveView] = useState("")
  return (
    <div className="navbar">
      <img src={logoImg} className="logo-img"></img>
      <div className="nav-links-container">
        {
          ["recipes", "about", "quote"]
            .map(path => NavLink(path, activeView, setActiveView))
        }
      </div>
      {/* <hr style={{ width: "60vw", borderRadius: "50%", height: "3px", backgroundColor: "white" }} /> */}
    </div>
  );
}
