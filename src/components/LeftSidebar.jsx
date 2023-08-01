import React from "react";

import RightArrow from "@/assets/svgIcons/RightArrow";
import DropdownRight from "./DropdownRight";

const LeftSidebar = (props) => {
    const { items } = props;
    return (
        <div className="shadow-sm rounded-b-sm px-4 mx-2">
            {items.slice(0,8).map((item) => (
                <div className="flex justify-between border-b last:border-b-0 py-3" key={item.id}>
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
