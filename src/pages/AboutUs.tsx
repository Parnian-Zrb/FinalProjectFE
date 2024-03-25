import React from "react";
import ContactUsForm from "../components/ContactUsForm";
import ProfileCard from "../components/ProfileCard.tsx";
const AboutUs: React.FC = () => {
  return (
    <div>
      <h1>AboutUs</h1>
      <p>
        Welcome to our food sharing recipe about page! Here, we believe in the
        power of community, connection, and delicious food. Our platform is
        dedicated to fostering a culture of sharing homemade recipes, culinary
        experiences, and heartfelt stories. Whether you're a seasoned chef or a
        kitchen newbie, you'll find a wealth of inspiration, creativity, and
        mouthwatering dishes to explore and enjoy. Join us on this culinary
        journey as we celebrate the joy of cooking and the beauty of sharing
        food with those we love.
      </p>
      <div className="ProfileCard">
        <ProfileCard
          name={"Parnian Zarbafian"}
          description={"Web Developer"}
          image={
            "https://media.istockphoto.com/id/1346223165/photo/encryption-your-data-binary-code-and-digital-lock-hacker-attack-and-data-breach-big-data-with.jpg?s=1024x1024&w=is&k=20&c=JJ-fCEmaInOhepWmnbRUe3Gonshg4lVs5foz2Zu5wxU="
          }
        />
      </div>
      <div className="ProfileCard">
        <ProfileCard
          name={"Parnian Zarbafian"}
          description={"Web Developer"}
          image={
            "https://media.istockphoto.com/id/1346223165/photo/encryption-your-data-binary-code-and-digital-lock-hacker-attack-and-data-breach-big-data-with.jpg?s=1024x1024&w=is&k=20&c=JJ-fCEmaInOhepWmnbRUe3Gonshg4lVs5foz2Zu5wxU="
          }
        />
      </div>
      <div className="ProfileCard">
        <ProfileCard
          name={"Parnian Zarbafian"}
          description={"Web Developer"}
          image={
            "https://media.istockphoto.com/id/1346223165/photo/encryption-your-data-binary-code-and-digital-lock-hacker-attack-and-data-breach-big-data-with.jpg?s=1024x1024&w=is&k=20&c=JJ-fCEmaInOhepWmnbRUe3Gonshg4lVs5foz2Zu5wxU="
          }
        />
      </div>
      <ContactUsForm />
    </div>
  );
};

export default AboutUs;
