import React, { Component } from "react";
import "./Payment.css";

class Payment extends Component {
  render() {
    console.log(this.props.payment);
    console.log(this.props.updatedPayment);
    return this.props.change ? (
      <div className="payment">
        <h1>Your monthly payment is ${this.props.payment}</h1>
      </div>
    ) : (
      <div className="payment">
        <h1>Your monthly payment is ${this.props.payment}</h1>
      </div>
    );
  }
}

export default Payment;
