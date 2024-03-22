
import { useFormik } from "formik";
import * as Yup from "yup";
import { createRecipe } from "../api/RecipeApi";

const RecipeSchema = Yup.object().shape({
  title: Yup.string().required("Recipe name is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.string().url("Must be a valid URL").required("Image URL is required"),
});

const AddRecipe = () => {
  const formik = useFormik({
    initialValues: {
      id: "", 
      title: "",
      description: "",
      ingredients: [],
      preparation_steps: [],
      time_required: "",
      difficulty: [],
      tags: [],
      category: [],
      image_url: "",
      createdAt: new Date(),
      ServingSize: [],
      nutrition: [],
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
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        onBlur={formik.handleBlur}
      />
      {formik.touched.title && formik.errors.title && (
        <div>{formik.errors.title}</div>
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
        value={formik.values.image_url}
        onBlur={formik.handleBlur}
      />
      {formik.touched.image_url && formik.errors.image_url && (
        <div>{formik.errors.image_url}</div>
      )}

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;