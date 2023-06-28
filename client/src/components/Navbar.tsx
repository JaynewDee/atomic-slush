import { useState } from 'react';
import { Link } from "react-router-dom";
import logoImg from '/asset-1.png'

const pathSwitch = (path: string) =>
  path === "recipes" ? `/${path}/${path}/1` : path === "about" ? `/${path}/${path}/reason` : `/${path}`;

const NavLink = (path: string, activeView: string, viewSetter: any) =>
  <Link
    key={path}
    to={pathSwitch(path)}
    className={path}
    style={activeView === path ? { color: "var(--rich-purp)" } : {}}
    onClick={() => viewSetter(path)}
  >
    {path === "about" ? "Who We Are" : path === "quote" ? "Grab A Quote" : path}
  </Link>

export default function Navbar() {
  const [activeView, setActiveView] = useState("");

  return (
    <div className="navbar">
      <img src={logoImg} className="logo-img"></img>
      <div className="nav-links-container">
        {
          ["recipes", "about", "quote"]
            .map(path => NavLink(path, activeView, setActiveView))
        }
      </div>
    </div>
  );
}
