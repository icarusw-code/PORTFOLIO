import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Skill = () => {
  const { content } = useLanguage();
  const { expertiseText, ui } = content;

  return (
  <section id="expertise" className="section section--light">
    <div className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">{ui.expertiseEyebrow}</p>
        <h2>{ui.expertiseTitle}</h2>
        <p>{ui.expertiseIntro}</p>
      </div>
      <div className="expertise-grid">
        {expertiseText.map((item) => (
          <article className="expertise-card" key={item.index}>
            <span className="card-index">{item.index}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tag-list">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};
