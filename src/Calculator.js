import React, { Component } from 'react';
import Loan from './Loan'
import './Calculator.css'
class Calculator extends Component {
state= {
    loanAmount: 0,
    term: 0,
    rate: 0
}
calculatorClickHandler(e) {
e.preventDefault()
    console.log(e.target)
}

onChange(e, result){
    console.log(e.target.value," e should be a number not undefined")
    let value = e.target.value
    
    this.setState({loanAmount: value})
}
    render() {
        return (

<div className="card">  
<form>
<fieldset> 
<legend><span className="number"></span> Let us do the work for you!</legend>
$Loan Amount<input type="text" name="loanAmount" onChange={this.onChange} />
Term<input type="text" name="Term" onChange={this.onChange} />
%Rate<input type="text" name="Rate" onChange={this.onChange} />
</fieldset>
<button type='button'onClick={(e) =>this.calculatorClickHandler(e) }>Show Payment Info</button>
</form>
</div>











        
        );
    }
}

export default Calculator;