import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <h1>
        Looking for a <br />
        lollipop alternative?
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s.
      </p>
      <div>
        <button className="primary">Primary CTA</button>
        <button className="secondary">Secondary CTA</button>
      </div>
    </div>
  );
}

export default Header;
