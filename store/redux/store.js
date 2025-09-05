import { configureStore } from "@reduxjs/toolkit";
import favoriateReducer from "./favoriteSlice";
import ratingsReducer from "./ratingsSlice";

const store = configureStore({
  reducer: {
    faviorate: favoriateReducer,
    ratings: ratingsReducer,
  },
});

export default store;
