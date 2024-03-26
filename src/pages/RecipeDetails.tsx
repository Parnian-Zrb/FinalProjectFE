import "./RecipeDetails.css";
import { RecipeType } from "../types/Recipe";
import { useEffect, useState } from "react";
import { getRecipeById } from "../api/recipeApi";
import { useParams } from "react-router-dom";

// interface RecipeDetailsProps {
//   _id: string;
//   name: string;
//   introduction: string;
//   preparationTime: number;
//   servings: number;
//   image: string;
//   ingredients: string[];
//   instructions: string[];
//   difficulty: string[];
//   createdAt: Date;
//   userId: string;
//   mealPlan: string;
//   category: string;
// }

// const RecipeDetails = ({
// /*   _id, */
//   name,
//   introduction,
//   preparationTime,
//   servings,
//   image,
//   ingredients,
//   instructions,
//   difficulty,
//  /*  createdAt,
//   userId, */
//   mealPlan,
//   category,

// } : RecipeDetailsProps) => {

const RecipeDetail = () => {
  const { id = "" } = useParams();
  const [recipe, setRecipe] = useState<RecipeType>();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        if (id) {
          const response = await getRecipeById(id);
          // console.log(response);
          setRecipe(response.data);
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
        <h1>Food Name:{recipe?.name}</h1>
        <p> Navigation Links, Save/Favorite Button, Share Buttons </p>
      </header>

      <main>
        <div className="recipe-image">
          <img src={recipe?.image} alt="Recipe Image" />
        </div>

        <table className="table">
          <td className="td">
            <div className="recipe-info">
              <tr>
                <h2>Ingredients:{recipe?.ingredients}</h2>
              </tr>
              <tr>
                <h2>preparation Time: {recipe?.preparationTime}</h2>
              </tr>
              <tr>
                <h2>Introduction: {recipe?.description}</h2>
              </tr>
            </div>
          </td>
          <td className="td">
            <div>
              <tr>
                <h2>Difficulty:{recipe?.difficulty}</h2>
              </tr>
              <tr>
                <h2>Category: {recipe?.category} </h2>{" "}
              </tr>
              <tr>
                <h2>Servings for:{recipe?.servings} </h2>
              </tr>
            </div>
          </td>
        </table>
      </main>

      <section className="Instructions">
        <h2>Instructions:</h2>
        <p>{recipe?.instructions}</p>
      </section>

      <div>
        <section className="meal-plan">
          <h2>Meal Plan: {recipe?.mealPlan}</h2>
          {recipe?.mealPlan}
        </section>
      </div>

      <table>
        <td className="td">
          <section>
            <div className="comment_list">
              <h2> Comment list </h2>

              <li> First Comment </li>
              <li> Second Comment </li>
              <li> Third Comment </li>
              <li> Forth Comment </li>
            </div>
          </section>
        </td>

        <td className="td">
          <section>
            <div className="comments">
              <h2>Comments:</h2>
              <form onSubmit={handleSubmitComment}>
                <h2>Name </h2>
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
          </section>
        </td>
      </table>

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
