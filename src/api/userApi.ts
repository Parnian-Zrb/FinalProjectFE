import axios from "axios";
import { RecipeType } from "../types/Recipe";
// the same as api RecipeApi.tsx

const API_URL = `${import.meta.env.VITE_BASE_URL}/user`;
console.log(API_URL);
// Fetch all Recipe
export const getAllRecipes = () => axios.get(`${API_URL} `);

// Create a newRecipe
export const createRecipe = (RecipeData: RecipeType) =>
  axios.post(API_URL, RecipeData);

// Get a single Recipe
export const getRecipeById = (id: string) => axios.get(`${API_URL}/${id}`);
export const getRecipeByCategory = (userInput: string) =>
  axios.get(`${API_URL}/category/${userInput}`);

// Update a Recipe
export const updateRecipe = (id: string, RecipeData: RecipeType) =>
  axios.patch(`${API_URL}/${id}`, RecipeData);

// Delete a Recipe
export const deleteProduct = (id: string) => axios.delete(`${API_URL}/${id}`);
