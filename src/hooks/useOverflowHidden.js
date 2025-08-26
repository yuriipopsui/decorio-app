<<<<<<< HEAD
import { useEffect } from 'react';

const useOverflowHidden = (state) => {
  useEffect(() => {
    const winBar = window.innerWidth - document.body.clientWidth;
    if (state) {
      if (winBar === winBar) {
        document.body.style.marginRight = `${winBar}px`;
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.marginRight = '0px';
    }
  }, [state]);
};

export default useOverflowHidden;
=======
import React, { useEffect } from 'react'

const useOverflowHidden = (state) => {
    useEffect(() => {
        const winBar = window.innerWidth - document.body.clientWidth;
        if (state) {
            if (winBar === winBar) {
                document.body.style.marginRight = `${winBar}px`;
            }
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto"
            document.body.style.marginRight = "0px"
        }



    }, [state])
}

export default useOverflowHidden
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
