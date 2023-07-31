import React from "react";

import { socials } from "@/common/const";

const SocialNavigation = () => {
    return (
        <div className="bg-darkBgBody p-2 dark:bg-secondary">
            <div className="container flex justify-between items-center">
                <div className="flex">
                    <button className="bg-primary text-white rounded-3xl px-3 py-1">Become a Seller</button>
                    <p className="text-white px-3 py-1">Free Express Shipping</p>
                </div>
                <div className="flex px-1">
                    <p className="px-2 text-white">USD</p>
                    <p className="px-2 text-white">English</p>
                    {socials?.map((social) => (
                        <button className="px-2" key={social.id}>{social.icon}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialNavigation;
