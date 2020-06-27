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
  };

  calculatorClickHandler = (e) => {
    e.preventDefault();
    let loanAmount = this.state.loanAmount;
    let term = this.state.term;
    let rate = this.state.rate;

    const loan = new Loan(loanAmount, term, rate);
    let payment = loan.monthlyPayment();

    payment += "";
    payment = payment.replace(",", "");
    let x = payment.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) x1 = x1.replace(rgx, "$1" + "," + "$2");
    payment = x1 + x2;

    this.setState({ payment: payment, showComponent: true });
  };

  onChange = (e) => {
    // console.log(e.target.value,"1 e should be a number not undefined")
    // console.log(e.target.name)

    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  render() {
    return (
      <div className="card">
        <form>
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
          <Payment payment={this.state.payment} />
        ) : null}
      </div>
    );
  }
}

export default Calculator;
