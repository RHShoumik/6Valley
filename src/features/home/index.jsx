import React from "react";
import Categories from "./components/Categories";
import HeroBanner from "./components/heroBanner/HeroBanner";

const HomePage = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-3 border-4 border-green-900 border-solid hidden md:block">
                    <Categories />
                </div>
                <div className="col-span-12 md:col-span-6">
                    <HeroBanner />
                </div>
                <div className="col-span-12 md:col-span-3">
                    <img
                        src="https://i.ibb.co/8MQqGcs/static-banner-img.png"
                        alt="static-banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
