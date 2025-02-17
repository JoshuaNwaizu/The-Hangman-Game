import React from "react";

interface CardProps {
  title?: string;
  text?: string;
  num?: string;
}

const Card: React.FC<CardProps> = ({ num, title, text }) => {
  return (
    <div className="flex h-[185px] w-[21.25rem] items-center justify-center gap-3.5 rounded-[1.25rem] bg-white px-[2rem] md:w-[42.5rem] md:gap-9 md:rounded-[2.5rem] md:px-[2.5rem] xl:h-[34.375rem;] xl:w-[24rem] xl:flex-col xl:gap-[3.5rem]">
      <span className="text-[5.5rem] leading-[6.6rem] text-[#2463FF] max-sm:hidden">
        {num}
      </span>

      <div className="flex flex-col gap-3.5 md:gap-5 xl:items-center xl:gap-[3.5rem]">
        <h1 className="flex gap-3.5 text-2xl uppercase leading-7 tracking-[0.075rem] text-[#261676]">
          <span className="min-sm:hidden text-[#2463FF]">{num}</span>
          <span className="md:text-[2.5rem] xl:text-[3rem]">{title}</span>
        </h1>
        <article className="text-base leading-[1.2rem] tracking-[.05rem] text-[#887DC0] md:text-[1.25rem] md:leading-[1.5rem] md:tracking-[0.0625rem] xl:text-[1.625rem]">
          {text}
        </article>
      </div>
    </div>
  );
};

export default Card;
