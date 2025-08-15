import Link from 'next/link';
import React, { FC } from 'react';
import SocialMediaList from '../ui/SocialMediaList';

const TopNavbar: FC = () => {
  return (
    <div className="container-fluid  py-4 flex justify-between items-center">
      <p className="font-semibold mb-0">
        Вітаємо в Decorio - в місці втілення ідей!
      </p>
      <div className="flex items-center gap-[20px] divide-x divide-black">
        <p className="font-semibold">
          <span>Телефонуйте нам:</span> +(380)50-691-75-65
        </p>
        <div className="pl-5">
          <SocialMediaList />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
