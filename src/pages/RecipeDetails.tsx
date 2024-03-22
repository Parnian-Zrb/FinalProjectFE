/* import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById, deleteProduct } from "../api/RecipeApi";
import { RecipeType } from "../types/Recipe";
import { BeatLoader } from "react-spinners";

const RecipeDetails = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [Recipe, setRecipe] = useState<RecipeType>();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipeById(id);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteRecipe(id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      {Recipe ? (
        <>
          <h1>{Recipe.title}</h1>
          <p>{Recipe.description}</p>
          <button onClick={() => setModalOpen(true)}>Update Product</button>
          <button onClick={handleDelete}>Delete Product</button>
        </>
      ) : (
        <BeatLoader color="#36d7b7" />
      )}

      
    </div>
  );
};

export default RecipeDetails; */