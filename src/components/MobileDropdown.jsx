import React, { useEffect, useRef, useState } from "react";

import DropdownArrowLightIcon from "@/assets/svgIcons/DropdownArrowLightIcon";
import RightArrow from "@/assets/svgIcons/RightArrow";

const MobileDropdown = (props) => {
    const { categories, dropdownText, rightIcon, dropdownIcon } = props;
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div ref={dropdownRef} className="inline-block text-left">
            <div
                onClick={toggleDropdown}
                className="flex justify-between items-center gap-1 text-sm font-medium md:px-4"
            >
                <a className="text-white dark:text-secondary">{dropdownText}</a>
                {isOpen ? (
                    <DropdownArrowLightIcon className="text-white h-4 w-4 dark:text-secondary" />
                ) : (
                    <RightArrow className="text-white h-4 w-4 dark:text-secondary" />
                )}
            </div>
            <div className="relative">
                {isOpen && (
                    <div className="origin-top-right z-10 w-auto bg-darkBg dark:bg-white">
                        <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            {categories.map((item) => (
                                <a
                                    href="#"
                                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 last:border-b-0"
                                    role="menuitem"
                                    key={item.id}
                                >
                                    <div className="flex">
                                        {dropdownIcon ? (
                                            <img
                                                src={item.icon}
                                                className="w-7 mr-4"
                                                alt="Icon"
                                            />
                                        ) : (
                                            ""
                                        )}
                                        <p className="text-white dark:text-darkBg">
                                            {item.name}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileDropdown;
