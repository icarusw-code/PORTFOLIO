import React from "react";
import { journeyText } from "../constants";

const Journey = () => {
  return (
    <section id="journey">
      <div className="journey__inner">
        <h2 className="journey__title">My Journey</h2>
        <div className="journey__desc">
          {journeyText.map((journey, key) => (
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{journey.title}</h3>
              <div className="paragraph">
                {journey.desc.map((desc, key) => (
                  <li key={key}>{desc}</li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
