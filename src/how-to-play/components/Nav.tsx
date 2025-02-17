import { Link } from "react-router";
import IconBack from "./IconBack";
import React from "react";

interface NavProp {
  img?: string;
}
const Nav: React.FC<NavProp> = ({ img }) => {
  return (
    <nav className="fixed left-0 top-3 z-10 flex h-[4.5rem] w-full justify-center backdrop-blur-sm">
      <div className="flex w-[21.25rem] shrink-0 items-center justify-between text-white">
        <Link to="/">
          <IconBack />
        </Link>

        <img src={img} className="h-[50px]" alt="how to play" />
      </div>
    </nav>
  );
};

export default Nav;
