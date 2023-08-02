import React, { useState } from "react";

import useDarkMode from "@/hooks/useDarkMode";

import CloseIcon from "@/assets/svgIcons/CloseIcon";
import DarkModeIcon from "@/assets/svgIcons/DarkModeIcon";
import LightModeIcon from "@/assets/svgIcons/LightModeIcon";
import SearchIcon from "@/assets/svgIcons/SearchIcon";
import VerifiedIcon from "@/assets/svgIcons/VerifiedIcon";
import MobileDropdown from "@/components/MobileDropdown";

const MobileSidebar = ({ icon, categories }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [setTheme, colorTheme] = useDarkMode();

    const handleDarkMode = () => {
        setTheme(colorTheme);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (
        <div>
            <button onClick={toggleSidebar} className="text-white z-50">
                {icon}
            </button>

            {isSidebarOpen && (
                <div
                    className="fixed right-0 top-0 h-full w-[280px]shadow-lg z-40 bg-darkBg dark:bg-white"
                    style={{
                        transform: isSidebarOpen
                            ? "translateX(0)"
                            : "translateX(100%)",
                    }}
                >
                    <button onClick={toggleSidebar}>
                        <CloseIcon className="text-white h-5 w-5 dark:text-secondary m-2" />
                    </button>
                    <div className="flex justify-between border-[1px] rounded-3xl p-2 mx-3 bg-darkBg dark:bg-white">
                        <div className="flex bg-darkBg dark:bg-lightGray">
                            <input
                                className="bg-darkBg dark:bg-white focus:outline-none "
                                type="text"
                                placeholder="Search for item or store"
                            />
                        </div>
                        <div className="">
                            <SearchIcon className="text-white h-5 w-5 dark:text-secondary" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 py-6 px-6">
                        <MobileDropdown
                            categories={categories}
                            dropdownText="Categoties"
                            dropdownTextColor="#fff"
                        />
                        <a
                            src="/"
                            className="text-white dark:text-secondary text-sm"
                        >
                            Home
                        </a>
                        <MobileDropdown
                            categories={categories}
                            dropdownText="Offers"
                            dropdownTextColor="#fff"
                        />
                        <MobileDropdown
                            categories={categories}
                            dropdownText="Stores"
                            dropdownTextColor="#fff"
                        />
                        <MobileDropdown
                            categories={categories}
                            dropdownText="Brands"
                            dropdownTextColor="#fff"
                        />
                        <div className="flex items-center">
                            <a
                                src="#"
                                className="text-white dark:text-secondary text-sm"
                            >
                                Discounted Products
                            </a>
                            <VerifiedIcon />
                        </div>
                        <a
                            src="/"
                            className="text-white dark:text-secondary text-sm"
                        >
                            Become A Seller
                        </a>
                    </div>

                    <div className="flex justify-between items-center pt-5 px-5">
                        <p className="text-white dark:text-secondary">
                            Theme Mode
                        </p>
                        <div className="flex gap-1 justify-center rounded-3xl items-center shadow-lg p-1">
                            <div
                                onClick={handleDarkMode}
                                className="flex justify-center rounded-3xl items-center h-6 w-6"
                            >
                                <div
                                    className="flex justify-center rounded-3xl bg-indigo-100 dark:bg-white"
                                    // className={
                                    //     colorTheme === "dark"
                                    //         ? "rounded-3xl dark:bg-indigo-100"
                                    //         : "bg-white"
                                    // }
                                >
                                    <DarkModeIcon className="text-secondary h-5 w-5 dark:text-secondary" />
                                </div>
                            </div>
                            <div
                                onClick={handleDarkMode}
                                className="flex justify-center rounded-3xl items-center h-6 w-6 bg-darkBg dark:bg-indigo-100"
                            >
                                <LightModeIcon className="text-white h-5 w-5 dark:text-secondary" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileSidebar;
