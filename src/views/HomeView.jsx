import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";
import Main from "../components/Main";

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contacts />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;
