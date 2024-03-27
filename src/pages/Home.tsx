import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { getAllRecipes } from "../api/recipeApi";
import { RecipeType } from "../types/Recipe";
import "./Home.css";

import logoIcon from "../assets/LogoIcon.png";

const Home = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getAllRecipes();
        setRecipes(response.data.data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="content-margin">
        <img src={logoIcon} alt="Logo Icon" className="logo-icon" />
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <h1 className="headline">Find Your Inspiration Here!</h1>
        <p className="welcomeMessage">
          Welcome to our food sharing recipe website! Explore recipes, cooking
          tips, and more. Whether you're new or returning, take a moment to
          browse through our offerings.
        </p>
        <img
          src="https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="50%"
          height="50%"
        />
        <h2 className="subtitle">All Recipes</h2>
        <div className="recipeContainer">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
      {/* <RecipeDetails 
    _id={"unique_recipe_id"} 
    name={"Delicious Spaghetti Carbonara"} 
    introduction={"Indulge in this creamy and flavorful pasta dish that's sure to delight your taste buds."} 
    preparationTime={30} 
    servings={4} 
    image={"https://media.istockphoto.com/id/1156304531/photo/hands-with-the-phone-close-up-pictures-of-food.jpg?s=1024x1024&w=is&k=20&c=eGTWUqsEBCkkVhliE0QVxZ5IHdwJJwWMwur89LEmizg="} 
    ingredients={[
        "8 oz (225g) spaghetti",
        "4 slices bacon, diced",
        "2 cloves garlic, minced",
        "2 large eggs",
        "1/2 cup (40g) grated Parmesan cheese",
        "Salt and freshly ground black pepper, to taste",
        "Fresh parsley, chopped, for garnish"
    ]} 
    instructions={[
        "Cook spaghetti according to package instructions; drain well.",
        "In a skillet, cook bacon until crispy; remove and set aside. Leave about 2 tablespoons of bacon fat in the skillet.",
        "Add minced garlic to the skillet and cook until fragrant.",
        "In a bowl, whisk together eggs and Parmesan cheese.",
        "Add cooked spaghetti to the skillet with garlic. Remove skillet from heat.",
        "Quickly stir in egg and cheese mixture, tossing continuously to coat the pasta and prevent the eggs from scrambling.",
        "Add cooked bacon back to the skillet. Season with salt and pepper to taste.",
        "Serve immediately, garnished with chopped parsley."
    ]} 
    difficulty={["Easy", "Quick"]} 
    createdAt={new Date()} 
    userId={"user_id_here"} 
    mealPlan={"Weekly Meal Plan"} 
    category={"Italian Cuisine"}
/> */}
    </>
  );
};

export default Home;
