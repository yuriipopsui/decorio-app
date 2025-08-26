<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
import { useSwiper } from 'swiper/react';
import RightArrow from '@/assets/icons/rightArrow';

const SwiperNavigation = () => {
<<<<<<< HEAD
  const swiper = useSwiper();

  return (
    <div className="flex items-center gap-[22px]">
      <button
        onClick={() => swiper.slidePrev()}
        className="text-primary-foreground rotate-180"
      >
        {' '}
        <RightArrow width={'35'} height={'22'} />{' '}
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="text-primary-foreground"
      >
        {' '}
        <RightArrow width={'35'} height={'22'} />{' '}
      </button>
    </div>
  );
};

export default SwiperNavigation;
=======
    const swiper = useSwiper();

    return (
        <div className='flex items-center gap-[22px]'>
            <button onClick={() => swiper.slidePrev()} className='text-primary-foreground rotate-180'> <RightArrow width={"35"} height={"22"} /> </button>
            <button onClick={() => swiper.slideNext()} className='text-primary-foreground'> <RightArrow width={"35"} height={"22"} /> </button>
        </div>
    )
}

export default SwiperNavigation
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
