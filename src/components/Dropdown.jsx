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
        <div ref={dropdownRef} className="inline-block text-left">
            <div
                onClick={toggleDropdown}
                className="inline-flex justify-center items-center gap-1 px-4 py-2 text-sm font-medium "
            >
                {leftIcon ? leftIcon : ""}
                {dropdownTextColor ? (
                    <p className="text-[16px] text-white">{dropdownText}</p>
                ) : (
                    <p className="text-[16px] text-white dark:text-secondary">
                        {dropdownText}
                    </p>
                )}
                {rightIcon ? rightIcon : ""}
            </div>
            <div className="relative">
                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
                                        <p className="">{item.name}</p>
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
