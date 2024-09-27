'use client';

import { motion } from "framer-motion";
import styles from "@/styles";
import {fadeIn } from "@/utils/motion";


const ExploreCard = ({id, imgUrl, title, index, active, handleClick}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex:[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[550px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img src={imgUrl} alt="img" className="w-full h-full absolute rounded-[24px] object-cover" />

    {
      active !== id ? (
        <h3 className="text-white absolute z-0 sm:text-[26px] text-[18px] font-semibold lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">{title}</h3>
      ) : (
          <div className="absolute bottom-0 p-8 bg-[rgba(0,0,0,0.5)] w-full justify-start flex-col rounded-b-[24px]">
            <div className={`glassmorphism w-[60px] h-[60px] mb-[16px] rounded-[24px] ${styles.flexCenter}`}>
                  <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain" />
            </div>
            <p className="text-[16px] font-normal leading-[20px] uppercase text-white">Enter the metaverse</p>
            <h2 className="mt-[24px] sm:text-[32px] text-[24px] text-white font-semibold">{title}</h2>
          </div>
      )
    }
  </motion.div>
);

export default ExploreCard;
