import RecipeCard from "../components/RecipeCard";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>Welcome to our website!</h1>

      <img
        src="https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="1300px"
        height="auto"
      />
      <p>
        This is a food sharing recipe website where you can find recipes,
        cooking tips and more. If you are new here, please take some time to
        explore the site and see what we have for you. You can also search for
        specific dishes or browse through our categories to discover something
        that suits your taste. We hope you enjoy your stay with us!
      </p>
      <div className="recipeContainer">
        <RecipeCard name={""} image={""} description={""} rating={""} />
      </div>
    </>
  );
};
<div className="recipeContainer">
  <RecipeCard name={""} image={""} description={""} rating={""} />
</div>;
export default Home;
