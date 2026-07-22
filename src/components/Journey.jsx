import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Journey = () => {
  const { content } = useLanguage();
  const { journeyText, ui } = content;

  return (
  <section id="experience" className="section section--experience">
    <div className="page-shell">
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">{ui.experienceEyebrow}</p>
          <h2>{ui.experienceTitle}</h2>
        </div>
        <p>{ui.experienceIntro}</p>
      </div>
      <div className="timeline">
        {journeyText.map((item) => (
          <article className="timeline__item" key={item.period}>
            <p className="timeline__period">{item.period}</p>
            <div>
              <h3>{item.title}</h3>
              <p className="timeline__organization">{item.organization}</p>
            </div>
            <div>
              <p className="timeline__location">{item.location}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Journey;
