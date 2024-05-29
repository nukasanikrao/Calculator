import React, { Component } from "react";

export default class keypad extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { result } = this.props;
    return (
      <>
        <div className="result">
          <p>{result}</p>
        </div>
      </>
    );
  }
}
