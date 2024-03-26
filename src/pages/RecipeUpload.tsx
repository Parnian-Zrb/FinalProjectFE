import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createRecipe } from "../api/recipeApi";
import './RecipeUpload.css';

// Define the RecipeType interface
export interface RecipeType {
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

const RecipeSchema = Yup.object().shape({
  name: Yup.string().required("Recipe name is required"),
  category: Yup.string().required("Category is required"),
  introduction: Yup.string().required("Introduction is required"),
  image: Yup.string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
  difficulty: Yup.string().required("Difficulty level is required"),
});

const Header = () => {
  return (
    
    <header className="header">

      <h1>Recipe Upload</h1>

      <p> Welcome to the Recipe Upload page. 
        Please fill out the form below to add a new recipe.</p>

    </header>
   
  );
};

const RecipeUpload: React.FC = () => {
  const formik = useFormik<RecipeType>({
    initialValues: {
      _id: "",
      name: "",
      introduction: "",
      preparationTime: 0,
      servings: 0,
      image: "",
      ingredients: [],
      instructions: [],
      difficulty: [],
      createdAt: new Date(),
      userId: "",
      mealPlan: "",
      category: "",
    },
    validationSchema: RecipeSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
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
      {/* Header */}
      <Header />

      {/* Recipe Upload Form */}
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

        {/* Dropdown list for category */}
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

        <div className="form-group">
          <label htmlFor="introduction">Introduction</label>
          <textarea
            id="introduction"
            name="introduction"
            onChange={formik.handleChange}
            value={formik.values.introduction}
            onBlur={formik.handleBlur}
          />
          {formik.touched.introduction && formik.errors.introduction && (
            <div className="error">{formik.errors.introduction}</div>
          )}
        </div>

        <div className="form-group" >
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

        {/* Select input for difficulty */}
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
            <option value="Easy">Easy</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Difficult">Difficult</option>
          </select>
          {formik.touched.difficulty && formik.errors.difficulty && (
            <div className="error">{formik.errors.difficulty}</div>
          )}
        </div>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeUpload;
