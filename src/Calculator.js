import React, { Component } from 'react';
import './Calculator.css'
class Calculator extends Component {
state= {
    loanAmount: 0,
    term: 0,
    rate: 0
}
calculatorClickHandler= e => {
e.preventDefault()
    console.log(e.target)
}

onChange = e => {
    // console.log(e.target.value,"1 e should be a number not undefined")
    // console.log(e.target.name)
    let value = e.target.value
    let loanAmount = this.state.loanAmount
    let name = e.target.name
    if (name === 'loanAmount'){
        this.setState({loanAmount: value})
    }
    
    if(name === "Term"){
        this.setState({term: value})
    }
    if(name === "Rate"){
        this.setState({rate: value})
    }

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