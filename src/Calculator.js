import React, { Component } from 'react';
import Loan from './Loan'
import './Calculator.css'
class Calculator extends Component {
    render() {
        return (

<div className="card">  
<form>
<fieldset> 
<legend><span class="number"></span> Let us do the work for you!</legend>
$<input type="text" name="field1" placeholder="Loan Amount"/>
Yrs<input type="text" name="field2" placeholder="Term"/>
%<input type="text" name="field2" placeholder="Rate"/>
</fieldset>
</form>
</div>











        
        );
    }
}

export default Calculator;