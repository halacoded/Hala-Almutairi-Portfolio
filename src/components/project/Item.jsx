import React from "react";

const Item = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, title, description, links, images } = projectItem;
        return (
          <div key={id} className="project__items card card-two">
            <div className="project__img-wrapper">
              <img
                src={images.backendImage}
                alt="Project"
                className="project__img"
              />
            </div>
            <div className="project__content">
              <h3 className="project__title">{title}</h3>
              <p className="project__description">{description}</p>
              <div>
                <a
                  href={links.backendRepo}
                  className="project__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Item;
