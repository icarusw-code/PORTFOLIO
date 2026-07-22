import React from "react";
import HomeView from "./views/HomeView";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => (
  <LanguageProvider>
    <HomeView />
  </LanguageProvider>
);

export default App;
