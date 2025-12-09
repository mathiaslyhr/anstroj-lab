import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function ImageSlider({ images, name }) {
    return (
        <div className="h-full w-full overflow-hidden">
            <Swiper
            modules={[Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{crossFade: true}}
            pagination={{clickable: true}}
            slidesPerView={1}
            speed={600}
            className="h-full w-full"
            >
                {images?.map((img, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <img src={img} alt={`${name} ${index}`} className="w-full h-full object-cover"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
}