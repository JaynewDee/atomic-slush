import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imageData = [
  {
    label: "Single-Headed",
    alt: "image1",
    url:
      "./machine1.jpg"
  },
  {
    label: "Double-Headed",
    alt: "image2",
    url:
      "./machine2.jpg"
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
    <p className="legend">{image.label}</p>
  </div>
));

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleChange(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div className="image-carousel">
      <header className="page-header" style={{ marginBottom: "5rem" }}>
        <h3>IMAGES</h3>
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