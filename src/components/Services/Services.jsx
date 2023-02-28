import React from "react";
import brush from "../../assets/brush.png";
import file from "../../assets/file.png";
import brand from "../../assets/pict.png";


import "./Services.css";

function Services() {
  return (
    <section id="service">
      <div className="section__wrapper">
        <div data-aos="fade-in" data-aos-easing="ease-in" data-aos-durration="" className="section__title">
          <h1 className="title__us">Our Services</h1>
        </div>

        <div className="service__content">
          <div id="cards">
            <div data-aos="fade-right" data-aos-easing="ease-in" data-aos-durration="300ms" class="card">
              <div class="card__content">
                <h1 className="card__text">Design</h1>
                <img src={brush} className="card__icon" />
              </div>
            </div>
            <div data-aos="fade-right" data-aos-easing="ease-in" data-aos-durration="350ms" class="card">
              <div class="card__content">
                <h1 className="card__text">Development</h1>
                <img src={file} className="card__icon" />
              </div>
            </div>
            <div data-aos="fade-right" data-aos-easing="ease-in" data-aos-durration="400ms" class="card">
              <div class="card__content">
                <h1 className="card__text">Branding</h1>
                <img src={brand} className="card__icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

