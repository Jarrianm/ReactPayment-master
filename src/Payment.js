import React, { Component } from 'react';
import './Payment.css'

class Payment extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='payment'>
                {this.props.payment}
            </div>
        );
    }
}

export default Payment;