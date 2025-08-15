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
  title: "Decorio",
  description: "Decorio - decorative plasters in Your interior",
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

    </>
  )
}

export default Home;