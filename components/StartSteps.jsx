import styles from "@/styles";

const StartSteps = ({number, text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} bg-[#323F5D] w-[70px] h-[70px] rounded-[24px]`}>
      <p className="text-[20px] text-white font-bold">0{number}</p>
    </div>

    <p className="ml-[30px] flex-1 text-[18px] text-[#B0B0B0] leading-[32.4px] font-normal">
      {text}
    </p>
  </div>
);

export default StartSteps;
