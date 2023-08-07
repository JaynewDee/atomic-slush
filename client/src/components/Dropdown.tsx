import { useState } from "react";
import "./dropdown.css";
import Social from "./Social";
import { Links, NavProps } from "./Navbar";
import Hamburger from "hamburger-react";
import { useClickOff } from "../hooks";

export const Dropdown = ({ activeView, setActiveView }: NavProps) => {
  const [menuState, setMenuState] = useState(false);

  const targetClasses = [
    "App",
    "navbar",
    "page-container",
    "tip-top",
    "logo-img",
  ];

  useClickOff(setMenuState, targetClasses);

  return (
    <>
      <div className="burger-dropdown-btn">
        <Hamburger
          size={24}
          toggled={menuState}
          toggle={setMenuState}
          label={"show menu"}
          rounded
        />
      </div>
      <div
        className="burger-menu-container"
        style={menuState ? { width: "225px" } : { width: "0" }}
      >
        <>
          <nav
            style={
              menuState
                ? { transform: "translateX(0px)" }
                : { transform: "translateX(225px)" }
            }
            id="burger-nav-links"
          >
            {Links(activeView, setActiveView)}
          </nav>
          <Social menuState={menuState } />
        </>
      </div>
    </>
  );
};
