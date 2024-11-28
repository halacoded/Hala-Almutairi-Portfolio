import React from "react";
import "./about.css";
import AboutImage from "../../assests/WhatsApp Image 2024-11-28 at 3.31.11 PM.jpeg";
const About = () => (
  <section className=" about section" id="about">
    <h2 className="section__title">About me</h2>
    <span className="section__subtitle">My Introduction</span>
    <div className="about__container container gird">
      <img src={AboutImage} alt="AboutImage" className="about__img" />
      <div className="about__data">
        <p className="about__description">
          Salam! I'm Hala Almutari, a fourth-year Computer Engineering student
          at Kuwait University. I recently completed the FullStack2024 program
          at Coded Academy, which has enhanced my skills in both front-end and
          back-end development. I'm also the founder of Fahim, a platform
          dedicated to helping students excel in their studies. My passion for
          coding drives me to continuously learn and create innovative web
          applications. Let's connect and turn your ideas into reality!
        </p>
        <p className="about__skills">
          <strong>Technical Skills:</strong> <br /> JavaScript | HTML | CSS |
          React.js | Node.js | MongoDB | React Native | tailwind | Netlify |
          Express | MERN Stack
        </p>
      </div>
    </div>
  </section>
);

export default About;
