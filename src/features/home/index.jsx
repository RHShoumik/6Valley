import React from "react";

const HomePage = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-2">
            <div className="col-span-3 border-4 border-green-900 border-solid hidden md:block">1</div>
            <div className="col-span-12 border-4 border-green-900 border-solid md:col-span-6 dark:border-red-800">
                <h1 className="text-fontColor dark:white">hello gays</h1>
            </div>
            <div className="col-span-12 border-4 border-green-900 border-solid md:col-span-3">3</div>
            <div className="col-span-12 border-4 border-green-900 border-solid md:col-span-3">3</div>
        </div>
        </div>
    );
};

export default HomePage;
