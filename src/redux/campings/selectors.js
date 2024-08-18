export const selectCampings = state => state.campings.items;
export const selectIsLoading = state => state.campings.isLoading;
export const selectError = state => state.campings.isError;
export const selectPage = state => state.campings.page;
export const selectItemsPerPage = state => state.campings.itemsPerPage;
export const selectHasMoreItems = state =>
  state.campings.page * state.campings.itemsPerPage <
  state.campings.items.length;
export const selectFavorites = state => state.campings.favorites;
