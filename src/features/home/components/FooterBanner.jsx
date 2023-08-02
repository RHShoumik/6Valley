import React, { useEffect, useState } from "react";
import axios from "axios";

const storgae = "https://6valley-aster.6amtech.com/storage/app/public/banner/";

const FooterBanner = () => {
    const [footerBanners, setfooterBanners] = useState([]);

    useEffect(() => {
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
    return (
        <div className="flex gap-2">
            {footerBanners.slice(0, 2).map((banner) => (
                <img
                    src={storgae + banner.photo}
                    className="rounded-md"
                    alt={banner.banner_type}
                />
            ))}
        </div>
    );
};

export default FooterBanner;
