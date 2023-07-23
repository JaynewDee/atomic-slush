import { Dispatch, SetStateAction } from 'react';
import { Link } from "react-router-dom";
import logoImg from '/asset-1.png'

const NavLink = (path: string, activeView: string, viewSetter: any) =>
  <Link
    key={path}
    to={`/${path}`}
    className={path}
    style={activeView === path ? { color: "var(--rich-purp)", padding: "0" } : {}}
    onClick={() => viewSetter(path)}
  >
    {path === "about" ? "Who We Are" : path === "quote" ? "Book With Us" : path}
  </Link>

export const Links = (activeView: string, setActiveView: Dispatch<SetStateAction<string>>) => {
  return ["recipes", "about", "quote"]
    .map(path => NavLink(path, activeView, setActiveView))
}

export type NavProps = {
  activeView: string,
  setActiveView: Dispatch<SetStateAction<string>>;
}

export function Navbar({ activeView, setActiveView }: NavProps) {

  return (
    <div className="navbar">
      <img src={logoImg} className="logo-img"></img>
      <div className="nav-links-container">
        {Links(activeView, setActiveView)}
      </div>
    </div>
  );
}
