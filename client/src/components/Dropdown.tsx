import React, { useState, useEffect } from 'react'
import "./dropdown.css"
import Social from './Header/Social'
import { Links, NavProps } from './Navbar'


const motion = ".33s ease 0s 1 normal forwards"

const { top, mid, bot } = {
  top: {
    expand: { animation: `top-expand ${motion}` },
    collapse: { animation: `top-collapse ${motion}` }
  },
  mid: {
    expand: { animation: `mid-expand ${motion}` },
    collapse: { animation: `mid-collapse ${motion}` }
  },
  bot: {
    expand: { animation: `bot-expand ${motion}` },
    collapse: { animation: `bot-collapse ${motion}` }
  }
}

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

  const toggleMenu = () => setMenuState(prev => !prev)

  return <>
    <button className="dropdown-toggle-btn" type="button" onClick={toggleMenu}>
      <div className="burger-line" data-state={menuState ? "expanded" : "collapsed"} id="burger-line-top" style={menuState ? top.expand : top.collapse} />
      <div className="burger-line" id="burger-line-mid" style={menuState ? mid.expand : mid.collapse} />
      <div className="burger-line" id="burger-line-bot" style={menuState ? bot.expand : bot.collapse} />
    </button>
    <div className="burger-menu-container" style={menuState ? { width: "225px" } : { width: "0" }}>
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
