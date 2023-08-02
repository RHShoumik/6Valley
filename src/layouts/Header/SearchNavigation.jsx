import React, { useEffect, useState } from "react";
import axios from "axios";

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
import MobileSidebar from "./MobileSidebar";

const SearchNavigation = () => {
    const [setTheme, colorTheme] = useDarkMode();
    const [categories, setCategories] = useState([]);
    const handleDarkMode = () => {
        setTheme(colorTheme);
    };

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
        <div className="py-3 bg-darkBg dark:bg-white">
            <div className="container md:grid grid-cols-12 justify-between items-center">
                <div className="flex items-center justify-between col-span-3 cursor-pointer">
                    <img
                        src="https://i.ibb.co/TL7MLnh/logo.png"
                        className="h-11"
                        alt="Site-Logo"
                    />
                    <div className="block md:hidden">
                        <MobileSidebar
                            categories={categories}
                            icon={
                                <MenuIcon className="text-white h-6 w-6 dark:text-secondary" />
                            }
                        />
                    </div>
                </div>

                <div className="hidden md:col-span-5 md:block">
                    <div className="flex justify-between border-[1px] rounded-3xl p-[2px]">
                        <div className="flex">
                            <Dropdown
                                dropdownText="All Categories"
                                leftIcon={
                                    <MenuIcon className="text-white h-6 w-6 dark:text-secondary" />
                                }
                                rightIcon={
                                    <DownarrowIcon className="text-white h-6 w-6 dark:text-secondary" />
                                }
                                items={categories}
                            />
                            <input
                                className="bg-darkBg dark:bg-white focus:outline-none "
                                type="text"
                                placeholder="Search for item or store"
                            />
                        </div>
                        <button className="bg-primary py-3 px-5 rounded-r-3xl">
                            <SearchIcon className="text-white" />
                        </button>
                    </div>
                </div>
                <div className="hidden md:col-span-4 md:block">
                    <div className="flex justify-end">
                        <div
                            onClick={handleDarkMode}
                            className="cursor-pointer px-3"
                        >
                            {colorTheme === "dark" ? (
                                <LightModeIcon className="text-white h-6 w-6 dark:text-secondary" />
                            ) : (
                                <DarkModeIcon className="text-white h-6 w-6 dark:text-secondary" />
                            )}
                        </div>
                        <div className="px-3 border-r-2 cursor-pointer">
                            <UserPlaceholderIcon />
                        </div>
                        <div className="px-3 border-r-2 flex cursor-pointer">
                            <ShuffleIcon className="text-white h-6 w-6 dark:text-secondary" />
                            <div className="flex items-center h-4 w-4 bg-primary p-1 text-white rounded-full text-xs -mt-1 -ml-2 ">
                                {1}
                            </div>
                        </div>
                        <div className="px-3 border-r-2 flex cursor-pointer">
                            <WishListIcon className="text-white h-6 w-6 dark:text-secondary" />
                            <div className="flex items-center h-4 w-4 bg-primary p-1 text-white rounded-full text-xs -mt-1 -ml-2 ">
                                {0}
                            </div>
                        </div>
                        <div className="px-3 flex cursor-pointer">
                            <CartIcon className="text-white h-6 w-6 dark:text-secondary" />
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
