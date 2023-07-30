import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroBanner = () => {
    const [heroBanners, setHeroBanners] = useState([]);
    const [footerBanners, setFooterBanners] = useState([]);

    // useEffect(() => {
    //     fetchHerobanners();
    //     fetchFooterbanners();
    // }, []);

    // console.log(footerBanners);

    // const fetchFooterbanners = async () => {
    //     try {
    //         const response = await axios.get(
    //             "https://6valley.sixamtech.com/react/api/v4/banners?banner_type=footer_banner"
    //         );
    //         setFooterBanners(response.data);
    //     } catch (error) {
    //         console.log("Error", error);
    //     }
    // };

    // const fetchHerobanners = async () => {
    //     try {
    //         const response = await axios.get(
    //             "https://6valley.sixamtech.com/react/api/v4/banners?banner_type=main_banner",
    //             {
    //                 responseType: "arraybuffer",
    //             }
    //         );
    //         const imageObjects = response.data.map((imageData) => ({
    //             url: URL.createObjectURL(
    //                 new Blob([imageData], { type: "image/jpeg" })
    //             ),
    //         }));
    //         setHeroBanners(imageObjects);
    //     } catch (error) {
    //         console.log("Error in fetching main_banner", error);
    //     }
    // };

    return (
        <div>
            {/* {heroBanners.map((banner) => ( */}
            <img
                className="object-cover"
                src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-6488573c55b90.png"
                alt="Picture of the author"
            />
            <div className="flex justify-between">
                <img
                    src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-64885a2ebe670.png"
                    alt="footer banner"
                />
                <img
                    src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-64885a2ebe670.png"
                    alt="footer banner"
                />
            </div>
            {/* ))} */}
        </div>
    );
};

export default HeroBanner;
