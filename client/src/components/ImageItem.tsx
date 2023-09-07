import { memo } from "react";
import { ImageItem } from "./Carousel"

const CarouselImage = memo(function CarouselImage({ image }: { image: ImageItem }) {
    return <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
        <p className="legend">{image.label}</p>
    </div>
})

export default CarouselImage;