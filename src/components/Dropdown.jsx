import React, { useEffect, useRef, useState } from "react";

const Dropdown = (props) => {
    const {
        dropdownText,
        dropdownTextColor,
        leftIcon,
        rightIcon,
        items,
        dropdownIcon,
    } = props;
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
        <div ref={dropdownRef} className="block text-left">
            <div
                onClick={toggleDropdown}
                className="flex justify-center items-center cursor-pointer gap-1 px-1 py-2 text-sm font-medium transition duration-150 ease-in-out"
            >
                {leftIcon ? leftIcon : ""}
                {dropdownTextColor ? (
                    <p className="text-xs text-white md:text-base">
                        {dropdownText}
                    </p>
                ) : (
                    <p className="text-xs text-white dark:text-secondary md:text-base">
                        {dropdownText}
                    </p>
                )}
                <div>{rightIcon ? rightIcon : ""}</div>
            </div>
            <div className="relative">
                {isOpen && (
                    <div className=" absolute z-10 w-auto rounded-md shadow-lg bg-darkBg dark:bg-white ring-1 ring-black ring-opacity-5 md:w-48">
                        <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            {items.map((item) => (
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-sm text-gray-700 border-b-[1px] hover:text-gray-900 last:border-b-0"
                                    role="menuitem"
                                    key={item.id}
                                >
                                    <div className="flex">
                                        {dropdownIcon ? (
                                            <img
                                                src={item.icon}
                                                className="w-5 mr-2 md:w-7"
                                                alt="Icon"
                                            />
                                        ) : (
                                            ""
                                        )}
                                        <p className="text-white dark:text-secondary hover:text-primary dark:hover:text-primary">
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

export default Dropdown;
