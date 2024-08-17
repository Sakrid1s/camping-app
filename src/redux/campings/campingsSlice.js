import { createSlice } from '@reduxjs/toolkit';
import { fetchCampings } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
};

const isPending = action =>
  typeof action.type === 'string' && action.type.endsWith('/pending');

const pendingReducer = state => {
  state.isLoading = true;
  state.items = [];
  state.isError = null;
};

const isRejected = action =>
  typeof action.type === 'string' && action.type.endsWith('/rejected');

const rejectedReducer = (state, action) => {
  state.isError = action.payload;
  state.isLoading = false;
};

const campingsSlice = createSlice({
  name: 'campings',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })

      .addMatcher(isPending, pendingReducer)
      .addMatcher(isRejected, rejectedReducer);
  },
});

export const campingsReducer = campingsSlice.reducer;
