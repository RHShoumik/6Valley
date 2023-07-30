import React from 'react'
import TopNavigation from './TopNavigation';
import SearchNavigation from './SearchNavigation';
import BottomNavigation from './BottomNavigation';

const Header = () => {
  return (
    <div>
        <TopNavigation />
        <SearchNavigation />
        <BottomNavigation />
    </div>
  )
}

export default Header;