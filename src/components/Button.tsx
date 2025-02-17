import React from "react";

interface ButtonProps {
  name?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ name, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} inline-flex items-center justify-center rounded-[2.5rem] bg-[#2463FF] px-[4rem] py-[0.75rem] text-[2rem] leading-[2.4rem] tracking-[0.1rem] text-white shadow-[inset_0px_-2px_0px_3px_#140E66,inset_0px_1px_0px_6px_#3C74FF]`}
    >
      {name}
    </button>
  );
};

export default Button;
