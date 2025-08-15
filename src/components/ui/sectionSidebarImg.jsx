'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cardSlideAnimation } from '@/lib/utils';
import Image from 'next/image';
const SectionSidebarImg = ({ img, section_name, className }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardSlideAnimation()}
      viewport={{ once: true, amount: 0.2 }}
      className={`relative ${className}`}
    >
      <div className="relative w-full h-[500px]">
        <Image
          className="object-cover"
          src={img}
          loading="lazy"
          placeholder="blur"
          width={'auto'}
          height={'auto'}
          alt={section_name}
        />
      </div>
    </motion.div>
  );
};

export default SectionSidebarImg;
