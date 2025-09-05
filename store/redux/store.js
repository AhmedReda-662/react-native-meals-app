import { configureStore } from "@reduxjs/toolkit";
import favoriateReducer from "./favoriteSlice";

const store = configureStore({
  reducer: {
    faviorate: favoriateReducer,
  },
});

export default store;
