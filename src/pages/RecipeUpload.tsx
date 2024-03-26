import { useFormik } from "formik";
import * as Yup from "yup";
import { createRecipe } from "../api/recipeApi";

const RecipeSchema = Yup.object().shape({
  title: Yup.string().required("Recipe name is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
});

const RecipeUpload = () => {
  const formik = useFormik({
    initialValues: {
      _id: "",
      name: "",
      description: "",
      preparationTime: 0,
      servings: 0,
      image: "",
      ingredients: [],
      instructions: [],
      difficulty: [],
      tags: "",
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
    <form onSubmit={formik.handleSubmit}>
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
        <div>{formik.errors.name}</div>
      )}

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.category}
        onBlur={formik.handleBlur}
      />
      {formik.touched.category && formik.errors.category && (
        <div>{formik.errors.category}</div>
      )}

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        onChange={formik.handleChange}
        value={formik.values.description}
        onBlur={formik.handleBlur}
      />
      {formik.touched.description && formik.errors.description && (
        <div>{formik.errors.description}</div>
      )}

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
        <div>{formik.errors.image}</div>
      )}

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeUpload;
