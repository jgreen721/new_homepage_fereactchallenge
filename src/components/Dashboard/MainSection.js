import React from "react";

const MainSection = () => {
  return (
    <div className="main-section-wrapper">
      <div className="top-main-row">
        <img
          className="top-main-img"
          src="./assets/images/image-web-3-desktop.jpg"
          alt=""
        />
      </div>
      <div className="bottom-main-row">
        <div className="bottom-main-col">
          <h1 className="bottom-main-h1">The Bright Future of Web 3.0?</h1>
        </div>
        <div className="bottom-main-col">
          <p className="bottom-blurb">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="read-more-btn">
            <h4>Read More</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
