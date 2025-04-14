import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PropTypes from 'prop-types';

export default function ImageCarousel({ images }) {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            {images.map((src, i) => (
                <div key={i} >
                    <img src={src} alt={`Slide ${i + 1}`} className="h-[60vh] w-[60vh] object-contain" />
                </div>
            ))}

        </Carousel>
    );
}

ImageCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};