import { useRef } from 'react'
import "./about.css"
import { useIsVisible } from '../../hooks';
//import { FaHandHoldingHeart as Heart, FaPeopleCarry as People } from 'react-icons/fa'
//import { CgSmartHomeWashMachine as Machine } from "react-icons/cg"

const About = () => {
  const [ref1, ref2, ref3] = [useRef<HTMLDivElement | any>(), useRef<HTMLDivElement | any>(), useRef<HTMLDivElement | any>()];
  const is1Visible = useIsVisible(ref1);
  const is2Visible = useIsVisible(ref2)
  const is3Visible = useIsVisible(ref3)

  const visibleStyles = {
    color: "var(--ocean)", transition: "all 3s", width: "100%", borderBottom: "1px solid white", borderTop: "1px solid var(--orange)", borderRadius: "1rem"
  }
  const invisStyles = { color: "white", transition: "all 3s", width: "33%", borderBottom: "0px solid white", borderRadius: "0rem" }
  return (
    <div className="about-page">
      {/* <AboutNav displayState={displayState} setDisplayState={setDisplayState} /> */}
      <div className="about-section">
        <h2 className="about-section-header">
          {/* {Heart({ color: "var(--orange)", className: "about-icon" })} */}
          <span style={is1Visible ? visibleStyles : invisStyles}>Who We Are
          </span>
        </h2>
        <section ref={ref1} className="images-container">
          <p>{"<PHOTOS HERE>"}</p>
        </section>
        <section className="about-section-content">
          <p>We are thrilled to welcome you to the Frozen Beverage Company, Atomic Slush! Our
            commitment to serving only the freshest and finest ingredients in our customizable frozen
            drinks sets us apart from the rest.</p>
          <p>Our expertly crafted cocktail recipes, curated over 15 years of
            combined experience in the service industry, are sure to impress and cater to your preferences
            for any occasion. Whether it&#39;s a birthday party, graduation, wedding, corporate event, or any
            other celebration, we guarantee a restaurant-quality beverage without the use of fake artificial
            flavors and dyes commonly found in pre-mix bags.</p>
          <p>Our standards are high, and we are
            confident that our product and service will leave a lasting impression on you. Thank you for
            choosing Atomic Slush!
          </p>
        </section>
      </div>
      <div className="about-section">
        <h2 className="about-section-header">
          {/* {Machine({ color: "var(--orange)", className: "about-icon" })} */}
          <span style={is3Visible ? visibleStyles : invisStyles}>Our Mission
          </span>
        </h2>
        <section ref={ref3} className="images-container">
          <p >{"<PHOTOS HERE>"}</p>
        </section>
      </div>
      <div className="about-section">
        <h2 className="about-section-header">
          {/* {People({ color: "var(--orange)", className: "about-icon" })} */}
          <span style={is2Visible ? visibleStyles : invisStyles}>Our Machines
          </span>
        </h2>
        <section ref={ref2} className="images-container">
          <p>{"<PHOTOS HERE>"}</p>
        </section>
        <section className="about-section-content">
          <p>
            Our top-of-the-line double-headed machine boasts two 10-liter tanks, giving you the freedom
            to choose two flavors for a total of 20 liters.
          </p>
          <p>We guarantee delivery to your preferred location
            as long as it is within close proximity to an electrical outlet and shielded from direct sunlight.
            This is to ensure that the machine remains cool and avoids overheating, especially on hot
            summer days.
          </p>
          <p>If you require an extension cord, simply indicate it on the Tripleseat event form
            and we will readily provide a complimentary one for your convenience.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About