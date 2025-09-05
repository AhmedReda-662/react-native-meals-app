import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: "favoriate",
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.ids.push(action.payload);
    },
    removeFavorite(state, action) {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export default favoriteSlice.reducer;
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
