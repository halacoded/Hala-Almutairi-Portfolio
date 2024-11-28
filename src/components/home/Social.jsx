import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://wa.me/95655030024"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-whatsapp"></i>
      </a>
      <a
        href="https://discordapp.com/users/942515421507121172"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-discord"></i>
      </a>
      <a
        href="https://github.com/halacoded"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
