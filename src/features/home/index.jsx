import React, { useEffect, useState } from "react";
import HeroBanner from "./components/heroBanner/HeroBanner";
import LeftSidebar from "@/components/LeftSidebar";
import axios from "axios";

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
            <div className="grid grid-cols-12 gap-2 bg-darkBg dark:bg-white">
                <div className="col-span-3 hidden md:block">
                    <LeftSidebar items={categories}/>
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
