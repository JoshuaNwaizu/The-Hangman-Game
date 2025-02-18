import { useParams } from "react-router";
import Menu from "./Menu";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/gameSlice";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const { category } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [animateLifeBar, setAnimateLifeBar] = useState<boolean>(false);
  const { lives } = useSelector((state: RootState) => state.game);
  const [lifeBarWidth, setLifeBarWidth] = useState<string>("");

  useEffect(() => {
    const updateWidth = () => {
      let widths = `${(lives / 8) * 3.06}rem`;
      if (window.innerWidth >= 480) {
        widths = `${(lives / 8) * 3.06}rem`;
      }

      if (window.innerWidth >= 720) {
        widths = `${(lives / 8) * 8.56}rem`;
      }
      if (window.innerWidth >= 1024) {
        widths = `${(lives / 8) * 13.56}rem`;
      }

      setLifeBarWidth(widths);
    };

    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [lives]);
  useEffect(() => {
    // Trigger animation when lives change
    setAnimateLifeBar(true);
    const timer = setTimeout(() => {
      setAnimateLifeBar(false);
    }, 500); // Duration of the animation

    return () => clearTimeout(timer);
  }, [lives]);
  return (
    <nav className="fixed left-0 top-3 z-10 flex h-[4.5rem] w-full justify-center backdrop-blur-sm md:top-[2rem]">
      <div className="flex w-[21.25rem] shrink-0 items-center justify-between md:w-[42.5rem] xl:w-[73.3125rem]">
        <div className="flex items-center gap-4 md:gap-7">
          <Menu onClick={() => dispatch(openModal())} />
          <h2 className="text-[2.5rem] capitalize leading-[3rem] tracking-[-0.0125rem] text-white md:text-[3rem] md:leading-[3.6rem] md:tracking-[0.15rem] xl:text-[5.5rem] xl:leading-[6.6rem]">
            {category}
          </h2>
        </div>

        <div className="flex items-center gap-4 md:gap-7">
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{
              scaleX: animateLifeBar ? 1.2 : 1,
              scaleY: animateLifeBar ? 1.2 : 1,
            }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            className="flex w-[3.5625rem] items-start rounded-[6rem] bg-white p-[0.25rem] md:w-[10rem] md:px-[0.69rem] md:py-[0.56rem] xl:w-[15rem]"
          >
            <div
              style={{ width: lifeBarWidth }}
              className="h-[0.5rem] shrink-0 rounded-[6rem] bg-[#261676] transition-all duration-200 ease-in md:h-[0.8rem]"
            ></div>
          </motion.div>
          <span>
            <img
              src="/images/icon-heart.svg"
              alt="heart"
              className="h-[1.5rem] w-[1.63488rem] md:h-[3.3rem] md:w-[3.3rem]"
            />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
