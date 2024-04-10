import Link from "next/link"
import Image from 'next/image'

export const Button = ({ text, link }) => {
  return (
    <Link href={`/${link}`} aria-label={link}>
      <button type="button" className={`py-4 px-6 bg-blue-gradient font-popins font-medium xs:text-[16px] xl:text-[18px] text-primary outline-none rounded-lg ${styles}`}>
        {text}
      </button>
    </Link>
  );
};

export const ButtonTwo = ({ text, link }) => {
  return (
    <Link href={`/${link}`} aria-label={link}>
      <button type="button" className={`py-4 px-6 bg-blue-gradient font-popins font-medium xs:text-[16px] xl:text-[18px] text-primary outline-none rounded-lg ${styles}`}>
        {text}
      </button>
    </Link>
  );
};

export const ButtonThree = ({ text, link, image }) => {
  return (
    <Link href={`/${link}`} aria-label={link}>
      <button type="button" className={`py-2 px-4 gap-x-2 bg-blue bg-button-three font-inter font-medium text-[13px] text-secondary outline-none rounded-lg flex`}>
        {text} <Image src={image} className="fill-white mt-0.5" alt="arrow" width="16" height="16" />
      </button>
    </Link>
  );
};

