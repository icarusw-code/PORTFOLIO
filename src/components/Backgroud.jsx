import React, { useEffect } from "react";
import { backgroundImg } from "../constants";

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
        {backgroundImg.map((background, index) => (
          <div
            className="keyart_layer parallax"
            id={`keyart-${index}`}
            style={{ backgroundImage: `url(${background.img})` }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Backgroud;
