<<<<<<< HEAD
'use client';
import { cn } from '@/lib/utils';
import { useScroll, useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import RightArrow from '@/assets/icons/rightArrow';
import ButtonOutline from './buttons/buttonOutline';
=======
"use client";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import RightArrow from "@/assets/icons/rightArrow";
import ButtonOutline from "./buttons/buttonOutline";
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620

const SectionTitle = ({
  sectionName,
  sectionTitle,
  sectionDesc,
  text_muted,
  bg_muted,
  link,
  button_text,
}) => {
  const [scroll, setScroll] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
<<<<<<< HEAD
    offset: ['start 0.9', 'end 0.0'],
=======
    offset: ["start 0.9", "end 0.0"],
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
  });

  let scrollValue;
  if (scroll) {
<<<<<<< HEAD
    scrollValue = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
=======
    scrollValue = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
  } else {
    scrollValue = useTransform(
      scrollYProgress,
      [0, 0],
<<<<<<< HEAD
      ['0%', `${scrollHeight / 3}px`],
    );
  }
  useEffect(() => {
    document.addEventListener('scroll', () => {
=======
      ["0%", `${scrollHeight / 3}px`]
    );
  }
  useEffect(() => {
    document.addEventListener("scroll", () => {
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScrollHeight(window.scrollY);
        setScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div ref={containerRef} className="overflow-x-hidden">
        <motion.div
<<<<<<< HEAD
          style={{ translateX: scrollValue, transitionDuration: '1s' }}
=======
          style={{ translateX: scrollValue, transitionDuration: "1s" }}
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
        >
          <h1 className="text-transparent webkit-text-stroke-width-1 webkit-text-stroke-primary opacity-20 xl:text-[280px]  lg:text-[200px] md:text-[170px] sm:text-[140px] text-[100px] whitespace-nowrap font-extrabold leading-135 ">
            {sectionName}
          </h1>
        </motion.div>
      </div>
      <div className="container relative">
        <div
          className={cn(
<<<<<<< HEAD
            'xl:-mt-52 -mt-16 xl:ml-12.5 lg:ml-9 md:ml-7 ml-3 after:contents-[""] after:absolute after:left-[12px] after:top-0 after:w-[1px] after:h-full after:bg-primary',
=======
            `xl:-mt-52 -mt-16 xl:ml-12.5 lg:ml-9 md:ml-7 ml-3 after:contents-[""] after:absolute after:left-[12px] after:top-0 after:w-[1px] after:h-full after:bg-primary`
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
          )}
        >
          <h2
            className={cn(
<<<<<<< HEAD
              `[font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110 text-primary-foreground mb-5 ${text_muted}`,
=======
              `[font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110 text-primary-foreground mb-5 ${text_muted}`
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
            )}
          >
            {sectionTitle}
          </h2>
          {/* <h2 className={cn(`[font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110 text-primary-foreground mb-5 ${text_muted}`)} dangerouslySetInnerHTML={{__html:sectionTitle}}/> */}
          <span
            className={cn(`block w-[300px] h-[1px] bg-primary ${bg_muted}`)}
          ></span>
          <div className="flex md:flex-row flex-col justify-between md:items-center">
            <h5
              className={cn(
<<<<<<< HEAD
                `text-primary-foreground lg:text-[35px] sm:text-3xl text-2xl font-semibold mt-4 max-w-[690px] md:mb-0 mb-7 !leading-160 ${text_muted}`,
=======
                `text-primary-foreground lg:text-[35px] sm:text-3xl text-2xl font-semibold mt-4 max-w-[690px] md:mb-0 mb-7 !leading-160 ${text_muted}`
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
              )}
            >
              {sectionDesc}
            </h5>
            {button_text && (
              <Link href={link}>
                <ButtonOutline
                  className={cn(
<<<<<<< HEAD
                    `2sm:px-10 px-3 after:left-0 after:${bg_muted}`,
                  )}
                >
                  {button_text} <RightArrow height={'22'} width={'35'} />{' '}
=======
                    `2sm:px-10 px-3 after:left-0 after:${bg_muted}`
                  )}
                >
                  {button_text} <RightArrow height={"22"} width={"35"} />{" "}
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
                </ButtonOutline>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
