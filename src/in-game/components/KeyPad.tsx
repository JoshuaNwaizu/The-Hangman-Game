import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  decrementLives,
  guessLetter,
  setDisableKey,
} from "../../features/gameSlice";
import { useEffect } from "react";

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
    <div className="w-[21.25rem]">
      <div className="grid grid-cols-9 gap-2 gap-y-[2rem]">
        {alphaBets.map((letter, i) => (
          <button
            disabled={disableKey.includes(letter)}
            key={i}
            onClick={() => handleClick(letter)}
            className={`${disableKey.includes(letter) ? "opacity-[0.25]" : null} flex h-[4.125rem] w-[2rem] items-center justify-center rounded-[0.5rem] bg-[#FFF] text-[1.5rem] uppercase leading-[3rem] tracking-[.13rem] text-[#261676]`}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeyPad;
