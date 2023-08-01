import RightArrow from "@/assets/svgIcons/RightArrow";
import React, { useEffect, useRef, useState } from "react";

const DropdownRight = (props) => {
    const { dropdownText, rightIcon, items } = props;
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

    const callDropdown = (item) => {
        return (
            <DropdownRight
                items={item.childes}
                rightIcon={
                    <RightArrow className="text-white dark:text-secondary" />
                }
            />
            // if(item.childes.length !== 0){
            //     callDropdown(item)

            // }
        );
    };

    return (
        <div ref={dropdownRef} className="block text-left">
            <button
                onClick={toggleDropdown}
                className="flex justify-center items-center gap-1 px-4 py-2 text-sm font-medium "
            >
                <p className="text-[16px] text-white dark:text-secondary">
                    {dropdownText}
                </p>
                {rightIcon ? rightIcon : ""}
            </button>
            <div className="relative">
                {isOpen && (
                    <div className="absolute z-10 w-48 -mt-[45px] -right-[204px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            {items.map((item) => (
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 border-b-[1px] hover:bg-gray-100 hover:text-gray-900 last:border-b-0"
                                    role="menuitem"
                                    key={item.id}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="">{item.name}</div>
                                        <div className="flex justify-between">
                                            {item.childes &&
                                            item.childes.length !== 0
                                                ? callDropdown(item)
                                                : ""}
                                        </div>
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

export default DropdownRight;
