import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [ToggleState, setToggleState] = useState(0);
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-desktop  services__icon"></i>
            <h3 className="services__title">Small Business IT Support</h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              setToggleState(1);
            }}
          >
            View More
            <i className="uil uil-arrow-right  services__button-icon"></i>
          </span>
          <div
            className={
              ToggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  setToggleState(0);
                }}
              ></i>
              <h3 className="services__modal-title">
                Small Business IT Support
              </h3>
              <p className="services__modal-description">
                I offer a range of technical services to help small businesses
                thrive in the digital world. From web design to technical
                customer support, I ensure your business runs smoothly and
                effectively.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web Design</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Website Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Technical Customer Support
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Website Maintenance</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Website Deployment</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">SEO Optimization</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-brackets-curly services__icon"></i>
            <h3 className="services__title">Full Stack Development</h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              setToggleState(2);
            }}
          >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              ToggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  setToggleState(0);
                }}
              ></i>
              <h3 className="services__modal-title">Full Stack Development</h3>
              <p className="services__modal-description">
                I provide comprehensive full stack development services to build
                robust and scalable web applications.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Front-End Development (HTML, CSS, JavaScript, React.js)
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Back-End Development (Node.js, Express)
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Database Management (MongoDB)
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    API Development and Integration
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Deployment (Netlify)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-palette services__icon"></i>
            <h3 className="services__title">
              Portfolio <br></br> Development
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              setToggleState(3);
            }}
          >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              ToggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  setToggleState(0);
                }}
              ></i>
              <h3 className="services__modal-title">Portfolio Development</h3>
              <p className="services__modal-description">
                I offer specialized services to designers and creative
                individuals to help them build and enhance their professional
                portfolios. Let's showcase your work in the best possible way.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Custom Portfolio Design
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Responsive Web Development
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">SEO Optimization</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Content Management</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Social Media Integration
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Ongoing Support and Maintenance
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
