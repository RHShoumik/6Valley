import React from "react";

const LightModeIcon = (props) => {
    const { width = "24", height = "24" } = props;
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 7.25C9.381 7.25 7.25 9.381 7.25 12C7.25 14.619 9.381 16.75 12 16.75C14.619 16.75 16.75 14.619 16.75 12C16.75 9.381 14.619 7.25 12 7.25ZM12 15.25C10.208 15.25 8.75 13.792 8.75 12C8.75 10.208 10.208 8.75 12 8.75C13.792 8.75 15.25 10.208 15.25 12C15.25 13.792 13.792 15.25 12 15.25ZM11.25 5V3C11.25 2.586 11.586 2.25 12 2.25C12.414 2.25 12.75 2.586 12.75 3V5C12.75 5.414 12.414 5.75 12 5.75C11.586 5.75 11.25 5.414 11.25 5ZM12.75 19V21C12.75 21.414 12.414 21.75 12 21.75C11.586 21.75 11.25 21.414 11.25 21V19C11.25 18.586 11.586 18.25 12 18.25C12.414 18.25 12.75 18.586 12.75 19ZM5 12.75H3C2.586 12.75 2.25 12.414 2.25 12C2.25 11.586 2.586 11.25 3 11.25H5C5.414 11.25 5.75 11.586 5.75 12C5.75 12.414 5.414 12.75 5 12.75ZM21.75 12C21.75 12.414 21.414 12.75 21 12.75H19C18.586 12.75 18.25 12.414 18.25 12C18.25 11.586 18.586 11.25 19 11.25H21C21.414 11.25 21.75 11.586 21.75 12ZM5.10599 6.16599C4.81299 5.87299 4.81299 5.39801 5.10599 5.10501C5.39899 4.81201 5.87399 4.81201 6.16699 5.10501L7.58099 6.51901C7.87399 6.81201 7.87399 7.28699 7.58099 7.57999C7.43499 7.72599 7.24299 7.79999 7.05099 7.79999C6.85899 7.79999 6.667 7.72699 6.521 7.57999L5.10599 6.16599ZM18.894 17.834C19.187 18.127 19.187 18.602 18.894 18.895C18.748 19.041 18.556 19.115 18.364 19.115C18.172 19.115 17.98 19.042 17.834 18.895L16.42 17.481C16.127 17.188 16.127 16.713 16.42 16.42C16.713 16.127 17.188 16.127 17.481 16.42L18.894 17.834ZM7.58099 16.419C7.87399 16.712 7.87399 17.187 7.58099 17.48L6.16699 18.894C6.02099 19.04 5.82899 19.114 5.63699 19.114C5.44499 19.114 5.25299 19.041 5.10699 18.894C4.81399 18.601 4.81399 18.126 5.10699 17.833L6.521 16.419C6.813 16.126 7.28799 16.126 7.58099 16.419ZM16.419 7.58099C16.126 7.28799 16.126 6.81299 16.419 6.51999L17.833 5.10599C18.126 4.81299 18.601 4.81299 18.894 5.10599C19.187 5.39899 19.187 5.87399 18.894 6.16699L17.48 7.58099C17.334 7.72699 17.142 7.80099 16.95 7.80099C16.758 7.80099 16.566 7.72699 16.419 7.58099Z"
                fill="#25314C"
            />
        </svg>
    );
};

export default LightModeIcon;
