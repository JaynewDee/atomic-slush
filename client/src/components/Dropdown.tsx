import { useState, useEffect } from 'react'
import "./dropdown.css"
import Social from './Social'
import { Links, NavProps } from './Navbar'
import Hamburger from 'hamburger-react'

export const Dropdown = ({ activeView, setActiveView }: NavProps) => {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    function handleClickOff(e: any) {
      const targetClass = e.target.classList[0];
      const targetClasses = ['App', 'navbar', 'page-container', 'tip-top', 'logo-img']

      if (targetClasses.includes(targetClass)) {
        setMenuState(false)
      }
    }

    document.addEventListener('click', handleClickOff)

    return () => document.removeEventListener('click', handleClickOff)
  }, [])

  return <>
    <div className="burger-dropdown-btn">
      <Hamburger size={24} toggled={menuState} toggle={setMenuState} label={"show menu"} rounded />
    </div>

    <div className="burger-menu-container" style={menuState ? { width: "225px", fontSize: "1.33rem" } : { width: "0", fontSize: "0rem" }}>
      {menuState ?
        <>
          <nav id="burger-nav-links">
            {Links(activeView, setActiveView)}
          </nav>
          <Social /></>
        : <></>
      }
    </div>
  </>
}
