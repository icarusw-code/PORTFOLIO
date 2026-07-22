import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Skip = () => {
  const { content } = useLanguage();
  return <a className="skip-link" href="#main">{content.ui.skipToContent}</a>;
};

export default Skip;
