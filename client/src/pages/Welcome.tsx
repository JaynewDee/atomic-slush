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
      <header className="page-header" style={{ marginBottom: "2rem" }}>
        <h3>WELCOME</h3>
      </header>
      <section
        className="welcome-section"
        onClick={() => {
          setActiveView("menu");
          navigate("/menu");
        }}
      >
        <h4 className="welcome-section-header">VIEW PRICING MENU</h4>
      </section>
      <section
        className="welcome-section"
        onClick={() => {
          setActiveView("quote");
          navigate("/quote");
        }}
      >
        <h4 className="welcome-section-header">GET A QUOTE</h4>
      </section>
      <section
        className="welcome-section"
        onClick={() => {
          window.open(
            "https://portal.tripleseat.com/direct_bookings/qnbd70wegy3",
            "_blank",
          );
        }}
      >
        <h4 className="welcome-section-header">BOOK NOW</h4>
      </section>
      <ImageCarousel />
    </article>
  );
}
