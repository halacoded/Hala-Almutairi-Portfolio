import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w99q1ig", "template_lhmkiu9", form.current, {
        publicKey: "Q3QOSOuEZ0heUJpMs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk To Me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                halaalmutari5@gmail.com
              </span>
              <a
                href="mailto:halaalmutari5@gmail.com"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">(965+)51030024</span>
              <a href="https://wa.me/95651030024" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="uil uil-discord contact__card-icon"></i>

              <h3 className="contact__card-title">Discord</h3>
              <span className="contact__card-data">halaaaaa</span>
              <a
                href="https://discordapp.com/users/942515421507121172"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="text"
                name="email"
                className="contact__form-input"
                placeholder="Insert your Email"
              />
            </div>
            <div className="contact__form-div contact__form-are">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                className="contact__form-input"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="button button--dark">
              Send Message
              <i className="uil uil-message send__icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
