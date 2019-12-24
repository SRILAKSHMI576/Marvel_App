import React from "react";
import "./style.css";

function InfoComponent() {
  return (
    <div className="info">
      <div className="BG">
        <img
          className="bg"
          src={require("../../assets/BG.png")}
          alt="background"
        />
      </div>

      <div className="Group">
        <img
          className="group"
          src={require("../../assets/Group 6.png")}
          alt="group"
        />
      </div>

      <h1 className="heading">
        This is a heading in <br /> two lines
      </h1>
    </div>
  );
}

export default InfoComponent;
