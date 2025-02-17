import React from "react";

interface CardProps {
  title?: string;
  text?: string;
  num?: string;
}

const Card: React.FC<CardProps> = ({ num, title, text }) => {
  return (
    <div className="flex h-[185px] w-[21.25rem] flex-col justify-center gap-3.5 rounded-[1.25rem] bg-white px-[2rem]">
      <h1 className="flex gap-3.5 text-2xl uppercase leading-7 tracking-[0.075rem] text-[#261676]">
        <span className="text-[#2463FF]">{num}</span>
        <span>{title}</span>
      </h1>
      <article className="text-base leading-[1.2rem] tracking-[.05rem] text-[#887DC0]">
        {text}
      </article>
    </div>
  );
};

export default Card;
