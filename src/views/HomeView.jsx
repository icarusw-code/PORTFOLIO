import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import Journey from "../components/Journey";
import Site from "../components/Site";
import Port from "../components/Port";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";
import Main from "../components/Main";
import Backgroud from "../components/Backgroud";
import { Skill } from "../components/Skill";

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Backgroud />
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Journey />
        <Contacts />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;
