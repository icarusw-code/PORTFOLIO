import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { content } = useLanguage();
  return (
  <footer className="site-footer">
    <div className="page-shell site-footer__inner">
      <p>© {new Date().getFullYear()} Jayce (Seongjin) Choi</p>
      <p>{content.ui.footerBuilt}</p>
    </div>
  </footer>
  );
};

export default Footer;
