import RecipeCard from "../components/RecipeCard";
import { useFavoriteStore } from "../store/useFavouriteStore";
import { useState, useEffect } from "react";
import { RecipeType } from "../types/Recipe";

const UserProfile = () => {
  const { favorites } = useFavoriteStore();
  const [userRecipes, addUserRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    const fetchUserRecipes = async () => {
      try {
        const response = await fetch("/user/:id/recipes");
        const data = await response.json();
        addUserRecipes(data);
      } catch (error) {
        console.error("Failed to fetch user recipes:", error);
      }
    };

    fetchUserRecipes();
  }, []);

  return (
    <div>
      <h2>UserProfile</h2>
      <section>
        <h3>Meal Plan</h3>
      </section>
      <section>
        <h3>Favourited Recipe</h3>
        {favorites.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </section>
      <section>
        <h3>Publish Recipe</h3>
        {userRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </section>
    </div>
  );
};

export default UserProfile;
