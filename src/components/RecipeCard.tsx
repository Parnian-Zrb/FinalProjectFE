import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import { useFavoriteStore } from "../store/useFavouriteStore";
import "../pages/AboutUs.css";
import { RecipeType } from "../types/Recipe";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: RecipeType;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  if (!recipe) {
    return <div>Loading...</div>;
  }

  const isFavorite = useFavoriteStore((state) =>
    state.favorites.some((fav) => fav._id === recipe._id)
  );
  return (
    <Card
      sx={{
        width: "350px",
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Link to={`/recipe/${recipe._id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          sx={{ height: 275 }}
          image={recipe.image}
          title={recipe.name}
        />
      </Link>
      <CardContent sx={{ padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Inter",
              fontSize: "24px",
              fontWeight: "medium",
              marginBottom: "0px",
            }}
          >
            {recipe.name}
          </Typography>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              if (isFavorite) {
                useFavoriteStore.getState().removeFromFavorites(recipe);
              } else {
                useFavoriteStore.getState().setToFavorites(recipe);
              }
            }}
          >
            <FavoriteIcon sx={{ color: isFavorite ? "#ff3c3c" : "#c1c1c1" }} />
          </IconButton>
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "regular",
            color: "#8E8E8E",
            justifyContent: "left",
          }}
        >
          Preparation Time: {recipe.preparationTime}
        </Typography>
        <CardActions sx={{ padding: "0px", paddingTop: "10px" }}>
          <Link to={`/recipe/${recipe._id}`}>
            <Button
              sx={{
                color: "#E8751A",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "0px",
                paddingTop: "10px",
              }}
            >
              Learn More
            </Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export default RecipeCard;
