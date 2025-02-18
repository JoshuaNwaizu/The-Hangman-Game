import { Dispatch } from "@reduxjs/toolkit";
import {
  closeModal,
  resetGame,
  restartGame,
  setGameIndex,
} from "../../features/gameSlice";
import { NavigateFunction } from "react-router";
import { persistor } from "../../store";
type HandleCloseModal = (
  dispatch: Dispatch<any>,
  navigate: NavigateFunction,
  isGuessedComplete: boolean,
  lives: number,
) => void;

type HandleQuitGame = (
  dispatch: Dispatch<any>,
  navigate: NavigateFunction,
) => void;

type HandleNavigateToPickCategory = (
  dispatch: Dispatch<any>,
  navigate: NavigateFunction,
) => void;

const handleCloseModal: HandleCloseModal = (
  dispatch,
  navigate,
  isGuessedComplete,
  lives,
) => {
  if (isGuessedComplete) {
    dispatch(closeModal());
    dispatch(setGameIndex({ navigate }));
    dispatch(restartGame());
  } else if (lives === 0) {
    dispatch(closeModal());
    dispatch(restartGame());
    dispatch(setGameIndex({ navigate }));
  } else {
    dispatch(closeModal());
  }
};
const handleQuitGame: HandleQuitGame = (dispatch, navigate) => {
  dispatch(resetGame());
  persistor.purge();
  navigate("/");
};
const handleNavigateToPickCategory: HandleNavigateToPickCategory = (
  dispatch,
  navigate,
) => {
  dispatch(closeModal());
  navigate("/pick-a-category");
  dispatch(resetGame());
};
const alphaBets = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);
console.log(alphaBets);

export {
  handleCloseModal,
  handleQuitGame,
  handleNavigateToPickCategory,
  alphaBets,
};
