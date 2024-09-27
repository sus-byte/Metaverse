import styles from "@/styles";

const NewFeatures = ({imgUrl, title, subtitle}) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`w-[70px] h-[70px] bg-[#323f5d] ${styles.flexCenter} rounded-[24px]`}>
        <img src={imgUrl} alt="img" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h2 className="text-white font-bold mt-[26px] text-[24px] leading-[30.24px]">{title}</h2>
    <p className="text-[#B0B0B0] text-[18px] mt-[16px] flex-1 font-normal leading-[32.4px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
