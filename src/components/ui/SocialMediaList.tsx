import Link from 'next/link';
import React, { FC } from 'react';

const SocialMediaList: FC = () => {
  return (
    <ul className="flex items-center gap-7.5">
      <li>
        <Link
          href=""
          className='font-semibold text-lg relative after:contents-[""] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] hover-underline'
        >
          <span>FB</span>
        </Link>
      </li>
      <li>
        <Link
          href=""
          className='font-semibold text-lg relative after:contents-[""] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] hover-underline'
        >
          <span>IN</span>
        </Link>
      </li>
      <li>
        <Link
          href=""
          className='font-semibold text-lg relative after:contents-[""] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] hover-underline'
        >
          <span>TG</span>
        </Link>
      </li>
      <li>
        <Link href="" className="font-semibold text-lg hover-underline">
          <span>VI</span>
        </Link>
      </li>
    </ul>
  );
};

export default SocialMediaList;
