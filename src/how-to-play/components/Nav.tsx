import { Link } from "react-router";
import IconBack from "./IconBack";
import React from "react";
import { motion } from "framer-motion";
interface NavProp {
  img?: string;
}
const Nav: React.FC<NavProp> = ({ img }) => {
  const leftButtonVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const rightButtonVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <nav className="fixed left-0 top-3 z-10 flex h-[4.5rem] w-full justify-center backdrop-blur-sm md:top-[3rem] md:justify-center">
      <motion.div
        initial={{ x: "-50vw", scale: 0 }}
        animate={{ x: "0vw", scale: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 200, // Increased stiffness for a faster animation
          damping: 10,
          delay: 0.5,
        }}
        className="flex w-[21.25rem] shrink-0 items-center justify-between text-white md:w-[42.5rem] md:justify-normal md:gap-[4rem] xl:w-[75.75rem] xl:gap-[22rem]"
      >
        <Link to="/">
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.115 }}
            initial="initial"
            animate="animate"
            variants={leftButtonVariants}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <IconBack />
          </motion.div>
        </Link>

        <motion.img
          initial="initial"
          animate="animate"
          variants={rightButtonVariants}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          src={img}
          className="h-[3.125rem] md:h-[6rem]"
          alt="how to play"
        />
      </motion.div>
    </nav>
  );
};

export default Nav;
