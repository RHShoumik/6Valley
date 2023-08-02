import React, { useState } from "react";

import CloseIcon from "@/assets/svgIcons/CloseIcon";

const TopNavigation = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleClose = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            {isModalOpen && (
                <div class="bg-slate-300 md:bg-[url('https://i.ibb.co/7gKxb43/top-offer-bg.png')] bg-no-repeat bg-cover bg-center p-1 md:p-3">
                    <div className="flex items-center justify-between pr-6 md:container md:grid md:grid-cols-12 ">
                        <div className="col-span-3">
                            <button onClick={handleClose}>
                                <CloseIcon className="text-primary h-5 w-5 md:h-6 md:w-6 dark:text-secondary" />
                            </button>
                        </div>
                        <div className="col-span-6 text-primary md:flex justify-center">
                            <p className="text-[.625rem] md:text-sm  md:font-[600]">
                                GEt 50% discount in all product from June 2023
                                to december 2023
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopNavigation;
