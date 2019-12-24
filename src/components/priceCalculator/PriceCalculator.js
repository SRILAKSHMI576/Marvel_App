import React from "react";
import "./style.css";

class PriceCalculator extends React.Component {
  state = {
    count: 0,
    lollipop: 0,
    icecandy: 0,
    savings: 0
  };

  hangleClick = number => {
    this.setState({
      lollipop: number,
      icecandy: 2 * number,
      savings: 2 * number - number
    });
  };

  render() {
    return (
      <div>
        <h3 className="compare">Compare pricing today!</h3>
        <p className="lorem-ipsum-is-simpl">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </p>
        <div>
          <button
            className="rectangle"
            onClick={() => {
              this.hangleClick(25);
            }}
          >
            25 Serving
          </button>
          <button
            className="rectangle"
            onClick={() => {
              this.hangleClick(50);
            }}
          >
            50 Serving
          </button>
          <button
            className="rectangle"
            onClick={() => {
              this.hangleClick(100);
            }}
          >
            100 Serving
          </button>
          <button
            className="rectangle"
            onClick={() => {
              this.hangleClick(200);
            }}
          >
            200 Serving
          </button>
        </div>
        <div>
          lollipop: {this.state.lollipop} <br />
          Icecandy: {this.state.icecandy} <br />
          your savings with lollipop: {this.state.savings}
        </div>
      </div>
    );
  }
}

export default PriceCalculator;
