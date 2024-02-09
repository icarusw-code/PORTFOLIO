import React, { useEffect } from "react";

import background0 from "../assets/img/background/background0.png";
import background1 from "../assets/img/background/background1.png";
import background2 from "../assets/img/background/background2.png";
import background3 from "../assets/img/background/background3.png";
import background4 from "../assets/img/background/background4.png";
import background5 from "../assets/img/background/background5.png";
import background6 from "../assets/img/background/background6.png";
import background7 from "../assets/img/background/background7.png";
import background8 from "../assets/img/background/background8.png";

const Backgroud = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxLayers = document.querySelectorAll(".parallax");
      parallaxLayers.forEach((layer, index) => {
        const speed = index * 30; // 각 레이어별 속도 조절
        const offset = window.pageYOffset;
        layer.style.transform = `translateY(${(offset * speed) / 1000}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="background">
      <div className="keyart" id="parallax">
        <div
          className="keyart_layer parallax"
          id="keyart-0"
          style={{ backgroundImage: `url(${background0})` }}
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-1"
          style={{ backgroundImage: `url(${background1})` }}
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-2"
          style={{ backgroundImage: `url(${background2})` }}
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-3"
          style={{ backgroundImage: `url(${background3})` }}
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-4"
          style={{ backgroundImage: `url(${background4})` }}
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-5"
          style={{ backgroundImage: `url(${background5})` }}
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-6"
          style={{ backgroundImage: `url(${background6})` }}
        ></div>
        <div className="keyart_layer" id="keyart-scrim"></div>
        <div
          className="keyart_layer parallax"
          id="keyart-7"
          style={{ backgroundImage: `url(${background7})` }}
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-8"
          style={{ backgroundImage: `url(${background8})` }}
        ></div>
      </div>
    </section>
  );
};

export default Backgroud;
