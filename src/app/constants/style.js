const styles = {
  boxWidth: "w-full l:max-w-[1440px]",

  heading: "font-inter font-medium text-[44px] m:text-[60px] tracking-tighter text-white leading-10 w-full",
  headingServices: "font-inter font-medium text-[30px] m:text-[50px] tracking-tighter text-white leading-10 w-full",
  heading2: "font-inter font-semibold text-[30px] m:text-[50px] tracking-tighter text-white leading-10 w-full",
  heading2Partners: "font-inter font-normal text-[38px] m:text-[50px] leading-[36px] m:leading-[60px] w-full",
  heading3: "font-inter font-medium text-[18px] text-gradient leading-7 w-full",
  heading3Monitoreo: "font-inter font-normal text-[24px] text-gradient max-w-[250px] mx-auto leading-7 w-full",
  heading3Contact: "font-inter font-medium text-[30px] text-white leading-7 w-full",
  heading3MainCard: "font-inter text-[10.5px] text-white w-full",
  heading3White: "font-inter font-normal text-[18px] text-secondary leading-7 w-full",
  paragraph: "font-inter font-normal text-dimWhite text-[16px] leading-[24px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "s:px-16 px-6",
  paddingY: "py-6 m:py-0 l:py-16",
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