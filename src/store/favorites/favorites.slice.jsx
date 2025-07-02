import { createSlice } from "@reduxjs/toolkit";

const LS_KEY = "favorites";

const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem(LS_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem(LS_KEY, JSON.stringify(favorites));
};

export const initialState = getFavoritesFromLocalStorage();

const favoritesSlice = createSlice({
  name: LS_KEY,
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
        saveFavoritesToLocalStorage(state);
      }
    },
    removeFavorite: (state, action) => {
      const idx = state.indexOf(action.payload);
      if (idx > -1) {
        state.splice(idx, 1);
        saveFavoritesToLocalStorage(state);
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
