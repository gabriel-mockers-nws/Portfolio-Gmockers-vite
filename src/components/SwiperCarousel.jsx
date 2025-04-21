// SwiperCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import PropTypes from 'prop-types';

export default function SwiperCarousel({ images }) {
    return (
        <div className="w-[60vh] h-[27vh]">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="h-full"
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={src}
                            alt={`Image ${i + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

SwiperCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};
