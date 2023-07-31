import React from "react";

import { socials } from "@/common/const";
import Dropdown from "@/components/Dropdown";
import { languages } from "@/utils/languages";
import DropdownArrowLightIcon from "@/assets/svgIcons/DropdownArrowLightIcon";
import { currency } from "@/utils/currency";

const SocialNavigation = () => {
    return (
        <div className="bg-darkBgBody p-2 dark:bg-secondary">
            <div className="container flex justify-between items-center">
                <div className="flex">
                    <button className="bg-primary text-white rounded-3xl px-3 py-1">
                        Become a Seller
                    </button>
                    <p className="text-white px-3 py-1">
                        Free Express Shipping
                    </p>
                </div>
                <div className="flex items-center px-1">
                    <img
                        src="https://i.ibb.co/3RLQNRB/US.png"
                        className="h-4"
                        alt="icon"
                    />
                    <Dropdown
                        dropdownText="English"
                        dropdownTextColor="#fff"
                        rightIcon={<DropdownArrowLightIcon className="text-white"/>}
                        items={languages}
                        dropdownIcon={true}
                    />
                    <Dropdown
                        dropdownText="USD"
                        dropdownTextColor="#fff"
                        rightIcon={<DropdownArrowLightIcon className="text-white"/>}
                        items={currency}
                    />
                    {socials?.map((social) => (
                        <button className="px-2" key={social.id}>
                            {social.icon}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialNavigation;
