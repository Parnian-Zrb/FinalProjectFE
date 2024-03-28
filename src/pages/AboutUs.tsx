import React from "react";
import ContactUsForm from "../components/ContactUsForm";
import ProfileCard from "../components/ProfileCard.tsx";
import ParnianImage from "../assets/Parnian.jpg";
import FarahnazImage from "../assets/Farahnaz.jpg";
import ShellyImage from "../assets/Shelly.jpg";
import "./AboutUs.css";
const AboutUs: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">AboutUs</h1>
      <p className="about-p">
        Welcome to our food sharing recipe about page! Here, we believe in the
        power of community, connection, and delicious food. Our platform is
        dedicated to fostering a culture of sharing homemade recipes, culinary
        experiences, and heartfelt stories. Whether you're a seasoned chef or a
        kitchen newbie, you'll find a wealth of inspiration, creativity, and
        mouthwatering dishes to explore and enjoy. Join us on this culinary
        journey as we celebrate the joy of cooking and the beauty of sharing
        food with those we love.
      </p>
      <hr />
      <div className="ProfileCardContainer">
        <ProfileCard
          name={"Parnian Zarbafian"}
          title={"Web developer"}
          description={"I'm a web developer who's all about art and design."}
          image={ParnianImage}
          githubLink={"https://github.com/Parnian-Zrb"}
          LinkedInLink={"https://www.linkedin.com/in/parnian-zarbafian/"}
        />

        <ProfileCard
          name={"Farahnaz Mehrafza"}
          description={
            "I'm all about tech,Constantly on the lookout for new stuff to learn "
          }
          image={FarahnazImage}
          githubLink={"https://github.com/FarahnazMehrafza"}
          LinkedInLink={"http://www.linkedin.com/in/farahnazmehrafza"}
          title={"Full-stack developer"}
        />
        <ProfileCard
          name={"Shelly Wu"}
          title={"UX Developer"}
          description={"I love learning new thing 🌱"}
          image={ShellyImage}
          LinkedInLink={"http://www.linkedin.com/in/shellythedesigner"}
          githubLink={"https://github.com/shellythedesigner"}
        />
      </div>
      <hr></hr>
      <h1> Contact Us</h1>
      <ContactUsForm />
    </div>
  );
};

export default AboutUs;