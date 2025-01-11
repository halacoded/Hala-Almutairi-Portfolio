import React, { useState } from "react";
import "./project.css";
import { data } from "./data";
import List from "./List";
import Item from "./Item";

const Project = () => {
  const [projectItems, setMenuItems] = useState(data);

  return (
    <section className="project section" id="project">
      <h2 className="section__title">Projects Experience</h2>
      <span className="section__subtitle">Recent Projects</span>

      <div className="project__container container grid">
        <Item projectItems={projectItems} />
      </div>
    </section>
  );
};

export default Project;
