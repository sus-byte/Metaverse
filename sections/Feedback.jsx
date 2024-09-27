"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";

const Feedback = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
		>
			<motion.div
				variants={fadeIn("right", "tween", 0.2, 1)}
				className="flex-[0.5] flex flex-col justify-end max-w-[370px] rounded-[32px] border-[1px] border-[#6A6A6A] relative sm:p-8 p-4 gradient-05"
			>
				<div className="feedback-gradient" />

				<div>
					<h4 className="text-white sm:text-[32px] text-[26px] font-bold sm:leading-[40.32px] leading-[36.32px]">
						Samantha
					</h4>
					<p className="text-white sm:text-[18px] text-[12px] font-normal sm:leading-[22.68px] leading-[16.68px] mt-[8px]">
						Founder | Metaversus
					</p>
				</div>

				<p className="mt-[24px] text-white sm:text-[22px] text-[18px] sm:leading-[44px] leading-[38px]">
					“With the development of today's technology, metaverse is very useful
					for today's work, or can be called web 3.0. by using metaverse you can
					use it as anything”
				</p>
			</motion.div>

			<motion.div
				variants={fadeIn("left", "tween", 0.3, 1)}
				className="flex-1 flex justify-center items-center relative"
			>
				<img
					src="/planet-09.png"
					alt="planet-09"
					className="w-full lg:h-[510px] h-auto min-h-[210px] rounded-[40px] object-cover"
        />
        
        <motion.div variants={zoomIn(0.4, 1)} className="absolute lg:block hidden top-[3%] -left-[10%]">
          <img src="/stamp.png" alt="stamp" className="w-[155px] h-[155px] object-contain" />
        </motion.div>
			</motion.div>
		</motion.div>
	</section>
);

export default Feedback;
