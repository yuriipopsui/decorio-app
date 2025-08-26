<<<<<<< HEAD
'use client';
import React from 'react';
import { ReactTyped } from 'react-typed';

const TextTyped = ({ text }) => {
  return (
    <ReactTyped
      strings={text}
      typeSpeed={100}
      loop
      backSpeed={20}
      cursorChar="_"
      showCursor={true}
    />
  );
};

export default TextTyped;
=======
"use client"
import React from 'react'
import { ReactTyped } from 'react-typed'

const TextTyped = ({text}) => {
    return (
        <ReactTyped
            strings={text}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar="_"
            showCursor={true}
        />
    )
}

export default TextTyped
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
