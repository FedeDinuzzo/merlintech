const styles = {
  boxWidth: "w-full l:max-w-[1400px]",

  heading2: "font-inter font-semibold text-[18px] text-white leading-[27px] w-full",
  paragraph: "font-inter font-normal text-dimWhite text-[16px] leading-[24px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexStartHero: "flex justify-center m:justify-start m:mt-4 l:mt-0 l:justify-center items-start",

  paddingX: "s:px-16 px-6",
  paddingY: "py-6 l:py-0 xl:py-16",
  padding: "s:px-16 px-6 s:py-12 py-4",

  marginX: "s:mx-16 mx-6",
  marginY: "s:my-16 my-6",
};

export const layout = {
  section: `flex m:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex m:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} m:mr-10 mr-0 m:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} m:ml-10 ml-0 m:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;