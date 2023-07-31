import React from "react";

import useDarkMode from "@/hooks/useDarkMode";

import CartIcon from "@/assets/svgIcons/CartIcon";
import DarkModeIcon from "@/assets/svgIcons/DarkModeIcon";
import LightModeIcon from "@/assets/svgIcons/LightModeIcon";
import ShuffleIcon from "@/assets/svgIcons/ShuffleIcon";
import WishListIcon from "@/assets/svgIcons/WishListIcon";
import UserPlaceholderIcon from "@/assets/svgIcons/UserPlaceholderIcon";
import SearchIcon from "@/assets/svgIcons/SearchIcon";
import Dropdown from "@/components/Dropdown";
import MenuIcon from "@/assets/svgIcons/MenuIcon";
import DownarrowIcon from "@/assets/svgIcons/DownarrowIcon";

const SearchNavigation = () => {
    const [setTheme, colorTheme] = useDarkMode();

    const handleDarkMode = () => {
        setTheme(colorTheme);
    };

    return (
        <div className="py-3 bg-darkBg dark:bg-white">
            <div className="container grid grid-cols-12 justify-between items-center">
                <div className="col-span-3">
                    <img
                        src="https://i.ibb.co/TL7MLnh/logo.png"
                        className="h-11"
                        alt="Site-Logo"
                    />
                </div>
                <div className="col-span-5">
                    <div className="flex justify-between border-[1px] rounded-3xl p-[2px]">
                        <div className="flex">
                            <Dropdown
                                dropdownText="All Categories"
                                leftIcon={<MenuIcon />}
                                rightIcon={<DownarrowIcon />}
                            />
                            <input
                                className="focus:ring-transparent"
                                type="text"
                                placeholder="Search for item or store"
                            />
                        </div>
                        <button className="bg-primary py-3 px-5 rounded-r-3xl">
                            <SearchIcon height={18} width={18} />
                        </button>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="flex justify-end">
                        <div onClick={handleDarkMode} className=" px-3">
                            {colorTheme === "dark" ? (
                                <LightModeIcon />
                            ) : (
                                <DarkModeIcon />
                            )}
                        </div>
                        <div className="px-3 border-r-2">
                            <UserPlaceholderIcon />
                        </div>
                        <div className="px-3 border-r-2 flex">
                            <ShuffleIcon />
                            <div className="flex items-center h-4 w-4 bg-primary p-1 text-white rounded-full text-xs -mt-1 -ml-2 ">
                                {1}
                            </div>
                        </div>
                        <div className="px-3 border-r-2 flex">
                            <WishListIcon />
                            <div className="flex items-center h-4 w-4 bg-primary p-1 text-white rounded-full text-xs -mt-1 -ml-2 ">
                                {0}
                            </div>
                        </div>
                        <div className="px-3 flex">
                            <CartIcon />
                            <div className="flex items-center h-4 w-4 bg-primary p-1 text-white rounded-full text-xs -mt-1 -ml-2 ">
                                {7}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchNavigation;
