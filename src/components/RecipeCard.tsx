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
// import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: RecipeType;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const isFavorite = useFavoriteStore((state) =>
    state.favorites.some((fav) => fav._id === recipe._id)
  );
  return (
    <Card sx={{ margin: "20px", width: "280px" }}>
      <CardMedia
        sx={{ height: 150 }}
        image={recipe.image}
        title={recipe.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.introduction}
        </Typography>
        <Typography variant="body2" color="#a7a7a7">
          {recipe.introduction}
        </Typography>
        <Box mt={2}>
          <Typography variant="body1"> {recipe.introduction}</Typography>
        </Box>
      </CardContent>
      <CardActions>
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
        {/* <Link to={`/RecipeDetail/${recipe._id}`}> */}
        <Button size="small" sx={{ color: "#027a9c" }}>
          Learn More
        </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
};
export default RecipeCard;
