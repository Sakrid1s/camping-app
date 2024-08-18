import { createSlice } from '@reduxjs/toolkit';
import { fetchCampings } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
  page: 1,
  itemsPerPage: 4,
  favorites: [], // New state to store favorite item IDs
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
  reducers: {
    loadMore: state => {
      state.page += 1;
    },
    resetPage: state => {
      state.page = 1;
    },
    addFavorite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(id => id !== action.payload);
    },
  },
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

export const { loadMore, resetPage, addFavorite, removeFavorite } =
  campingsSlice.actions;
export const campingsReducer = campingsSlice.reducer;
