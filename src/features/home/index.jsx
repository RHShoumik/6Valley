import React, { useEffect, useState } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import axios from "axios";
import BannerCarousel from "./components/heroBanner/BannerCarousel";

const HomePage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

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
            <div className=" grid grid-cols-12 gap-2 bg-darkBg dark:bg-white">
                <div className="col-span-3 hidden md:block">
                    <LeftSidebar items={categories} />
                </div>
                <div className="col-span-9">
                    <div className="grid grid-cols-8">
                        <div className="col-span-6">
                            <div className="">
                                <BannerCarousel />
                            </div>
                            <div className="">
                                <div className="">
                                    <img
                                        src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-64885a2ebe670.png"
                                        alt="footer banner"
                                    />
                                </div>
                                <div className="">
                                    <img
                                        src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-64885a2ebe670.png"
                                        alt="footer banner"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <img
                                src="https://i.ibb.co/8MQqGcs/static-banner-img.png"
                                alt="static-banner"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
