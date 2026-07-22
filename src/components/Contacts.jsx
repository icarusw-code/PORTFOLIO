import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Contacts = () => {
  const { content } = useLanguage();
  const { contactText, ui } = content;

  return (
  <section id="contact" className="contact-section">
    <div className="page-shell contact-section__inner">
      <div>
        <p className="eyebrow">{ui.contactEyebrow}</p>
        <h2>{ui.contactTitle}</h2>
      </div>
      <div className="contact-links">
        {contactText.map((contact) => (
          <a href={contact.link} key={contact.label} target={contact.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            <span>{contact.label}</span>
            <strong>{contact.value}</strong>
            <i>↗</i>
          </a>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Contacts;
