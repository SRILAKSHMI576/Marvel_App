import React from "react";
import "./style.css";

class PriceCalculator extends React.Component {
  state = {
    lollipop: 0,
    icecandy: 0,
    savings: 0,
    isChecked: false
  };

  hangleClick = number => {
    this.setState({
      lollipop: number,
      icecandy: 2 * number,
      savings: 2 * number - number
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
          yearly_lollipop: {this.state.lollipop / 2} <br />
          yearly_Icecandy: {this.state.icecandy / 2} <br />
          yearly_your savings with lollipop: {this.state.savings / 2}
        </div>
      );
    } else {
      result = (
        <div>
          monthly_lollipop: {this.state.lollipop} <br />
          monthly_Icecandy: {this.state.icecandy} <br />
          monthly_your savings with lollipop: {this.state.savings}
        </div>
      );
    }
    return (
      <div>
        <h3 className="compare">Compare pricing today!</h3>
        <p className="lorem-ipsum-is-simpl">
          Lorem Ipsum is simply dummy text of the printing and
          <a href="http://marvel.app" className="type">
            typesetting.
          </a>
        </p>
        <div className="buttons">
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
          <input type="checkbox" onChange={this.handleChange} />
        </div>
        {result}
      </div>
    );
  }
}

export default PriceCalculator;
