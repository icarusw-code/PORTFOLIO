import React from "react";

import { skillText } from "../constants";

export const Skill = () => {
  return (
    <section id="skill">
      <h2 className="title">Skills</h2>
      <div className="skill__container">
        {skillText.map((skill, key) => (
          <div className="skill__box" key={key}>
            <div className="skill__title">{skill.title}</div>
            <img className="skill__image" src={skill.img} alt={skill.title} />
          </div>
        ))}
      </div>
    </section>
  );
};
