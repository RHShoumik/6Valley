import React, { useEffect, useState } from "react";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const storgae = "https://6valley-aster.6amtech.com/storage/app/public/banner/";

const BannerCarousel = () => {
    const [heroBanners, setHeroBanners] = useState([]);

    useEffect(() => {
        fetchHerobanners();
    }, []);

    const fetchHerobanners = async () => {
        try {
            const { data } = await axios.get(
                "https://6valley.sixamtech.com/react/api/v4/banners?banner_type=main_banner"
            );
            setHeroBanners(data);
        } catch (error) {
            console.log("Error", error);
        }
    };
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper bg-darkBg dark:bg-white rounded-md"
        >
            {heroBanners.map((banner) => (
                <SwiperSlide className="cursor-pointer" key={banner.id}>
                    <img
                        src={storgae + banner.photo}
                        alt={banner.banner_type}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BannerCarousel;
