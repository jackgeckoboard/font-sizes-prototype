import React, { Component } from "react";
import Leaderboard from "./components/Leaderboard";
import BarChart from "./components/BarChart";
import ColumnChart from "./components/ColumnChart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfCols: 6,
      colWidth: 310,
      bigFont: true
    };
  }

  changeNumberOfCols(e) {
    let numberOfCols = e.target.value;

    let colWidth = (1910 - 10 * (numberOfCols - 1)) / numberOfCols;

    this.setState({
      numberOfCols: numberOfCols,
      colWidth: colWidth
    });
  }

  increaseColumns() {
    if (this.state.numberOfCols < 8) {
      this.setColWidth(this.state.numberOfCols + 1);
      this.setState({
        numberOfCols: this.state.numberOfCols + 1
      });
    }
  }

  decreaseColumns() {
    if (this.state.numberOfCols > 4) {
      this.setColWidth(this.state.numberOfCols - 1);
      this.setState({
        numberOfCols: this.state.numberOfCols - 1
      });
    }
  }

  setColWidth(numberOfCols) {
    this.setState({
      colWidth: (1910 - 10 * (numberOfCols - 1)) / numberOfCols
    });
  }

  changeFontSize() {
    if (this.state.bigFont) {
      this.setState({
        bigFont: false
      });
    } else {
      this.setState({
        bigFont: true
      });
    }
  }

  render() {
    let scaleFactor = document.body.clientWidth / 2500;

    let dashboardStyle = {
      width: 1920,
      height: 1080,
      top: 100,
      position: "absolute",
      left: 50,
      transform: `scale(${scaleFactor})`,
      transformOrigin: "top left",
      boxShadow: "0 5px 0 20px black,0 5px 30px rgba(0,0,0,0.2)"
    };

    let layoutStyle = {
      width: this.state.colWidth * 2 + 20,
      float: "left",
      clear: "both"
    };

    return (
      <div className="aktiv bg-ui-black min-vh-100 border-box">
        <div className="w-100 fl bg-ui-mid-gray h3 pa2">
          <button
            onClick={this.decreaseColumns.bind(this)}
            className="button-reset bg-ui-light-gray bn ph3 pv2 ml3 br2 pointer dim br--left"
          >
            -
          </button>
          <div className="pa2 white dib">{this.state.numberOfCols}</div>
          <button
            onClick={this.increaseColumns.bind(this)}
            className="button-reset bg-ui-light-gray bn ph3 pv2 br2 pointer dim br--right "
          >
            +
          </button>
          {this.state.bigFont ? (
            <button
              className="bg-ui-light-gray bn ph3 pv2 ml3 br2 pointer dim"
              onClick={this.changeFontSize.bind(this)}
            >
              Make font small
            </button>
          ) : (
            <button
              onClick={this.changeFontSize.bind(this)}
              className="bg-ui-light-gray bn ph3 pv2 ml3 br2 pointer dim"
            >
              Make font big
            </button>
          )}
        </div>
        <div className="bg-theme-dark-bg fl white cf" style={dashboardStyle}>
          {this.state.numberOfCols >= 6 ? (
            <div>
              <Leaderboard
                size={this.state.colWidth}
                bigFont={this.state.bigFont}
              />
              <BarChart
                size={this.state.colWidth}
                bigFont={this.state.bigFont}
              />
              <BarChart
                size={this.state.colWidth}
                twoByTwo
                bigFont={this.state.bigFont}
              />
              <ColumnChart
                size={this.state.colWidth}
                bigFont={this.state.bigFont}
              />
            </div>
          ) : (
            <div>
              <div className="cf" style={layoutStyle}>
                <Leaderboard
                  size={this.state.colWidth}
                  bigFont={this.state.bigFont}
                />
                <BarChart
                  size={this.state.colWidth}
                  bigFont={this.state.bigFont}
                />
                <ColumnChart
                  size={this.state.colWidth}
                  bigFont={this.state.bigFont}
                />
              </div>
              <BarChart
                size={this.state.colWidth}
                twoByTwo
                bigFont={this.state.bigFont}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
