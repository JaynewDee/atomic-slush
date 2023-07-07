import React, { useState, useEffect } from 'react'
import "./dropdown.css"
import Social from './Header/Social'


const motion = ".33s ease 0s 1 normal forwards"

const topExpand = {
  animation: `top-expand ${motion}`
}

const topCollapse = {
  animation: `top-collapse ${motion}`
}

const midExpand = {
  animation: `mid-expand ${motion}`
}
const midCollapse = {
  animation: `mid-collapse ${motion}`
}

const botExpand = {
  animation: `bot-expand ${motion}`
}
const botCollapse = {
  animation: `bot-collapse ${motion}`
}

export const Dropdown = () => {
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
      <div className="burger-line" data-state={menuState ? "expanded" : "collapsed"} id="burger-line-top" style={menuState ? topExpand : topCollapse} />
      <div className="burger-line" id="burger-line-mid" style={menuState ? midExpand : midCollapse} />
      <div className="burger-line" id="burger-line-bot" style={menuState ? botExpand : botCollapse} />
    </button>
    <div className="burger-menu-container" style={menuState ? { width: "300px" } : { width: "0" }}>
      {menuState ? <Social /> : <></>}
    </div>
  </>
}
