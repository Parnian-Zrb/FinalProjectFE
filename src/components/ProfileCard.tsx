import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProfileCard.css";

interface ProfileCardProps {
  name: string;
  description: string;
  image: string;
  githubLink: string;
  LinkedInLink: string;
}
export default function ProfileCard({
  image,
  name,
  description,
  githubLink,
  LinkedInLink,
}: ProfileCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          height: 280,
          width: 280,
          display: "flex",
          padding: "0rem",
          margin: "2rem",
          justifyItems: "center",
          borderRadius: 150,
        }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <div className="card-actions">
        <CardActions>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Button size="large">
              <a href={githubLink} target="_blank">
                GitHub
              </a>
            </Button>
          </a>
        </CardActions>
        <CardActions>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Button size="large">
              <a href={LinkedInLink} target="_blank">
                {" "}
                LinkedIn
              </a>
            </Button>
          </a>
        </CardActions>
      </div>
    </Card>
  );
}
