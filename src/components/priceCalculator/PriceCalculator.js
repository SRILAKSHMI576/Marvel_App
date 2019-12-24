import React from "react";
import "./style.css";

class PriceCalculator extends React.Component {
  state = {
    count: 0,
    monthly_lollipop: 0,
    monthly_icecandy: 0,
    monthly_savings: 0,
    yearly_lollipop: 0,
    yearly_icecandy: 0,
    yearly_savings: 0,
    isChecked: false
  };

  hangleClick = number => {
    this.setState({
      monthly_lollipop: number,
      monthly_icecandy: 2 * number,
      monthly_savings: 2 * number - number
    });
  };

  hangleClicking = value => {
    this.setState({
      yearly_lollipop: value,
      yearly_icecandy: 2 * value,
      yearly_savings: (2 * value - value) / 2
    });
  };

  handleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };
  render() {
    var result;
    if (this.state.isChecked) {
      result = (
        <div>
          yearly_lollipop: {this.state.yearly_lollipop} <br />
          yearly_Icecandy: {this.state.yearly_icecandy} <br />
          yearly_your savings with lollipop: {this.state.yearly_savings} (50%
          off)
        </div>
      );
    } else {
      result = (
        <div>
          monthly_lollipop: {this.state.monthly_lollipop} <br />
          monthly_Icecandy: {this.state.monthly_icecandy} <br />
          monthly_your savings with lollipop: {this.state.monthly_savings}
        </div>
      );
    }
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
              this.hangleClicking(25);
            }}
          >
            25 Serving
          </button>
          <button
            className="rectangle"
            onClick={() => {
              this.hangleClick(50);
              this.hangleClicking(50);
            }}
          >
            50 Serving
          </button>
          <button
            className="rectangle"
            onClick={() => {
              this.hangleClick(100);
              this.hangleClicking(100);
            }}
          >
            100 Serving
          </button>
          <button
            className="rectangle"
            onClick={() => {
              this.hangleClick(200);
              this.hangleClicking(200);
            }}
          >
            200 Serving
          </button>
        </div>
        <div>
          <input type="checkbox" onChange={this.handleChange} />
        </div>
        {result}
      </div>
    );
  }
}

export default PriceCalculator;
