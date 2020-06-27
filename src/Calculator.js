import React, { Component } from 'react';
import './Calculator.css'
import Loan from "./Loan"
import Payment from './Payment'
class Calculator extends Component {
state= {
    loanAmount: 0,
    term: 0,
    rate: 0,
    payment: 0 
}

calculatorClickHandler= e => {
  
    e.preventDefault()
let loanAmount = this.state.loanAmount
  let term = this.state.term
  let rate = this.state.rate
  
  const loan = new Loan (loanAmount, term, rate) 
    let payment = loan.monthlyPayment()

this.setState({payment: payment})

return (
<Payment payment={payment}/>
)

}

onChange = e => {
    // console.log(e.target.value,"1 e should be a number not undefined")
    // console.log(e.target.name)
    
    
    let name = e.target.name
   this.setState({[name]: e.target.value})

}
    render() {
        return (

<div className="card">  
<form>
<fieldset> 
<legend><span className="number"></span> Let us do the work for you!</legend>
$Loan Amount<input type="text" name="loanAmount" onChange={this.onChange} />
Term<input type="text" name="term" onChange={this.onChange} />
%Rate<input type="text" name="rate" onChange={this.onChange} />
</fieldset>
<button type='submit'onClick={(e) =>this.calculatorClickHandler(e)}>Show Payment Info</button>
</form>

</div>




        
        );
    }
}

export default Calculator;