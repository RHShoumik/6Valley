import React, { useEffect, useState } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import axios from "axios";
import BannerCarousel from "./components/heroBanner/BannerCarousel";

const storgae = "https://6valley-aster.6amtech.com/storage/app/public/banner/";

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [footerBanners, setfooterBanners] = useState([]);

    useEffect(() => {
        fetchCategories();
        fetchFooterbanners();
    }, []);

    const fetchFooterbanners = async () => {
        try {
            const { data } = await axios.get(
                "https://6valley.sixamtech.com/react/api/v4/banners?banner_type=footer_banner"
            );
            setfooterBanners(data);
        } catch (error) {
            console.log("Error in fetching data from footer banner", error);
        }
    };

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get(
                "https://6valley.sixamtech.com/react/api/v4/categories"
            );
            setCategories(data);
        } catch (error) {
            console.log("Error", error);
        }
    };
    return (
        <div className="container">
            <div className=" md:grid grid-cols-12 bg-darkBg dark:bg-white">
                <div className="col-span-3 hidden md:block">
                    <LeftSidebar items={categories} />
                </div>
                <div className="col-span-6 md:mt-3">
                    <div className="md:flex flex-col gap-3">
                            <BannerCarousel />
                        <div className="md:flex gap-3 md:mt-1">
                            {footerBanners.slice(0, 2).map((banner) => (
                                <img
                                    src={storgae + banner.photo}
                                    alt={banner.banner_type}
                                    className="mt-3 rounded-md w-full h-full object-cover md:mt-0"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-3 h-auto md:pl-3 pt-3">
                    <img
                        src="https://i.ibb.co/8MQqGcs/static-banner-img.png"
                        alt="static-banner"
                        className="rounded-md w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
