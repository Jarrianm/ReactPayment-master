import React, { Component } from "react";
import "./Payment.css";

class Payment extends Component {
  render() {
    return (
      <div className="payment">
        <h1>Your monthly payment is ${this.props.payment}</h1>
      </div>
    );
  }
}

export default Payment;
