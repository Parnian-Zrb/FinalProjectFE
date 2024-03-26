import './RecipeDetails.css';

interface RecipeDetailsProps {
  _id: string;
  name: string;
  introduction: string;
  preparationTime: number;
  servings: number;
  image: string;
  ingredients: string[];
  instructions: string[];
  difficulty: string[];
  createdAt: Date;
  userId: string;
  mealPlan: string;
  category: string;
}



const RecipeDetails = ({
/*   _id, */
  name,
  introduction,
  preparationTime,
  servings,
  image,
  ingredients,
  instructions,
  difficulty,
 /*  createdAt,
  userId, */
  mealPlan,
  category,

} : RecipeDetailsProps) => {


   const handleSubmitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle submitting comment
  }; 
 
  return (
    <div className="recipe-details">
      <header>
        <h1>Food Name:{name}</h1>
        <p> Navigation Links, Save/Favorite Button, Share Buttons </p>
     </header>
      
      <main>
      <div className="recipe-image">
        <img src='https://media.istockphoto.com/id/1156304531/photo/hands-with-the-phone-close-up-pictures-of-food.jpg?s=1024x1024&w=is&k=20&c=eGTWUqsEBCkkVhliE0QVxZ5IHdwJJwWMwur89LEmizg=' alt="Recipe Image" />
      </div>
      
       <table className='table'>
        <td className='td'>
            <div className="recipe-info" >
              <tr ><h2>Ingredients:{ingredients}</h2></tr>
              <tr ><h2>preparation Time: {preparationTime}</h2></tr> 
              <tr ><h2>Introduction: {introduction}</h2></tr> 
             </div>
        </td>
        <td className='td'>
            <div>
              <tr><h2>Difficulty:{difficulty}</h2></tr>
              <tr><h2>Category: {category} </h2> </tr>
              <tr><h2>Servings for:{servings} </h2></tr>
            </div>
        </td>
        </table>
      </main>

      <section className="Instructions">
        <h2>Instructions:</h2>
        <p>{instructions}</p>
      </section>
      
    <div>
      <section className="meal-plan">
          <h2>Meal Plan: {mealPlan}</h2>
           {mealPlan}
       </section>
      </div>

    <table>

    <td className='td'>
      <section>
       <div className="comment_list">
       <h2> Comment list </h2>
       
        <li> First Comment </li>
        <li> Second Comment  </li>
        <li> Third Comment </li>
        <li> Forth Comment </li>
        </div>
        </section>
      </td>
      

      <td className='td'>
         <section >
           <div className="comments">
         
            <h2>Comments:</h2>
            <form onSubmit={handleSubmitComment}>
              <h2>Name </h2>
            <input type="name" placeholder="Name" />
            <h2>Email</h2>

            <input type="Email" placeholder="Email" />
            <h2>Comments</h2>

            <input type="text" placeholder="Add a comment" />
            <button className="comments button" type="submit">Submit</button>
           </form>
          </div>
        </section>
      </td>
      </table>

      <div className="scroll-menu">
        <h2>Related Recipe-same category </h2>
        Here are :A scroll-menu of 5  recipes in this category
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

export default RecipeDetails;