import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import { Layout } from "./components/Layout.tsx";
import RecipeDetails from "./pages/RecipeDetails.tsx";
import RecipeUpload from "./pages/RecipeUpload.tsx";
import Home from "./pages/Home.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import AboutUs from "./pages/AboutUs.tsx";

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
        path: "/recipe-upload",
        element: <RecipeUpload />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetails />,
      },
      {
        path: "/user/:id",
        element: <UserProfile />,
      },
      {
        path: "/about",
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
  <>
    <RouterProvider router={router} />
  </>
);
