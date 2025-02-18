import { Link } from "react-router";
import Button from "../components/Button";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <motion.section
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        type: "spring",
        ease: "backInOut",
      }}
      exit={{
        scale: 0,
      }}
      className="flex h-svh items-center justify-center"
    >
      <div className="bg-custom-gradient relative flex h-[29.0625rem] w-[20.25rem] shrink-0 flex-col items-center justify-center gap-[4rem] rounded-[3rem] shadow-[inset_0px_-8px_0px_4px_#140E66,inset_0px_6px_0px_8px_#2463FF] md:h-[31.25rem] md:w-[37rem]">
        <div className="flex translate-y-10 flex-col items-center justify-center gap-[3.5rem]">
          <h1 className="leading-0.5 text-[7rem] tracking-wide">404</h1>
          <h2 className="text-[4rem] tracking-wide">PAGE NOT FOUND</h2>
          <Link to="/">
            <Button name="back to home" className="uppercase" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ErrorPage;
