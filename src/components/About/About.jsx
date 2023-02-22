import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import team from "../../assets/team.png";

import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="about__wrapper">

      <div className="section__title">
        <h1 className="title__us">About Us</h1>
      </div>

      <div className="about__content">
        <div className="about__img">
          <img className="team__img" src={team} alt="" />
        </div>
        <div className="about__desc">
          <h3 className="heading__3">A team of passionate designers and developers</h3>
          <div className="p r__space">
            <strong className="bold__text">Creative digital agency </strong>with solid design and development expertise. 
            <br />
            <br />
            <strong>We create for you:</strong>
          </div>
          <ul role="list" className="list w__list-unstyled">
            <li className="list__item">Outshine the competition</li>
            <li className="list__item">Accelerate your revenue</li>
            <li className="list__item">Increase conversions</li>
            <li className="list__item">Improve your brand image</li>
          </ul>
        </div>
      </div>

      </div>
    </section>
  );
}

export default About;
