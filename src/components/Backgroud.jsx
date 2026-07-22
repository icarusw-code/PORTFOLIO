import React from "react";

const Backgroud = () => (
  <div className="system-scene" aria-hidden="true">
    <div className="system-scene__glow" />
    <div className="system-scene__sun">
      <span className="sun-ring sun-ring--one" />
      <span className="sun-ring sun-ring--two" />
      <i className="sun-core" />
    </div>
    <div className="system-scene__grid" />
    <div className="system-scene__orbit orbit--one" />
    <div className="system-scene__orbit orbit--two" />
    <div className="system-scene__signal signal--one" />
    <div className="system-scene__signal signal--two" />
    <div className="system-scene__packets packets--one">
      <i /><i /><i /><i />
    </div>
    <div className="system-scene__packets packets--two">
      <i /><i /><i />
    </div>
    <div className="system-scene__factory factory--back">
      <span /><span /><span /><span /><span />
    </div>
    <div className="system-scene__factory factory--front">
      <span /><span /><span /><span /><span /><span />
    </div>
    <div className="system-scene__rail">
      <i /><i /><i /><i /><i /><i />
    </div>
  </div>
);

export default Backgroud;
