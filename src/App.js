import React, { Component } from 'react';
import Calculator from './Calculator'
import './App.css'
import Loan from "./Loan"
class App extends Component {
  
state = {
  payment: []
}

  clickHandler = e =>{
  let loanAmount = e.loanAmount
  let term = e.term
  let rate = e.rate
  
  const loan = new Loan (loanAmount, term, rate) 
    let payment = loan.monthlyPayment(loanAmount, term, rate)
console.log(loanAmount, term, rate, payment)

this.setState({payment: payment})
  
}

  
  
  render() {
    return (
      <div>
      <Calculator clickHandler={this.clickHandler}/>
        
      </div>
    );
  }
}

export default App;