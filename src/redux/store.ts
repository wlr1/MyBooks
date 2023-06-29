import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/slice";

const rootReducer = combineReducers({
  book: bookReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
