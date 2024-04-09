import Link from "next/link"

export const Button = ({ styles, text, link }) => {
  return (
    <Link href={`/${link}`} aria-label={link}>
      <button type="button" className={`py-4 px-6 bg-blue-gradient font-popins font-medium xs:text-[16px] xl:text-[18px] text-primary outline-none rounded-lg ${styles}`}>
        {text}
      </button>
    </Link>
  );
};

export const ButtonTwo = ({ styles, text, link }) => {
  return (
    <Link href={`/${link}`} aria-label={link}>
      <button type="button" className={`py-4 px-6 bg-blue-gradient font-popins font-medium xs:text-[16px] xl:text-[18px] text-primary outline-none rounded-lg ${styles}`}>
        {text}
      </button>
    </Link>
  );
};

export const ButtonThree = ({ styles, text, link }) => {
  return (
    <Link href={`/${link}`} aria-label={link}>
      <button type="button" className={`py-4 px-6 bg-blue-gradient font-popins font-medium xs:text-[16px] xl:text-[18px] text-primary outline-none rounded-lg ${styles}`}>
        {text}
      </button>
    </Link>
  );
};

