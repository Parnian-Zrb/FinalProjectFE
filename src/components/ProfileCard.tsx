import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductType } from "../types/ProfileType";

export default function ProfileCard({ image, name, description }: ProductType) {
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
      <CardActions>
        <a href="" target="_blank" rel="noopener noreferrer">
          <Button size="small">GitHub</Button>
        </a>
      </CardActions>
      <CardActions>
        <a href="" target="_blank" rel="noopener noreferrer">
          <Button size="small">LinkedIn</Button>
        </a>
      </CardActions>
    </Card>
  );
}

// import React from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import "./ProfileCard.css";

// const ProfileCard: React.FC = () => {
//   return (
//     <>
//       {/* Parnian */}
//       <Card className="card">
//         <Card.Img
//           variant="top"
//           src="https://media.istockphoto.com/id/1346223165/photo/encryption-your-data-binary-code-and-digital-lock-hacker-attack-and-data-breach-big-data-with.jpg?s=1024x1024&w=is&k=20&c=JJ-fCEmaInOhepWmnbRUe3Gonshg4lVs5foz2Zu5wxU="
//           className="card-img"
//         />
//         <Card.Body>
//           <Card.Title className="card-title">Parnian Zarbafian</Card.Title>
//           <Card.Text className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//         <ListGroup className="list-group-flush">
//           <ListGroup.Item>
//             <li>Web developer</li>
//             <li>Photographer</li>
//             <li>Graphic Designer</li>
//           </ListGroup.Item>
//         </ListGroup>
//         <Card.Body>
//           <Card.Link
//             href="https://github.com/Parnian-Zrb"
//             className="card-link"
//           >
//             <button>Github</button>
//           </Card.Link>

//           <Card.Link
//             href="https://www.linkedin.com/in/parnian-zarbafian/"
//             className="card-link"
//           >
//             <button>Linkedin</button>
//           </Card.Link>
//         </Card.Body>
//       </Card>
//       {/* Farahnaz */}
//       <Card className="card">
//         <Card.Img
//           variant="top"
//           src="https://media.istockphoto.com/id/1346223165/photo/encryption-your-data-binary-code-and-digital-lock-hacker-attack-and-data-breach-big-data-with.jpg?s=1024x1024&w=is&k=20&c=JJ-fCEmaInOhepWmnbRUe3Gonshg4lVs5foz2Zu5wxU="
//           className="card-img"
//         />
//         <Card.Body>
//           <Card.Title className="card-title">Farahnaz Farahbakhsh</Card.Title>
//           <Card.Text className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//         <ListGroup className="list-group-flush">
//           <ListGroup.Item>
//             <li>Skill1</li>
//             <li>skill2</li>
//             <li>skill3</li>
//           </ListGroup.Item>
//         </ListGroup>
//         <Card.Body>
//           <Card.Link
//             href="https://github.com/FarahnazMehrafza"
//             className="card-link"
//           >
//             <button>Github</button>
//           </Card.Link>

//           <Card.Link
//             href="https://www.linkedin.com/in/FarahnazMehrafza/"
//             className="card-link"
//           >
//             <button>Linkedin</button>
//           </Card.Link>
//         </Card.Body>
//       </Card>

//       <Card className="card">
//         <Card.Img
//           variant="top"
//           src="https://media.istockphoto.com/id/1346223165/photo/encryption-your-data-binary-code-and-digital-lock-hacker-attack-and-data-breach-big-data-with.jpg?s=1024x1024&w=is&k=20&c=JJ-fCEmaInOhepWmnbRUe3Gonshg4lVs5foz2Zu5wxU="
//           className="card-img"
//         />

//         {/* Shelly */}
//         <Card.Body>
//           <Card.Title className="card-title">Shelly</Card.Title>
//           <Card.Text className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//         <ListGroup className="list-group-flush">
//           <ListGroup.Item>
//             <li>Skill1</li>
//             <li>skill2</li>
//             <li>skill3</li>
//           </ListGroup.Item>
//         </ListGroup>
//         <Card.Body>
//           <Card.Link
//             href="https://github.com/Parnian-Zrb"
//             className="card-link"
//           >
//             <button>Github</button>
//           </Card.Link>

//           <Card.Link
//             href="https://www.linkedin.com/in/parnian-zarbafian/"
//             className="card-link"
//           >
//             <button>Linkedin</button>
//           </Card.Link>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// export default ProfileCard;
