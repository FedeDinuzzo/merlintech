import Link from "next/link"
import Image from 'next/image'

export const Button = ({ text, link, image }) => {
  return (
    <Link href={`/${link}`} aria-label={link}>
      <button type="button" className={`py-3 px-[30px] gap-x-3 bg-button font-inter font-medium text-[14px] text-secondary outline-none rounded-[10px] flex cursor-pointer`}>
        {text} <Image src={image} className="fill-white mt-0.5 w-auto h-auto" alt="arrow" width="16" height="16" priority />
      </button>
    </Link>
  );
};

export const ButtonTwo = ({ text, link, image }) => {
  return (
    <Link href={`/${link}`} aria-label={link}>
      <button type="button" className={`py-2 px-4 gap-x-2 border border-1 border-dimWhite font-inter font-medium text-[14px] text-dimWhite opacity-90 rounded-lg flex cursor-pointer`}>
        {text} <Image src={image} className="fill-dimWhite opacity-70 mt-[3px] w-auto h-auto" alt="arrow" width="16" height="16" priority />
      </button>
    </Link>
  );
};

export const ButtonThree = ({ text, link, image }) => {
  return (
    <Link href={`/${link}`} aria-label={link}>
      <button type="button" className={`z-[1000] py-2 px-4 gap-x-2 bg-blue bg-button-three font-inter font-medium text-[13px] text-secondary outline-none rounded-lg flex cursor-pointer`}>
        {text} <Image src={image} className="fill-white mt-0.5 w-auto h-auto" alt="arrow" width="16" height="16" />
      </button>
    </Link>
  );
};

export const ButtonFour = ({ text, link, image }) => {
  return (
    <Link href={`/${link}`} smooth="true" aria-label={link}>
      <button type="button" className={`z-[1000] py-4 px-8 gap-x-2 bg-blue bg-button-four font-inter font-medium text-[14px] text-secondary rounded-[10px] flex cursor-pointer`}>
        {text} <Image src={image} className="fill-white mt-0.5 w-auto h-auto" alt="arrow" width="16" height="16" />
      </button>
    </Link>
  );
};

