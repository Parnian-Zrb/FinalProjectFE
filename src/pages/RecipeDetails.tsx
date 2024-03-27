import "./RecipeDetails.css";
import { RecipeType } from "../types/Recipe";
import { useEffect, useState } from "react";
import { getRecipeById } from "../api/recipeApi";
import { useParams } from "react-router-dom";

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

  const handleSubmitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle submitting comment
  };

  return (
    <div className="recipe-details">
      <header>
        <h1>{recipe?.name}</h1>
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
              {recipe?.ingredients.map((ingredient, index) => (
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
          {recipe?.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      <div>
        <section className="meal-plan">
          <h2>Meal Plan: {recipe?.mealPlan}</h2>
          {recipe?.mealPlan}
        </section>
      </div>

      <div className="comments-container">
        <div className="comment_list">
          <h2>Comment list</h2>
          <ul>
            <li>First Comment</li>
            <li>Second Comment</li>
            <li>Third Comment</li>
            <li>Forth Comment</li>
          </ul>
        </div>
        <div className="comments">
          <h2>Comments:</h2>
          <form onSubmit={handleSubmitComment}>
            <h2>Name</h2>
            <input type="name" placeholder="Name" />
            <h2>Email</h2>
            <input type="Email" placeholder="Email" />
            <h2>Comments</h2>
            <input type="text" placeholder="Add a comment" />
            <button className="comments button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="scroll-menu">
        <h2>Related Recipe-same category </h2>
        Here are :A scroll-menu of 5 recipes in this category
        {/* <ul>
          {recipeTitles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul> */}
      </div>
      <div className="scroll-menu">
        <h2>Recipe Titles</h2>
        Here are :A scroll-menu of ten top favorites recipes
        {/* <ul>
          {recipeTitles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul> */}
      </div>

      <footer>
        <p>Copyright © {new Date().getFullYear()} FoodSharing Group</p>
        <nav>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </nav>
      </footer>
    </div>
  );
};

export default RecipeDetail;
