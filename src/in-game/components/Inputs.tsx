import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { fetchData } from "../../features/dataSlice";
import { isGuessed, openModal } from "../../features/gameSlice";
import { motion } from "framer-motion";

const Inputs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [hasWon, setHasWon] = useState<boolean>(false);
  const { selectedCategory, guessLetters, isGuessedComplete, gameIndex } =
    useSelector((state: RootState) => state.game);
  const { data, loading } = useSelector((state: RootState) => state.data);

  const [category, setCategory] = useState(
    selectedCategory[gameIndex]?.name.toLocaleLowerCase().split(" "),
  );
  console.log("check for category", category);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (
      selectedCategory &&
      selectedCategory.length > 0 &&
      selectedCategory[gameIndex]
    ) {
      setCategory(
        selectedCategory[gameIndex].name.toLocaleLowerCase().split(" "),
      );
    } else {
      setCategory([]);
    }
    setHasWon(false);
  }, [selectedCategory, gameIndex]);

  useEffect(() => {
    // Check if all  letters have been guessed
    const allLetters = category.join("").split("");
    const uniqueLetters = [...new Set(allLetters)].filter(
      (letter) => letter !== " ",
    );
    const allGuessed = uniqueLetters.every((letter) =>
      guessLetters.includes(letter),
    );

    if (allGuessed && !hasWon) {
      dispatch(openModal());
      dispatch(isGuessed(true));
      setHasWon(true);
    }

    console.log("isguess true", isGuessedComplete);
  }, [guessLetters, dispatch, hasWon]);

  if (loading) {
    return <p className="mt-[8rem]">Loading...</p>;
  }
  if (!data) {
    return <p>No data available</p>;
  }

  console.log(guessLetters);
  console.log("game index", gameIndex);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 8 }}
      className="mt-[8rem] flex h-auto w-[21.25rem] flex-wrap items-center justify-center text-white md:mt-[13rem] md:w-[42.5rem] xl:w-[73.3125rem]"
    >
      <div className="flex flex-col flex-wrap items-center justify-center gap-3">
        {category.map((category) => (
          <p className="flex flex-wrap items-center justify-center gap-[0.6rem] xl:gap-[1rem]">
            {category.split("").map((letter) => (
              <motion.span
                className={` ${guessLetters.includes(letter) ? "bg-[#2463FF] text-white" : "bg-[#2463FF] text-transparent opacity-[0.25]"} flex h-[4.125rem] w-[2.5rem] items-center justify-center rounded-[0.75rem] text-[2.5rem] uppercase leading-[3rem] tracking-[.13rem] shadow-[inset_0px_-2px_0px_3px_#140E66,inset_0px_1px_0px_6px_#3C74FF] md:h-[7rem] md:w-[5.5rem] md:rounded-[2rem] md:text-[4rem] md:leading-[4.8rem] md:tracking-[.2rem] xl:text-[5.5rem]`}
              >
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ scale: guessLetters.includes(letter) ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {letter}
                </motion.span>
              </motion.span>
            ))}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default Inputs;
