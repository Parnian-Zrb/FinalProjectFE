import React from "react";
import ContactUsForm from "../components/ContactUsForm";

import ProfileCard from "../components/RecipeCard";

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
      <div className="container">
        <ProfileCard name={""} image={""} bio={""} />
        <ProfileCard name={""} image={""} bio={""} />
        <ProfileCard name={""} image={""} bio={""} />
      </div>
      <ContactUsForm />
    </div>
  );
};

export default AboutUs;
