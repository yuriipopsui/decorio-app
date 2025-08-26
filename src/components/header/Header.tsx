<<<<<<< HEAD
'use client';
=======
"use client"
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
import React, { FC, useEffect } from 'react';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';
import MobileNavbar from './mobileNavbar';

const Header: FC = () => {
<<<<<<< HEAD
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
=======

  return (
    <>
      <header className='absolute z-40 top-0 left-0 w-full bg-gray overflow-x-clip header-one'>
        <div className='hidden lg:block'>
          <TopNavbar />
        </div>

        <div className='border-border border-t border-b hidden lg:block'>
          <div className='container-fluid'>
            <BottomNavbar linkColor='text-primary-foreground' />
          </div>
        </div>
        
        <div className='lg:hidden block '>
          <MobileNavbar />
        </div>
      </header >
    </>
  )
}

export default Header;
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
