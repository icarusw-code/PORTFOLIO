import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { trackEvent } from "../utils/analytics";

const Site = () => {
  const { content } = useLanguage();
  const { caseStudies, ui } = content;

  return (
  <section id="case-studies" className="section section--dark">
    <div className="page-shell">
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">{ui.caseEyebrow}</p>
          <h2>{ui.caseTitle}</h2>
        </div>
        <p>{ui.caseIntro}</p>
      </div>
      <div className="case-list">
        {caseStudies.map((study) => (
          <article className="case-card" key={study.index}>
            <header className="case-card__header">
              <span className="case-card__number">{study.index}</span>
              <div>
                <p className="case-card__label">{study.label}</p>
                <h3>{study.title}</h3>
              </div>
            </header>
            <p className="case-card__summary">{study.summary}</p>
            <div className="case-card__details">
              <div><span>{ui.challenge}</span><p>{study.challenge}</p></div>
              <div><span>{ui.contribution}</span><p>{study.contribution}</p></div>
            </div>
            <div className="case-card__footer">
              <div className="impact-list">
                {study.impact.map((impact) => <strong key={impact}>{impact}</strong>)}
              </div>
              <div className="tag-list tag-list--dark">
                {study.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
            <p className="case-card__note">{study.note}</p>
            {(study.index === "01" || study.index === "02") && <a className="case-card__demo-link" href="#demos" onClick={() => trackEvent("demo_section_click", { case_study: study.title })}>{ui.openDemo} <span>↘</span></a>}
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Site;
