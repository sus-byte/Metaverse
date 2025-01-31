'use client';

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";



const InsightCard = ({imgUrl, title, subtitle, index}) => (
  <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1)} className="flex md:flex-row flex-col gap-4">
    <img src={imgUrl} alt="insight img" className="md:w-[270px] w-full h-[200px] rounded-[32px] object-cover" />

    <div className="w-full flex justify-between items-center gap-[8px]">
      <div className="flex-1 flex flex-col md:ml-[62px] max-w-[650px]">
        <h4 className="text-white font-bold lg:text-[34px] text-[26px]">
          {title}
        </h4>

        <p className="text-secondary-white font-normal lg:text-[20px] text-[14px] mt-[16px]">
          {subtitle}
        </p>
      </div>

      <div className="w-[100px] h-[100px] rounded-full border-[1px] border-white lg:flex hidden items-center justify-center ml-[12px]">
          <img src="/arrow.svg" alt="arrow" className="object-contain w-[40%] h-[40%]"  />
      </div>
    </div>
    </motion.div>
);

export default InsightCard;
