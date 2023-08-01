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
                <div class="bg-[url('https://i.ibb.co/7gKxb43/top-offer-bg.png')] bg-no-repeat bg-cover bg-center p-3">
                    <div className="container grid grid-cols-12 ">
                        <div className="col-span-3">
                            <button onClick={handleClose}>
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="col-span-9 ">
                            <p className="text-primary font-[600]">
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
