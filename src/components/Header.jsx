import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { trackEvent } from "../utils/analytics";

const Header = () => {
  const [show, setShow] = useState(false);
  const { language, setLanguage, content } = useLanguage();
  const { headerNav, ui } = content;

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setShow(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const changeLanguage = (nextLanguage) => {
    if (nextLanguage !== language) {
      trackEvent("language_change", {
        previous_language: language,
        selected_language: nextLanguage,
      });
    }
    setLanguage(nextLanguage);
  };

  return (
    <header id="header" className="site-header">
      <div className="site-header__inner page-shell">
        <a className="brand" href="#intro" aria-label="Jayce Choi home">
          <span className="brand__mark">JC</span>
          <span className="brand__text">JAYCE CHOI<small>{ui.brandSubtitle}</small></span>
        </a>
        <nav className={`site-nav ${show ? "is-open" : ""}`} aria-label="Primary navigation">
          {headerNav.map((nav) => (
            <a href={nav.url} key={nav.url} onClick={() => setShow(false)}>{nav.title}</a>
          ))}
        </nav>
        <div className="language-switch" role="group" aria-label="Language selection">
          <button className={language === "en" ? "is-active" : ""} type="button" onClick={() => changeLanguage("en")} aria-pressed={language === "en"}>EN</button>
          <span>/</span>
          <button className={language === "ko" ? "is-active" : ""} type="button" onClick={() => changeLanguage("ko")} aria-pressed={language === "ko"}>KR</button>
        </div>
        <button
          className={`menu-toggle ${show ? "is-open" : ""}`}
          type="button"
          aria-label={show ? ui.closeNavigation : ui.openNavigation}
          aria-expanded={show}
          onClick={() => setShow((value) => !value)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
};

export default Header;
