import { MutableRefObject, useRef } from 'react'
import "./about.css"
import { useIsVisible } from '../../hooks';


interface SectionProps {
  children: any,
  reference: MutableRefObject<any>,
  visibility: boolean,
  sectionTitle: string
}

const AboutSection = ({ children, reference, visibility, sectionTitle }: SectionProps) => {
  const visibleStyles = {
    color: "var(--ocean)", transition: "all 3s", width: "100%", borderBottom: "1px solid white", borderTop: "none"
  }
  const invisStyles = { color: "white", transition: "all 3s", width: "33%", borderBottom: "0px solid white", borderRadius: "0rem" };

  return (
    <div className="about-section">
      <h2 className="about-section-header">
        <span style={visibility ? visibleStyles : invisStyles}>{sectionTitle}
        </span>
      </h2>
      <section ref={reference} className="images-container">
        <p>{"<PHOTOS HERE>"}</p>
      </section>
      <section className="about-section-content">
        {children}
      </section>
    </div>
  )

}

function About() {
  const [ref1, ref2, ref3] = [useRef<HTMLDivElement | any>(), useRef<HTMLDivElement | any>(), useRef<HTMLDivElement | any>()];
  const [is1Visible, is2Visible, is3Visible] = [useIsVisible(ref1), useIsVisible(ref2), useIsVisible(ref3)];

  return (

    <div className="about-page">
      <AboutSection reference={ref1} visibility={is1Visible} sectionTitle='Who We Are'>
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
      </AboutSection>
      <hr className="section-divider" />
      <AboutSection reference={ref2} visibility={is2Visible} sectionTitle='Why We Do It'>
        <></>
      </AboutSection>
      <hr className="section-divider" />
      <AboutSection reference={ref3} visibility={is3Visible} sectionTitle='Our Machines'>
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

      </AboutSection>
    </div>
  )
}

export default About