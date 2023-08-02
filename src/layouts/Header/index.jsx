import React from "react";

import TopNavigation from "./TopNavigation";
import SearchNavigation from "./SearchNavigation";
import BottomNavigation from "./BottomNavigation";
import SocialNavigation from "./SocialNavigation";

const Header = () => {
    return (
        <div>
            <TopNavigation />
            <SocialNavigation />
            <SearchNavigation />
            <BottomNavigation />
        </div>
    );
};

export default Header;
