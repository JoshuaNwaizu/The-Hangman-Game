import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainData } from "../category/Category";

interface GameState {
  selectedCategory: MainData[];
  guessLetters: string[];
  lives: number;
  toggleModal: boolean;
  isGameWon: boolean;
  gameIndex: number;
  isGuessedComplete: boolean;
  disableKey: string[];
}

const initialState: GameState = {
  selectedCategory: [],
  guessLetters: [],
  lives: 5,
  gameIndex: 0,
  toggleModal: false,
  isGameWon: false,
  isGuessedComplete: false,
  disableKey: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<MainData[]>) {
      state.selectedCategory = action.payload;
      state.isGameWon = false;
    },
    guessLetter(state, action: PayloadAction<string>) {
      if (!state.guessLetters.includes(action.payload)) {
        state.guessLetters.push(action.payload);
      }
      console.log("the guessed letter is:", state.guessLetters);
    },
    decrementLives(state) {
      state.lives = Math.max(state.lives - 1, 0);
      if (state.lives === 0) {
        state.toggleModal = true;
      }
    },
    isGuessed(state, action: PayloadAction<boolean>) {
      state.isGuessedComplete = action.payload;
    },
    openModal(state) {
      state.toggleModal = true;
    },
    closeModal(state) {
      state.toggleModal = false;
      state.isGuessedComplete = false;
    },
    setDisableKey(state, action: PayloadAction<string[]>) {
      state.disableKey = action.payload;
    },
    setGameIndex(
      state,
      action: PayloadAction<{ navigate: (path: string) => void }>,
    ) {
      if (state.gameIndex + 1 < state.selectedCategory.length) {
        state.gameIndex++;
      } else {
        state.selectedCategory = [];
        state.guessLetters = [];
        state.lives = 5;
        state.gameIndex = 0;
        state.toggleModal = false;
        state.isGameWon = false;
        state.isGuessedComplete = false;
        action.payload.navigate("/pick-a-category");
      }
    },
    restartGame(state) {
      state.guessLetters = [];
      state.lives = 5;
      state.isGameWon = false;
      state.isGuessedComplete = false;
      state.disableKey = [];
    },

    resetGame(state) {
      state.selectedCategory = [];
      state.guessLetters = [];
      state.lives = 5;
      state.gameIndex = 0;
      state.toggleModal = false;
      state.isGameWon = false;
      state.isGuessedComplete = false;
    },
  },
});

export const {
  setSelectedCategory,
  guessLetter,
  decrementLives,
  openModal,
  resetGame,
  isGuessed,
  closeModal,
  setGameIndex,
  restartGame,
  setDisableKey,
} = gameSlice.actions;

export default gameSlice.reducer;
