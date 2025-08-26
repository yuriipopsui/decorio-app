<<<<<<< HEAD
import React from 'react';
import { cn } from '@/lib/utils';

const TextAreaFiled = ({ placeholder, className, ...props }) => {
  return (
    <textarea
      {...props}
      placeholder={placeholder}
      required
      className={cn(
        `px-[15px] py-[14px] outline-none border-[2px] border-primary w-full bg-transparent ${className} `,
      )}
    />
  );
};

export default TextAreaFiled;
=======
import { cn } from '@/lib/utils'
import React from 'react'

const TextAreaFiled = ({placeholder, className, ...props}) => {
    return (
        <textarea {...props} placeholder={placeholder} required className={cn(`px-[15px] py-[14px] outline-none border-[2px] border-primary w-full bg-transparent ${className} `)} />
    )
}

export default TextAreaFiled
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
