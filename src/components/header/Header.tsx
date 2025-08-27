'use client';
import React, { FC, useEffect } from 'react';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';
import MobileNavbar from './mobileNavbar';

const Header: FC = () => {
  return (
    <>
      <header className="absolute z-40 top-0 left-0 w-full bg-gray overflow-x-clip header-one">
        <div className="hidden lg:block">
          <TopNavbar />
        </div>

        <div className="border-border border-t border-b hidden lg:block">
          <div className="container-fluid">
            <BottomNavbar linkColor="text-primary-foreground" />
          </div>
        </div>

        <div className="lg:hidden block ">
          <MobileNavbar />
        </div>
      </header>
    </>
  );
};

export default Header;
