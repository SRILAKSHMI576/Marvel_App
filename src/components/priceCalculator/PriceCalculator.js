import React from "react";
import "./style.css";
import Switch from "react-switch";

class PriceCalculator extends React.Component {
  state = {
    lollipop: 0,
    icecandy: 0,
    savings: 0,
    checked: false,
    number: 0
  };

  updatePrices = () => {
    const div = this.state.checked ? 2 : 1;
    this.setState({
      lollipop: this.state.number / div,
      icecandy: (2 * this.state.number) / div,
      savings: (2 * this.state.number - this.state.number) / div
    });
  };

  hangleClick = number => {
    this.setState(
      {
        number: number
      },
      () => {
        this.updatePrices();
      }
    );
  };

  handleChange = checked => {
    this.setState(
      {
        checked: checked
      },
      () => {
        this.updatePrices();
      }
    );
  };

  render() {
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
        <div className="toggle">
          <div>
            <label className="annual">Annual</label>
            <label> 50% off</label>
          </div>
          <div>
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              onColor={"#0099FF"}
              width={45}
              height={20}
            />
          </div>
          <label className="monthly">Monthly</label>
        </div>

        <div>
          {
            <div className="boxes">
              <div className="rectangle-copy-17">
                <label>lollipop:</label>
                <div className="dollar-copy">${this.state.lollipop}</div>
                <p className="body-para"> For 100 serving</p>
              </div>
              <div className="rectangle-copy-17">
                <label>Icecandy: </label>
                <div className="dollar-copy"> ${this.state.icecandy}</div>
                <p className="body-para"> For 100 serving</p>
              </div>
              <div className="rectangle-copy-19">
                <label>
                  your savings <br />
                  with lollipop:
                </label>
                <div className="dollar-copy-savings">${this.state.savings}</div>
                <p className="body-copy-37"> For month</p>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default PriceCalculator;
