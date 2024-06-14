import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../components/Carousel";

interface WelcomeProps {
  setActiveView: Dispatch<SetStateAction<string>>;
}

export default function Welcome({ setActiveView }: WelcomeProps) {
  const navigate = useNavigate();

  return (
    <article className="welcome-page">
      <header className="page-header" style={{ margin: "2rem auto 3rem" }}>
        <h3>WELCOME</h3>
      </header>
      <WelcomeSection
        headerText="VIEW PRICING MENU"
        onClick={() => {
          setActiveView('menu');
          navigate('/menu');
        }} />
      <WelcomeSection
        headerText="GET A QUOTE"
        onClick={() => {
          setActiveView('quote');
          navigate('/quote');
        }} />
      <WelcomeSection
        headerText="BOOK NOW"
        onClick={() => {
          window.open(
            "https://portal.tripleseat.com/direct_bookings/qnbd70wegy3",
            "_blank",
          );
        }}
        className="welcome-section book-now-section"
      />
      {/* <section
        className="welcome-section book-now-section"
        onClick={() => {
          window.open(
            "https://portal.tripleseat.com/direct_bookings/qnbd70wegy3",
            "_blank",
          );
        }}
      >
        <h4 className="welcome-section-header">BOOK NOW</h4>
      </section> */}
      <ImageCarousel />
    </article>
  );
}

const WelcomeSection = ({ headerText, onClick, className }:
  {
    headerText: string,
    onClick: () => void,
    className?: string
  }) => {
  return <section
    className={className ? className : "welcome-section"}
    onClick={onClick}
  >
    <h4 className="welcome-section-header">{headerText}</h4>
  </section>

}
