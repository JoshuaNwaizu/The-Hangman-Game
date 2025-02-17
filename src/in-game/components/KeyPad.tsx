import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  decrementLives,
  guessLetter,
  setDisableKey,
} from "../../features/gameSlice";
import { useEffect } from "react";
import { motion } from "framer-motion";

const alphaBets = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);
console.log(alphaBets);
const KeyPad = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedCategory, gameIndex, disableKey } = useSelector(
    (state: RootState) => state.game,
  );

  useEffect(() => {
    dispatch(setDisableKey([]));
  }, [dispatch, selectedCategory, gameIndex]);

  const handleClick = (letter: string) => {
    if (disableKey.includes(letter)) return;

    dispatch(guessLetter(letter));

    if (!selectedCategory[gameIndex].name.toLowerCase().includes(letter)) {
      dispatch(decrementLives());
    }
    dispatch(setDisableKey([...disableKey, letter]));
  };
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 8 }}
      className="w-[21.25rem] md:w-[42.5rem] xl:w-[73.3125rem]"
    >
      <div className="grid grid-cols-9 gap-2 gap-y-[2rem]">
        {alphaBets.map((letter, i) => (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.115 }}
            transition={{ type: "spring", stiffness: 200, damping: 8 }}
            disabled={disableKey.includes(letter)}
            key={i}
            onClick={() => handleClick(letter)}
            className={`${disableKey.includes(letter) ? "opacity-[0.25]" : null} flex h-[4.125rem] w-[2rem] cursor-pointer items-center justify-center rounded-[0.5rem] bg-[#FFF] text-[1.5rem] uppercase leading-[3rem] tracking-[.13rem] text-[#261676] md:h-[5rem] md:w-[4rem] md:rounded-[1.5rem] md:text-[3rem] md:leading-[3.6rem] md:tracking-[.15rem] xl:w-[6.81rem]`}
          >
            {letter}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default KeyPad;
