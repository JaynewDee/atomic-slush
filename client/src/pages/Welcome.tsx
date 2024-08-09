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
