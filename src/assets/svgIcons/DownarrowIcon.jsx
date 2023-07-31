import React from "react";

const DownarrowIcon = (props) => {
    const { width = "22", height = "22" } = props;
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.698 15.396L6.3181 10.2019C5.5821 9.3289 6.20603 8 7.35203 8H16.6479C17.7939 8 18.4179 9.3299 17.6819 10.2019L13.302 15.396C12.623 16.201 11.377 16.201 10.698 15.396Z"
                fill="#000"
            />
        </svg>
    );
};

export default DownarrowIcon;
