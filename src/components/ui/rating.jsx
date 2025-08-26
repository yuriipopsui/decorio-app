<<<<<<< HEAD
import React from 'react';
import { IoStarHalf, IoStarSharp, IoStarOutline } from 'react-icons/io5';
=======
import React from "react";
import { IoStarHalf, IoStarSharp, IoStarOutline } from "react-icons/io5";
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620

const Rating = ({ star }) => {
  const starRating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <li key={index}>
        {star >= index + 1 ? (
          <IoStarSharp className="text-primary-foreground cursor-pointer" />
        ) : star >= number ? (
          <IoStarHalf className="text-primary-foreground cursor-pointer" />
        ) : (
          <IoStarOutline className="text-primary-foreground cursor-pointer" />
        )}
      </li>
    );
  });
  return <ul className="flex ">{starRating}</ul>;
};

<<<<<<< HEAD
export default Rating;
=======
export default Rating;
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
