/*import React, { useState } from 'react';
import { RecipeType } from "../types/recipe"; 

const RecipeDetails: React.FC<{ recipe: RecipeType }> = ({ recipe }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle submitting comment
  };
 
  return (
    <div className="recipe-details">
      <header>
        <h1>{recipe.title}</h1>
        {/* Navigation Links, Save/Favorite Button, Share Buttons */}
     /*  </header> */
      
/*
      <main>
        <div className="recipe-image">
          <img src={recipe.image_url} alt={recipe.title} />
        </div>

        <div className="recipe-info">
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Cooking Instructions:</h2>
          <ol>
            {recipe.preparation_steps.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <p>Time Required: {recipe.time_required}</p>
          <p>Difficulty: {recipe.difficulty.join(", ")}</p>
          <p>Tags: {recipe.tags.join(", ")}</p>
          <p>Category: {recipe.category.join(", ")}</p>
          <p>Serving Size: {recipe.ServingSize.join(", ")}</p>
          <p>Nutrition: {recipe.nutrition.join(", ")}</p>
        </div>
      </main>



      <section className="additional-details">
        <h2>Description:</h2>
        <p>{recipe.description}</p>
      </section>


      <section className="user-interaction">
        <div className="comments">
          <h2>Comments:</h2>
          {/* Display Comments */}
      /*     <form onSubmit={handleSubmitComment}>
            <input type="text" value={comment} onChange={handleCommentChange} placeholder="Add a comment" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>



      <footer>
        <p>Copyright © {new Date().getFullYear()} RecipeName.com</p>
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



interface RecipeDetailProps {
  title: string
}

//akeel
const RecipeDetails = ({title}: RecipeDetailProps) => {
  return (
    <div className="container">
       <h1>{title}</h1> *

    

      <div className="3-part">
        <div> <h2>3rd Part</h2>
        <p>r1</p>
        <p>r2</p>
         </div>


    </div>
  </div>
  );
};

export default RecipeDetails;
*/
/*  */ 

/* 
    <div className="container">
       <h1>{title}</h1> 

      
      <div className="photo_url">
        <h2>photo_url</h2>
        <p>photo_url</p>
        <ul>
          <li>Item 1</li>
          <li>{title}</li>
          <li>{description}</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div className="Details">
        <h2>Detai</h2>
        <p>r1</p>
        <p>r2</p>
      </div>

      <div className="3-part">
        <div> <h2>3rd Part</h2>
        <p>r1</p>
        <p>r2</p>
         </div>


    </div>
  </div> */
  /* );
};
 */
/* export default RecipeDetails;
 */

/* 
 */