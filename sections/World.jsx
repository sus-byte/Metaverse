'use client';

import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "@/components";


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the road" textStyles="text-center" />
      <TitleText title={(<>Track friends around you and invite them to play together in the same
        world</>)} textStyles="text-center" />
      
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[68px] relative flex w-full h-auto"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 bg-[#5D6680] p-[6px] h-[70px] w-[70px] rounded-full">
          <img src="/people-01.png" alt="people-01" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 bg-[#5D6680] p-[6px] h-[70px] w-[70px] rounded-full">
          <img src="/people-02.png" alt="people-02" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] bg-[#5D6680] p-[6px] h-[70px] w-[70px] rounded-full">
          <img src="/people-03.png" alt="people-03" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
