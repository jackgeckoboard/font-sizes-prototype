import React, { Component } from "react";

class Leaderboard extends Component {
  render() {
    let widgetSize = {
      width: this.props.twoByTwo ? this.props.size * 2 + 10 : this.props.size,
      height: this.props.twoByTwo ? this.props.size * 2 + 10 : this.props.size
    };

    return (
      <div
        className={this.props.bigFont ? "big widget" : "small widget"}
        style={widgetSize}
      >
        <div className="leaderboard">
          <div className="title">Leaderboard</div>

          <div className="row">
            <div className="label">Billy</div>
            <div className="value">$45.6</div>
          </div>
          <div className="row">
            <div className="label">Suzy</div>
            <div className="value">$198.5</div>
          </div>
          <div className="row">
            <div className="label">Sally</div>
            <div className="value">$8K</div>
          </div>
          <div className="row">
            <div className="label">Mary</div>
            <div className="value">$19.09</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
