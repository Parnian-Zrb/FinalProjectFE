import React from "react";
import { FormikErrors, useFormik } from "formik";
import * as Yup from "yup";
import { createRecipe } from "../api/recipeApi";
import "./RecipeUpload.css";

interface Ingredient {
  name: string;
  quantity: string;
}

// Define the RecipeType interface
export interface RecipeType {
  _id?: string;
  name: string;
  description: string;
  preparationTime: number;
  servings: number;
  image: string;
  ingredients: Ingredient[];
  instructions: string[];
  difficulty: string[];
  createdAt: Date;
  userId?: string;
  mealPlan?: string;
  category: string;
  description: string;
  tags: string;
}

const RecipeSchema = Yup.object().shape({
  name: Yup.string().required("Recipe name is required"),
  description: Yup.string().required("Description is required"),
  preparationTime: Yup.number()
    .typeError("Preparation time must be a number")
    .required("Preparation time is required"),
  servings: Yup.number()
    .typeError("Servings must be a number")
    .required("Servings is required"),
  image: Yup.string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
  ingredients: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Ingredient name is required"),
      quantity: Yup.string()
        .max(50, "Quantity must be at most 50 characters")
        .required("Quantity is required"),
    })
  ),
  /* instructions: Yup.array().of(
    Yup.string().required("Instruction is required")
  ), */
  /* difficulty: Yup.array().of(
    Yup.string().required("Difficulty is required")
  ), */
  category: Yup.string().required("Category is required"),
});

const Header = () => {
  return (
    <header className="header">
      <h1>Recipe Upload</h1>
      <p>Welcome to the Recipe Upload page. Please fill out the form below to add a new recipe.</p>
    </header>
  );
};

const RecipeUpload: React.FC = () => {
  const formik = useFormik<RecipeType>({
    initialValues: {
      name: "",
      description: "",
      preparationTime: 0,
      servings: 0,
      image: "",
      ingredients: [{ name: "", quantity: "" }], // Initial empty ingredient
      instructions: [],
      difficulty: [],
      createdAt: new Date(),
      category: "",
      description: "",
      tags: "",
    },
    validationSchema: RecipeSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(values);
        const response = await createRecipe(values);
        console.log("Recipe added successfully", response.data);
        resetForm({});
      } catch (error) {
        console.error("Failed to add Recipe", error);
      }
    },
  });

  return (
    <div className="container">
      <Header />
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="error">{formik.errors.description}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="preparationTime">Preparation Time (minutes)</label>
          <input
            id="preparationTime"
            name="preparationTime"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.preparationTime}
            onBlur={formik.handleBlur}
          />
          {formik.touched.preparationTime && formik.errors.preparationTime && (
            <div className="error">{formik.errors.preparationTime}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="servings">Servings</label>
          <input
            id="servings"
            name="servings"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.servings}
            onBlur={formik.handleBlur}
          />
          {formik.touched.servings && formik.errors.servings && (
            <div className="error">{formik.errors.servings}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image && (
            <div className="error">{formik.errors.image}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          {formik.values.ingredients.map((_ingredient, index) => (
            <div key={index}>
              <input
                id={`ingredients.${index}.name`}
                name={`ingredients.${index}.name`}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.ingredients[index].name}
                onBlur={formik.handleBlur}
                placeholder="Ingredient Name"
              />
              <input
                id={`ingredients.${index}.quantity`}
                name={`ingredients.${index}.quantity`}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.ingredients[index].quantity}
                onBlur={formik.handleBlur}
                placeholder="Quantity"
              />
              {formik.touched.ingredients && formik.errors.ingredients && formik.errors.ingredients[index] && (
               <div className="error">{(formik.errors.ingredients[index] as FormikErrors<Ingredient>).name || (formik.errors.ingredients[index] as FormikErrors<Ingredient>).quantity}</div>
              )}
            </div>
          ))}
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            onChange={formik.handleChange}
            value={formik.values.instructions}
            onBlur={formik.handleBlur}
          />
          {formik.touched.instructions && formik.errors.instructions && (
            <div className="error">{formik.errors.instructions}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="difficulty">Difficulty</label>
          <select
            id="difficulty"
            name="difficulty"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.difficulty}
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="intermediate">Intermediate</option>
            <option value="difficult">Difficult</option>
          </select>
                    {formik.touched.difficulty && formik.errors.difficulty && (
            <div className="error">{formik.errors.difficulty}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          >
            <option value="">Select Category</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="High-Protein">High-Protein</option>
            <option value="Quick-and-Easy">Quick-and-Easy</option>
            <option value="Desserts">Desserts</option>
          </select>
          {formik.touched.category && formik.errors.category && (
            <div className="error">{formik.errors.category}</div>
          )}
        </div>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeUpload;

         
