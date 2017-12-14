import React, { Component } from "react";

class ColumnChart extends Component {
  render() {
    let widgetSize = {
      width: this.props.size * 2 + 10,
      height: this.props.size
    };

    let contentSize = {
      height: this.props.size - (this.props.bigFont ? 55 : 40)
    };

    return (
      <div
        className={this.props.bigFont ? "big widget" : "small widget"}
        style={widgetSize}
      >
        <div className="column-chart">
          <div className="title">Column Chart</div>
          <div className="columns-content-wrapper" style={contentSize}>
            <div className="y-axis-labels">
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>

            <div className="column">
              <div className="medium-column column-fill" />
              <div>Label</div>
            </div>
            <div className="column">
              <div className="large-column column-fill" />
              <div>Label</div>
            </div>
            <div className="column">
              <div className="small-column column-fill" />
              <div>Label</div>
            </div>
            <div className="column">
              <div className="medium-column column-fill" />
              <div>Label</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColumnChart;
