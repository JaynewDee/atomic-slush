import { useState } from 'react'
import AboutNav from './Nav'
import { Outlet } from 'react-router-dom'
import "./about.css"

const About = () => {
  const [displayState, setDisplayState] = useState("reason")

  return (
    <div className="about-page">
      <AboutNav displayState={displayState} setDisplayState={setDisplayState} />
      <section className="about-section">
        <Outlet />
      </section>
    </div>
  )
}

export default About