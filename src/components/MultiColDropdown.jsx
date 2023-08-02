import React, { useEffect, useRef, useState } from "react";

const MultiColDropdown = (props) => {
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
                className="flex justify-center items-center gap-1 cursor-pointer px-4 py-2 text-sm font-medium"
            >
                {dropdownTextColor ? (
                    <p className="text-xs text-white md:text-base">{dropdownText}</p>
                ) : (
                    <p className="text-xs text-white dark:text-secondary md:text-base">
                        {dropdownText}
                    </p>
                )}
                {rightIcon ? rightIcon : ""}
            </div>
            <div className="relative">
                {isOpen && (
                    <div className="origin-top-right absolute w-auto min-w-[400px] z-10 rounded-md shadow-lg bg-darkBg dark:bg-white ring-1 ring-black ring-opacity-5">
                        <div
                            className="py-1 grid grid-cols-2 gap-2"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            { items.map((item, index) => (
                                      <a
                                          href="#"
                                          className={`block px-4 py-2 text-sm text-gray-700 border-b-[1px] hover:text-primary last:border-b-0 child ${index >= items.length - 2 ? 'border-b-0' : ''}`}
                                          role="menuitem"
                                          key={item.id}
                                      >
                                          <div className="flex">
                                              {item.icon ? (
                                                  <img
                                                      src={item.icon}
                                                      className="w-7 mr-4"
                                                      alt="Icon"
                                                  />
                                              ) : (
                                                  ""
                                              )}
                                              <p className="text-white dark:text-secondary hover:text-primary dark:hover:text-primary">{item.name}</p>
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

export default MultiColDropdown