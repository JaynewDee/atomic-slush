import { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "/asset-1.png";
import "./navbar.css";

const NavLink = (path: string, activeView: string, viewSetter: any) => {
  return (
    <Link
      key={path}
      to={`/${path}`}
      className={path}
      data-active={path === activeView}
      onClick={() => viewSetter(path)}
    >
      {path === "about"
        ? "Who We Are"
        : path === "quote"
        ? "Book With Us"
        : path === "recipes"
        ? "Recipes"
        : path === "menu"
        ? "Menu"
        : "Important"}
    </Link>
  );
};

export const Links = (
  activeView: string,
  setActiveView: Dispatch<SetStateAction<string>>,
) => {
  return ["menu", "recipes", "important", "quote", "about"].map((path) =>
    NavLink(path, activeView, setActiveView),
  );
};

export type NavProps = {
  activeView: string;
  setActiveView: Dispatch<SetStateAction<string>>;
};

export function Navbar({ activeView, setActiveView }: NavProps) {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img
        src={logoImg}
        className="logo-img"
        onClick={() => {
          navigate("/");
          setActiveView("");
        }}
      ></img>
      <div className="nav-links-container">
        {Links(activeView, setActiveView)}
      </div>
    </div>
  );
}
