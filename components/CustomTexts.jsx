'use client';

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";
import styles from "@/styles";


export const TypingText = ({title, textStyles}) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {
      Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant2}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))
      }
  </motion.p>
);

export const TitleText = ({title, textStyles}) => (
  <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className={`mt-[8px] md:text-[64px] text-[40px] text-white font-bold ${textStyles}`}>
    {title}
  </motion.h2>
);
