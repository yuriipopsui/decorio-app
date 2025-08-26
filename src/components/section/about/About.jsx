<<<<<<< HEAD
'use client';
import React from 'react';
// import Image from 'next/image';
import { motion } from 'framer-motion';
import about_img from '@/assets/images/about-image.jpg';
import SectionTitle from '../../ui/sectionTitle';
import { cardSlideAnimation, cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import SectionSidebarImg from '@/components/ui/sectionSidebarImg';

const aboutList = [
  {
    id: '01',
    item: 'Innovation Beyond Boundaries',
    item_desc:
      'We thrive on challenging the norms, infusing each project with fresh, innovative perspectives that defy convention.',
  },
  {
    id: '02',
    item: 'Visionaries at Work',
    item_desc:
      'We thrive on challenging the norms, infusing each project with fresh, innovative perspectives that defy convention.',
  },
  {
    id: '03',
    item: 'Awards and Acclaim',
    item_desc:
      'We thrive on challenging the norms, infusing each project with fresh, innovative perspectives that defy convention.',
=======
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import about_img from "@/assets/images/about-image.jpg";
import SectionTitle from "../../ui/sectionTitle";
import { cardSlideAnimation, cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import SectionSidebarImg from "@/components/ui/sectionSidebarImg";

const aboutList = [
  {
    id: "01",
    item: "Innovation Beyond Boundaries",
    item_desc:
      "We thrive on challenging the norms, infusing each project with fresh, innovative perspectives that defy convention.",
  },
  {
    id: "02",
    item: "Visionaries at Work",
    item_desc:
      "We thrive on challenging the norms, infusing each project with fresh, innovative perspectives that defy convention.",
  },
  {
    id: "03",
    item: "Awards and Acclaim",
    item_desc:
      "We thrive on challenging the norms, infusing each project with fresh, innovative perspectives that defy convention.",
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
  },
];
const About = ({ text_muted, bg_muted }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.0,
    triggerOnce: true,
  });
  return (
    <section className="pt-20">
<<<<<<< HEAD
      <div className=" relative container-fluid ">
        <SectionTitle
          className="relative"
          sectionName={'Про нас'}
          sectionTitle={'Наші основи'}
          sectionDesc={
            'Crafting Architectural Masterpieces and Designing Interior Wonders'
=======
      <div className="container-fluid ">
        <SectionTitle
          sectionName={"Про нас"}
          sectionTitle={"Наші основи"}
          sectionDesc={
            "Crafting Architectural Masterpieces and Designing Interior Wonders"
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
          }
          text_muted={text_muted}
          bg_muted={bg_muted}
        />
        <div
          className={cn(
<<<<<<< HEAD
            `bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0 ${bg_muted}`,
=======
            `bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0 ${bg_muted}`
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
          )}
        >
          <div className="container">
            <div className="flex lg:flex-row flex-col items-center gap-[66px]">
              <SectionSidebarImg
                img={about_img}
<<<<<<< HEAD
                section_name={'about-bg'}
=======
                section_name={"about-bg"}
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
                className="md:-mt-25 -mt-[470px] -mb-25"
              />
              <ul className="lg:mt-0 mt-20 lg:pb-0 pb-10">
                {aboutList.map(({ id, item, item_desc }) => {
                  return (
                    <li
                      key={id}
                      className="lg:flex gap-10 pb-10 last:pb-0 justify-between"
                    >
                      <svg
                        ref={ref}
                        strokeWidth="1"
                        className={`h-[65px] w-20 relative -top-2 left-3 xl:text-6xl text-5xl mb-3 lg:mb-0 inline-block font-extrabold leading-120  ${
                          inView
<<<<<<< HEAD
                            ? 'animate-text-line-animation stroke-secondary stroke-dasharray-1000 stroke-dashoffset-1000'
                            : ' fill-transparent stroke-secondary '
=======
                            ? "animate-text-line-animation stroke-secondary stroke-dasharray-1000 stroke-dashoffset-1000"
                            : " fill-transparent stroke-secondary "
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
                        }`}
                      >
                        <text x="0%" dominantBaseline="middle" y="70%">
                          {id}
                        </text>
                      </svg>
                      <div className="max-w-[534px]">
                        <h4 className="text-3xl 2sm:text-4xl font-bold leading-135 text-secondary-foreground">
                          {item}
                        </h4>
                        <p className="text-lg text-secondary-foreground font-normal">
                          {item_desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
