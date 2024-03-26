import RecipeCard from "../components/RecipeCard";
import { useFavoriteStore } from "../store/useFavouriteStore";
import { useState, useEffect } from "react";
import { RecipeType } from "../types/Recipe";
import { getUserById } from "../api/userApi";
import "./UserProfile.css";

const UserProfile = () => {
  const { favorites, setToFavorites } = useFavoriteStore();
  const [userRecipes, setUserRecipes] = useState<RecipeType[]>([]);
  const [user, setUser] = useState({
    imageURL: "",
    name: "",
    accountName: "",
  });

  const defaultMessage = (sectionName: string, items: any[]) => {
    if (items.length === 0) {
      return (
        <div className="default-message">
          <p>You don't have any {sectionName} yet.</p>
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById("65fe28de7dde309c823adb5e");
        console.log(response.data.data.favoriteRecipes);
        setToFavorites(response.data.data.favoriteRecipes);
        setUser(response.data.data);
        setUserRecipes(response.data.data.uploadedRecipes);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div style={{ margin: "0 105px" }}>
      <div className="user-profile-header">
        <img src={user.imageURL} alt="User Profile" className="profile-image" />
        <div className="user-info">
          <h2>{user.name}</h2>
          <p>@{user.accountName}</p>
        </div>
      </div>
      <section className="meal-plan-section">
        <h2>Meal Plan</h2>
        {defaultMessage("Meal Plan", userRecipes)}
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        {defaultMessage("Favourited Recipe", favorites)}
        <div className="recipeContainer">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </section>
      <section>
        <h2>Published Recipes</h2>
        {defaultMessage("Publish Recipe", userRecipes)}
        <div className="recipeContainer">
          {userRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
