import React from 'react';
import About from '@/components/section/about/About';
import Gallery from '@/components/section/gallery';
import Banner from '@/components/section/heroes/Banner';
import ServicesSlider from '@/components/section/servicesSlider';
import ProjectsSlider from '@/components/section/projectsSlider';
import Testimonial from '@/components/section/testimonial';
import Counter from '@/components/ui/counter';

import { bannerData } from '@/lib/fackData/bannerData';

export const metadata = {
<<<<<<< HEAD
  title: 'Decorio',
  description: 'Decorio - decorative plasters in Your interior',
=======
  title: "Decorio",
  description: "Decorio - decorative plasters in Your interior",
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
};

const Home = () => {
  return (
    <>
      <Banner data={bannerData} />
      <About />
      <Counter />
      <Gallery />
      <ServicesSlider />

      {/* <VideoPortfolio /> */}
      <ProjectsSlider />
      <Testimonial />
      {/* <ShopSlider data={productData.slice(0, 5)} /> */}
<<<<<<< HEAD
    </>
  );
};

export default Home;
=======

    </>
  )
}

export default Home;
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
