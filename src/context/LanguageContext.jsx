import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { siteContent } from "../constants";

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  const savedLanguage = window.localStorage.getItem("portfolio-language");
  if (savedLanguage === "en" || savedLanguage === "ko") return savedLanguage;
  return window.navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, content: siteContent[language] }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
