import "./RecipeDetails.css";
import { RecipeType } from "../types/Recipe";
import { useEffect, useState } from "react";
import { getRecipeById } from "../api/recipeApi";
import { useParams } from "react-router-dom";
import CommentSection from "../components/Comment";
import { Favorite, Share } from "@mui/icons-material";
import { useFavoriteStore } from "../store/useFavouriteStore";

const mockComments = [
  {
    name: "Alice",
    email: "alice@gmail.com",
    text: "This recipe was amazing! I loved the combination of flavors and how easy it was to follow. Definitely adding it to my favorites list!",
  },
  {
    name: "Bob",
    email: "bob@gmail.com",
    text: "I tried making this recipe, but I found it a bit too complicated for my taste. Maybe simplifying the instructions would help.",
  },
  {
    name: "Eve",
    email: "eve@gmail.com",
    text: "This recipe was good, but I made a few modifications to suit my preferences. Instead of using chicken, I substituted tofu, and it turned out great!",
  },
];

const RecipeDetail = () => {
  const { id = "" } = useParams();
  const [recipe, setRecipe] = useState<RecipeType>();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        if (id) {
          const response = await getRecipeById(id);
          console.log(response.data.data);
          setRecipe(response.data.data);
        } else {
          console.error("Product ID is undefined");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyUrlToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("URL copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy URL: ", err);
    }
  };

  const isFavorite = useFavoriteStore((state) =>
    state.favorites.some((fav) => fav._id === recipe?._id)
  );

  return (
    <div>
      <div className="recipe-details">
        <header>
          <div className="recipe-header">
            <h1>{recipe?.name}</h1>
            <div className="recipe-icons">
              <button
                aria-label="add to favorites"
                className="favorite-button"
                onClick={() => {
                  if (recipe) {
                    if (isFavorite) {
                      useFavoriteStore.getState().removeFromFavorites(recipe);
                    } else {
                      useFavoriteStore.getState().setToFavorites(recipe);
                    }
                  }
                }}
              >
                <Favorite sx={{ color: isFavorite ? "#ff3c3c" : "#c1c1c1" }} />
              </button>
              <button onClick={copyUrlToClipboard} className="share-button">
                <Share />
              </button>
            </div>
          </div>
          <p>Preparation Time: {recipe?.preparationTime} mins</p>
          <p>{recipe?.description}</p>
        </header>

        <main>
  <div className="recipe-image">
    <img src={recipe?.image} alt="Recipe Image" />
  </div>
  <div className="recipe-info-container">
    <div className="recipe-info">
      <h2>Category:</h2>
      <p>{recipe?.category}</p>
    </div>

    <div className="recipe-info">
      <h2>Difficulty:</h2>
      <p>{recipe?.difficulty}</p>
    </div>

    <div className="recipe-info">
      <h2>Servings for:</h2>
      <p>{recipe?.servings}</p>
    </div>

    <div className="recipe-info">
      <h2>Preparation Time:</h2>
      <p>{recipe?.preparationTime} mins</p>
    </div>

    <div className="recipe-info">
      <h2>Ingredients:</h2>
      <ul>
        {recipe?.ingredients && recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} - {ingredient.quantity}
          </li>
        ))}
      </ul>
    </div>
  </div>
</main>
<section className="Instructions">
  <h2>Instructions:</h2>
  <ol>
    {recipe?.instructions && recipe.instructions.map((step, index) => (
      <li key={index}>{step}</li>
    ))}
  </ol>
</section>

      </div>
    </div>
  );
};

export default RecipeDetail;
