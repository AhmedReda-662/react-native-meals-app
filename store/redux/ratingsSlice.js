import { createSlice } from '@reduxjs/toolkit';

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState: {
    mealRatings: {} // { mealId: { rating: number, count: number } }
  },
  reducers: {
    rateMeal: (state, action) => {
      const { mealId, rating } = action.payload;
      if (!state.mealRatings[mealId]) {
        state.mealRatings[mealId] = { rating: 0, count: 0 };
      }
      const currentRating = state.mealRatings[mealId];
      const newTotalRating = currentRating.rating * currentRating.count + rating;
      currentRating.count++;
      currentRating.rating = newTotalRating / currentRating.count;
    }
  }
});

export const { rateMeal } = ratingsSlice.actions;
export default ratingsSlice.reducer;
