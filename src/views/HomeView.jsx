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
import DemoLab from "../components/DemoLab";
import { Skill } from "../components/Skill";

const HomeView = () => (
  <>
    <Skip />
    <Header />
    <Main>
      <div className="hero-stage">
        <Backgroud />
        <Intro />
      </div>
      <Skill />
      <Site />
      <DemoLab />
      <Port />
      <Journey />
      <Contacts />
    </Main>
    <Footer />
  </>
);

export default HomeView;
