'use client';

import { motion } from "framer-motion";
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import { socials } from '../constants';



const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

      <div className="footer-gradient"/>

      <div className="flex justify-between flex-wrap items-center gap-5">
        <h4 className="text-white md:text-[64px] text-[44px] font-bold">Enter the Metaverse</h4>
        
        <button type="button" className="bg-[#25618B] py-4 px-6 h-fit rounded-[32px] flex items-center gap-[12px]">
          <img src="headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="text-white text-p16px] font-normal">ENTER METAVERSE</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[1px] bg-white opacity-10" />

        <div className="flex justify-between items-center flex-wrap gap-4">
          <h4 className="text-white text-[24px] font-extrabold">METAVERSUS</h4>
          
          <p className="text-[14px] text-white opacity-50 font-normal">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>

          <div className="flex gap-4">
            {
              socials.map((social) => (
                <img key={social.name} src={social.url} alt={social.name} className="w-[24px] h-[24px] object-contain cursor-pointer"  />
              )
            )
              }
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
