import DropdownArrowLightIcon from "@/assets/svgIcons/DropdownArrowLightIcon";
import MenuIcon from "@/assets/svgIcons/MenuIcon";
import VerifiedIcon from "@/assets/svgIcons/VerifiedIcon";
import Dropdown from "@/components/Dropdown";
import { languages } from "@/utils/languages";
import React from "react";

const BottomNavigation = () => {
    return (
        <div className=" border-l-neutral-500 border-t-[1px] shadow-sm bg-darkBg dark:bg-white">
            <div className="container grid grid-cols-12">
                <div className="flex justify-between col-span-3 bg-primary p-4 mx-3 items-center">
                    <div className="flex items-center">
                        <MenuIcon className="text-white h-6 w-6" />
                        <p className="text-white pl-2">Browse Category</p>
                    </div>
                    <DropdownArrowLightIcon className="text-white"/>
                </div>
                <div className="flex items-center col-span-9">
                    <div className="px-6">
                        <a src="/" className="text-white dark:text-secondary">Home</a>
                    </div>
                    <div className="px-6">
                        <Dropdown
                            dropdownText="Offers"
                            rightIcon={<DropdownArrowLightIcon className="text-white dark:text-secondary"/>}
                            items={languages}
                            dropdownIcon={true}
                            multiColumn={true}
                        />
                    </div>
                    <div className="px-6">
                        <Dropdown
                            dropdownText="Stores"
                            rightIcon={<DropdownArrowLightIcon className="text-white dark:text-secondary"/>}
                            items={languages}
                            dropdownIcon={true}
                        />
                    </div>
                    <div className="px-6">
                        <Dropdown
                            dropdownText="Brands"
                            rightIcon={<DropdownArrowLightIcon className="text-white dark:text-secondary"/>}
                            items={languages}
                            dropdownIcon={true}
                        />
                    </div>
                    <div className="flex items-center px-6">
                        <a src="#" className="text-white dark:text-secondary">Discounted Products</a>
                        <VerifiedIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomNavigation;
