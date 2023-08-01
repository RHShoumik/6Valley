import React from "react";

import RightArrow from "@/assets/svgIcons/RightArrow";
import DropdownRight from "./DropdownRight";

const LeftSidebar = (props) => {
    const { items } = props;
    console.log(items);
    return (
        <div className="shadow-sm rounded-b-sm px-4">
            {items.map((item) => (
                <div className="flex justify-between border-b last:border-b-0 py-3">
                    <div className="text-white dark:text-darkBg">
                        {item.name}
                    </div>
                    <div>
                        {item.childes.length !== 0 ? (
                            <DropdownRight
                            items={item.childes}
                                rightIcon={
                                    <RightArrow className="text-white dark:text-secondary" />
                                }
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeftSidebar;
