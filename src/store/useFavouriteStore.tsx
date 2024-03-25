import { create } from "zustand";
import { RecipeType } from "../types/Recipe";

interface FavoriteStore {
  favorites: RecipeType[];
  setToFavorites: (recipe: RecipeType) => void;
  removeFromFavorites: (recipe: RecipeType) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  setToFavorites: (recipe) =>
    set((state) => ({ favorites: [...state.favorites, recipe] })),
  removeFromFavorites: (recipe) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav._id !== recipe._id),
    })),
}));
