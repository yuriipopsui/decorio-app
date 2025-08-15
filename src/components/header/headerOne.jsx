'use client';
import React, { useEffect } from 'react';
import TopNavbar from './topNavbar';
import BottomNavbar from './bottomNavbar';
import MobileNavbar from './mobileNavbar';

const HeaderOne = () => {
  return (
    <>
      <header className="absolute z-40 top-0 left-0 w-full bg-gray overflow-x-clip header-one">
        <div className="hidden lg:block">
          <TopNavbar />
        </div>

        <div className="border-border border-t border-b hidden lg:block">
          <div className="container-fluid">
            <BottomNavbar />
          </div>
        </div>

        <div className="lg:hidden block ">
          <MobileNavbar />
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
