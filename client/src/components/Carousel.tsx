import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imageData = [
  {
    label: "Single-Headed",
    alt: "image1",
    url: "./machine1.jpg",
  },
  {
    label: "Double-Headed",
    alt: "image2",
    url: "./machine2.jpg",
  },
  {
    label: "Spread",
    alt: "fresh fruits and frozen cocktail machines",
    url: "./machine3.jpg",
  },
  {
    label: "Spread Close-Up",
    alt: "fresh tropical and citrus fruits close-up",
    url: "./machine4.jpg",
  },
  {
    label: "Spread",
    alt: "cocktail slushie machines framed by varieties of fresh fruit and kitchen tools",
    url: "./machine6.jpg",
  },
  {
    label: "Daniel Crushing it",
    alt: "Atomic slush business owner serves fresh frozen cocktails with a big smile",
    url: "./danny1.jpg"
  },
  {
    label: "Gym event rearview",
    alt: "Atomic slush owner Daniel serves fresh frozen drinks to guests of gym event",
    url: "./gym-event1.jpg"
  },
  {
    label: "Gym event setup",
    alt: "Front-facing view of full frozen machine setup including purees and garnishes",
    url: "./gym-event2.jpg"
  }
];


const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
    <p className="legend">{image.label}</p>
  </div>
));

export default function ImageCarousel() {
  const [_, setCurrentIndex] = useState(0);

  function handleChange(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div className="image-carousel">
      <header className="page-header" style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontSize: "1.5rem" }}>IMAGES</h3>
      </header>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        // selectedItem={imageData[currentIndex] as any}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}
