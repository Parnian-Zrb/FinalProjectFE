import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { getAllRecipes } from "../api/recipeApi";
import { RecipeType } from "../types/Recipe";
import "./Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getAllRecipes();
        setRecipes(response.data.data);
        // console.log(response.data.data[0]);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };
    fetchRecipes();
  }, []);
  return (
    <>
      <div className="content-margin">
        <h1 className="headline">Find Your Inspiration Here!</h1>
        <p className="welcomeMessage">
          Welcome to our food sharing recipe website! Explore recipes, cooking
          tips, and more. Whether you're new or returning, take a moment to
          browse through our offerings.
        </p>
        <img
          src="https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="1300px"
          height="auto"
        />
        {/* <p>
        This is a food sharing recipe website where you can find recipes,
        cooking tips and more. If you are new here, please take some time to
        explore the site and see what we have for you. You can also search for
        specific dishes or browse through our categories to discover something
        that suits your taste. We hope you enjoy your stay with us!
      </p> */}
        <h2>All Recipes</h2>
        <div className="recipeContainer">
          {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
