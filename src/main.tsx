import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import { Layout } from "./components/Layout.tsx";
import RecipeDetails from "./pages/RecipeDetails.tsx";
import RecipeUpload from "./pages/RecipeUpload.tsx";
import Home from "./pages/Home.tsx";
import Favorites from "./pages/Favorites.tsx";
import "./components/Navbar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipeUpload",
        element: <RecipeUpload />,
      },
      {
        path: "/recipeDetails",
        element: <RecipeDetails />,
      },
      {
        path: "/recipeDetails/:id",
        element: <RecipeDetails />,
      },

      {
        path: "/Favorites",
        element: <Favorites />,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/signup",
    element: <div>Sign Up</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
