import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Intro = () => {
  const { content } = useLanguage();
  const { heroData, ui } = content;

  return (
  <section id="intro" className="hero">
    <div className="hero__content page-shell">
      <div className="hero__copy">
        <p className="eyebrow"><span>●</span>{heroData.eyebrow}</p>
        <h1>{heroData.title}</h1>
        <p className="hero__description">{heroData.description}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#case-studies">{ui.heroPrimary}</a>
          <a className="button button--ghost" href="#contact">{ui.heroSecondary}</a>
          <a className="button button--ghost" href="/jayce-choi-resume.pdf" target="_blank" rel="noreferrer">{ui.heroResume}</a>
        </div>
        <p className="hero__availability">{heroData.availability}</p>
      </div>
      <div className="hero__panel" aria-label={ui.terminalLabel}>
        <div className="terminal__bar">
          <span /><span /><span />
          <code>{ui.terminalFile}</code>
        </div>
        <div className="terminal__body">
          <p><b>{ui.terminalRole}</b><span>{ui.terminalRoleValue}</span></p>
          <p><b>{ui.terminalDomain}</b><span>{ui.terminalDomainValue}</span></p>
          <p><b>{ui.terminalFocus}</b><span>{ui.terminalFocusValue}</span></p>
          <p><b>{ui.terminalStatus}</b><span className="status-live">{ui.terminalStatusValue}</span></p>
        </div>
      </div>
    </div>
    <div className="hero__metrics page-shell">
      {heroData.metrics.map((metric) => (
        <div className="metric" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Intro;
