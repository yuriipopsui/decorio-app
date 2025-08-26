<<<<<<< HEAD
import React from 'react';
import { cn } from '@/lib/utils';

const InputFiled = ({ placeholderc, type, className, ...props }) => {
  return (
    <input
      {...props}
      type={type}
      placeholder={placeholderc}
      name={type}
      required
      className={cn(
        `px-[15px] py-[14px] outline-none border-[2px] border-primary w-full bg-transparent ${className} `,
      )}
    />
  );
};

export default InputFiled;
=======
import { cn } from '@/lib/utils'

const InputFiled = ({placeholderc, type, className, ...props }) => {
    return (
        <input {...props} type={type} placeholder={placeholderc} name={type} required className={cn(`px-[15px] py-[14px] outline-none border-[2px] border-primary w-full bg-transparent ${className} `)} />
    )
}

export default InputFiled
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
