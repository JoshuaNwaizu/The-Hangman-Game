import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/dataSlice";
import gameReducer from "./features/gameSlice";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root", // Key for the localStorage entry
  storage, // Use localStorage
};
const persistedReducer = persistReducer(persistConfig, gameReducer);
export const store = configureStore({
  reducer: {
    data: dataReducer,
    game: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for serializable check
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
