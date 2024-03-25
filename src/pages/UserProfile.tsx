import RecipeCard from "../components/RecipeCard";

const UserProfile = () => {
  return (
    <div>
      <h2>UserProfile</h2>
      <section>
        <h3>Meal Plan</h3>
      </section>
      <section>
        <h3>Favourited Recipe</h3>

        <RecipeCard name={""} image={""} description={""} rating={""} />
      </section>
      <section>
        <h3>Publish Recipe</h3>
        <RecipeCard name={""} image={""} description={""} rating={""} />
      </section>
    </div>
  );
};

export default UserProfile;
