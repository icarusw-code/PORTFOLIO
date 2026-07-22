import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Port = () => {
  const { content } = useLanguage();
  const { selectedProjects, ui } = content;

  return (
  <section id="projects" className="section section--cream">
    <div className="page-shell">
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">{ui.projectsEyebrow}</p>
          <h2>{ui.projectsTitle}</h2>
        </div>
        <p>{ui.projectsIntro}</p>
      </div>
      <div className="project-grid">
        {selectedProjects.map((project) => (
          <article className="project-card" key={project.index}>
            <div className="project-card__top">
              <span>{project.index}</span>
              <p>{project.type}</p>
            </div>
            <h3>{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
            <div className="tag-list">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            {project.links && (
              <div className="project-links" aria-label={`${project.title} links`}>
                {project.links.map((link) => (
                  <a className="text-link" href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                    {link.label || ui.viewProject} <span>↗</span>
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Port;
