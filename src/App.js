import React, { Component } from 'react';
import Calculator from './Calculator'
import './App.css'
import Loan from "./Loan"
class App extends Component {
  


  clickHandler = e =>{
  let loanAmount = e.loanAmount
  let term = e.term
  let rate = e.rate
  
  let loan = new Loan (loanAmount, term, rate) 
    this.loanAmount = loanAmount;
    this.term = term;
    this.rate = rate;
    
    


  
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