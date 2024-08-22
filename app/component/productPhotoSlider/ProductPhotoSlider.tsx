"use client";

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import productPhotoSliderStyles from './ProductPhotoSlider.module.css';

// import required swiper modules
import { FreeMode, Thumbs, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

interface productPhotoSliderProps {
    className?: string;
    images: string[];
}

const ProductPhotoSlider: React.FC<productPhotoSliderProps> = ({ className, images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();
    return (
        <div className={className}>
            <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs, Pagination]}
                className={productPhotoSliderStyles.mainSwiperSlider}
                pagination={{ clickable: true }}
            >

                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Product image ${index + 1}`} className={productPhotoSliderStyles.mainSwiperSliderImg}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Pagination, Thumbs]}
                className={productPhotoSliderStyles.thumbsSwiperSlider}
            >

                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Thumbnail ${index + 1}`} className={productPhotoSliderStyles.thumbsSwiperSliderImg} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductPhotoSlider;