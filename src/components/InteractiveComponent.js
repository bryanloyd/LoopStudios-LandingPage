import React from "react";
import interactive from "../images/mobile/image-interactive.jpg";

const InteractiveComponent = () => {
  return (
    <>
      <section className="interactive">
        <div>
          <img src={interactive} alt="" />
        </div>
        <div>
          <h1>the leader in interactive vr</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
    </>
  );
};

export default InteractiveComponent;
