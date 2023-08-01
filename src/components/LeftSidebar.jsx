import RightArrow from "@/assets/svgIcons/RightArrow";
import React from "react";

const LeftSidebar = (props) => {
    const { items } = props;
console.log(items)
    return (
        <div className="shadow-sm rounded-b-sm px-4">
            {items.map((item) => (
                <div className="flex justify-between border-b last:border-b-0 py-3">
                    <div>{item.name}</div>
                    <div>{item.childes.length !== 0 ? <RightArrow /> : ""}</div>
                </div>
            ))}
        </div>
    );
};

export default LeftSidebar;
