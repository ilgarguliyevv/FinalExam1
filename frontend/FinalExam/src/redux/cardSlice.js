import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const counterSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      let elemIndex = state.basket.findIndex(
        (elem) => elem.id === action.payload.id
      );
      if (elemIndex === -1) {
        state.basket = [...state.basket, { ...action.payload, count: 1 }];
      } else {
        state.basket[elemIndex].count++;
      }
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
  },
  setFavorites: (state, action) => {
    let elemIndex = state.favorites.findIndex(
      (elem) => elem.id === action.payload.id
    );
    if (elemIndex === -1) {
      state.favorites = [...state.favorites, { ...action.payload }];
      localStorage.setItem("favorites", JSON.stringify([...state.favorites]));
    } else {
      state.favorites = state.favorites.filter(
        (elem) => elem.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify([...state.favorites]));
    }
  },
});

export const { setBasket, setFavorites } = counterSlice.actions;

export default counterSlice.reducer;
