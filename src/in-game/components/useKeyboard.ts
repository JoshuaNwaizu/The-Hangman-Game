import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  decrementLives,
  guessLetter,
  setDisableKey,
} from "../../features/gameSlice";
import { useEffect } from "react";

const useKeyboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedCategory, gameIndex, disableKey, showAnswer } = useSelector(
    (state: RootState) => state.game,
  );
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (showAnswer) return;

      const key = event.key.toLowerCase();

      if (/^[a-z]$/.test(key)) {
        if (disableKey.includes(key)) return;

        dispatch(guessLetter(key));

        if (!selectedCategory[gameIndex].name.toLowerCase().includes(key)) {
          dispatch(decrementLives());
        }

        dispatch(setDisableKey([...disableKey, key]));
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [dispatch, selectedCategory, gameIndex, disableKey, showAnswer]);
};

export default useKeyboard;
