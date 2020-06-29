import React, { Component } from "react";
import "./Calculator.css";
import Loan from "./Loan";
import Payment from "./Payment";
class Calculator extends Component {
  state = {
    loanAmount: 0,
    term: 0,
    rate: 0,
    payment: 0,
    showComponent: false,
    change: false,
    updatedPayment: 0,
  };

  calculatorClickHandler = (e) => {
    e.preventDefault()
    console.log(e);
    // console.log(this.state)
    let loanAmount = this.state.loanAmount;
    let term = this.state.term;
    let rate = this.state.rate;

    const loan = new Loan(loanAmount, term, rate);
    let payment = loan.monthlyPayment();
    console.log(payment);
    this.setState({ showComponent: true }, this.addCommas(payment));
  };

  addCommas = (payment) => {
    payment += "";
    payment = payment.replace(",", "");
    let x = payment.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) x1 = x1.replace(rgx, "$1" + "," + "$2");
    payment = x1 + x2;
    console.log(payment);
    this.setState({ payment: payment, updatedPayment: payment });
  };

  onChange = (e) => {
    let name = e.target.name;
    let loanAmount = this.state.loanAmount;
    let term = this.state.term;
    let rate = this.state.rate;

    const loan = new Loan(loanAmount, term, rate);

    let payment = loan.monthlyPayment();
    console.log(payment);

    this.setState(
      { [name]: e.target.value, change: true },
      this.addCommas(payment)
    );
  };

  render() {
    return (
      <div className="card">
        <form onSubmit={this.submitHandler}>
          <fieldset>
            <legend>
              <span className="number"></span> Let us do the work for you!
            </legend>
            $Loan Amount
            <input type="text" name="loanAmount" onChange={this.onChange} />
            Term
            <input type="text" name="term" onChange={this.onChange} />
            %Rate
            <input type="text" name="rate" onChange={this.onChange} />
          </fieldset>
          <button type="submit" onClick={(e) => this.calculatorClickHandler(e)}>
            Show Payment Info
          </button>
        </form>
        {this.state.showComponent ? (
          <Payment
            payment={this.state.payment}
            change={this.state.change}
            updatedPayment={this.state.updatedPayment}
          />
        ) : null}
      </div>
    );
  }
}

export default Calculator;
