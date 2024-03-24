import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../pages/AboutUs.css";

export default function ProfileCard({ name, image, description, Rating }: any) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        className="container"
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {image}
          {name}Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}Lizards are a widespread group of squamate reptiles, with
          over 6,000 species, ranging across all continents except Antarctica
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
