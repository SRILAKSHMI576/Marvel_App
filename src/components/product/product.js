import React from "react";
import "./style.css";

function Product() {
  return (
    <div className="item">
      <div>
        <h3 className="loved-by-users-reco-copy-2">
          Loved by users, <br />
          recommended by experts
        </h3>
        <p className="lorem-ipsum">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>

        <button className="shape">Primary CTA</button>
      </div>

      <div>
        <img
          className="group4"
          src={require("../../assets/Group 4.png")}
          alt="background"
        />
      </div>
    </div>
  );
}

export default Product;
