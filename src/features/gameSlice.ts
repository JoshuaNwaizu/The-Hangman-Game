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
  showAnswer: boolean;
}

const initialState: GameState = {
  selectedCategory: [],
  guessLetters: [],
  lives: 8,
  gameIndex: 0,
  toggleModal: false,
  isGameWon: false,
  isGuessedComplete: false,
  disableKey: [],
  showAnswer: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<MainData[]>) {
      state.selectedCategory = action.payload.map((item) => ({
        ...item,
        selected: false,
      }));
      const randomInitialIndex = Math.floor(
        Math.random() * state.selectedCategory.length,
      );
      state.isGameWon = false;
      state.selectedCategory[randomInitialIndex].selected = true;
      state.gameIndex = randomInitialIndex;
    },
    guessLetter(state, action: PayloadAction<string>) {
      if (!state.guessLetters.includes(action.payload)) {
        state.guessLetters.push(action.payload);
      }
    },
    decrementLives(state) {
      state.lives = Math.max(state.lives - 1, 0);
      if (state.lives === 0) {
        state.showAnswer = true;
        state.toggleModal = true;
      }
    },
    resetShowAnswer(state) {
      state.showAnswer = false;
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
      const unselectedCategory = state.selectedCategory.filter(
        (item) => !item.selected,
      );

      if (unselectedCategory.length === 0) {
        state.selectedCategory = [];
        state.guessLetters = [];
        state.lives = 8;
        state.gameIndex = 0;
        state.toggleModal = false;
        state.isGameWon = false;
        state.isGuessedComplete = false;
        action.payload.navigate("/pick-a-category");
        return;
      }
      const randomIndex = Math.floor(Math.random() * unselectedCategory.length);
      const selectedItem = unselectedCategory[randomIndex];

      const actualIndex = state.selectedCategory.findIndex(
        (item) => item.name === selectedItem.name,
      );
      state.selectedCategory[actualIndex].selected = true;
      state.gameIndex = actualIndex;
      state.guessLetters = [];
      state.lives = 8;
      state.isGuessedComplete = false;
      state.toggleModal = false;
    },
    restartGame(state) {
      state.guessLetters = [];
      state.lives = 8;
      state.isGameWon = false;
      state.isGuessedComplete = false;
      state.disableKey = [];
      state.showAnswer = false;
    },

    resetGame(state) {
      state.selectedCategory = state.selectedCategory.map((item) => ({
        ...item,
        selected: false,
      }));
      state.guessLetters = [];
      state.lives = 8;
      state.gameIndex = 0;
      state.toggleModal = false;
      state.isGameWon = false;
      state.isGuessedComplete = false;
      state.showAnswer = false;
      state.disableKey = [];
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
  resetShowAnswer,
} = gameSlice.actions;

export default gameSlice.reducer;
