import React, { useState } from "react";

const Dropdown = (props) => {
    const { dropdownText, leftIcon, rightIcon } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="relative inline-block text-left">
            <div
                onClick={toggleDropdown}
                className="inline-flex justify-center items-center gap-1 px-4 py-2 text-sm font-medium "
            >
                {leftIcon ? leftIcon : ""}
                {dropdownText}
                {rightIcon ? rightIcon : ""}
            </div>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            Option 1
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            Option 2
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            Option 3
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
