import React from "react";
import { Icon } from "@mdi/react";
import { mdiSpeedometer } from "@mdi/js";

import about from "../assets/img/about.jpg";

import { introText } from "../constants";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h1 className="intro__title">{introText.title}</h1>
        <div className="intro__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="intro__text">
          <div className="text">
            {introText.desc.map((intro, key) => (
              <div className="textbox" key={key}>
                <div>
                  <Icon path={intro.icon} size={3} />
                </div>
                <div>
                  <div className="textbox__title">{intro.title}</div>
                  <div className="textbox__content">
                    <div>{intro.content[0]}</div>
                    <div>{intro.content[1]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="img">
            <img src={about} alt="어바웃" />
          </div>
          <div className="about">Hello I'm seongjin</div>
        </div>
        <div className="intro__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
