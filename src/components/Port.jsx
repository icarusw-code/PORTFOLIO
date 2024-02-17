import React, { useEffect, useRef, useState } from "react";
import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
  const horizontalRef = useRef(null);
  const sectionRef = useRef([]);

  // 뷰포트 너비를 상태로 관리합니다.
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 뷰포트 너비 변경 시 상태를 업데이트하는 이벤트 리스너를 추가합니다.
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // 모바일 환경이 아닐 때만 GSAP 애니메이션을 초기화합니다.
    if (viewportWidth > 800) {
      // 800px을 모바일 환경의 최대 너비로 가정
      gsap.registerPlugin(ScrollTrigger);

      const horizontal = horizontalRef.current;
      const sections = sectionRef.current;

      let scrollTween = gsap.to(sections, {
        xPercent: -120 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontal,
          start: "top 56px",
          end: () => "+=" + horizontal.offsetWidth,
          pin: true,
          scrub: 1,
          markers: false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // 컴포넌트 언마운트 시 또는 너비 변경 시 애니메이션을 제거합니다.
      return () => {
        scrollTween.kill();
        // ScrollTrigger.kill();
      };
    }

    // 이벤트 리스너를 정리합니다.
    return () => window.removeEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <section id="port" ref={horizontalRef}>
      <div className="port__inner">
        <div className="port__title">
          portfolio <em>포폴 작업물</em>
        </div>
        <div className="port__wrap">
          {portText.map((port, key) => (
            <article
              className={`port__item p${key + 1}`}
              key={key}
              ref={(el) => (sectionRef.current[key] = el)}
            >
              <span className="num">{port.num}.</span>
              <div>
                <img src={port.img} alt={port.name} />
              </div>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              {port.view && (
                <a
                  href={port.view}
                  target="_blank"
                  className="site"
                  rel="noreferrer"
                >
                  VIEW
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
