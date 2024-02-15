import React from "react";
import { siteText } from "../constants";

const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          MASTERPIECE <em>나의 대표작</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            <article className={`site__item s${key + 1}`} key={key}>
              <span className="num">
                {key + 1}.<span className="site-title-small">{site.title}</span>
              </span>
              <div className="content">
                <div className="video">
                  <iframe
                    src={site.videolink}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video"
                  ></iframe>
                </div>
                <div className="text">
                  <div>{site.text[0]}</div>
                  <div>{site.text[1]}</div>
                  <div>{site.text[2]}</div>
                </div>
              </div>
              <div className="btn">
                {/* <a href={site.code}>code</a> */}
                <a href={site.view}>See More</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
