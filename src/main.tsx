import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import pages
import { Layout } from "./components/Layout.tsx";
import RecipeUpload from "./pages/RecipeUpload.tsx";
import Home from "./pages/Home.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import RecipeDetails from "./pages/RecipeDetails.tsx";

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
       element: <RecipeDetails title={""} description={""} id={""} ingredients={[]} preparation_steps={[]} time_required={""} difficulty={[]} tags={[]} category={[]} image_url={""} createdAt={undefined} ServingSize={[]} nutrition={[]}/>
       

       /*  path: "/recipeDetails/:id",
         element: <RecipeDetails title={""} /> */
      }, 
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
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
