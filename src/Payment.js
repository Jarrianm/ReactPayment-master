import React, { Component } from 'react';
import './Payment.css'

class Payment extends Component {
    render() {
        console.log('am i renderin')
        return (
            <div className='payment'>
                {this.props.payment}
            </div>
        );
    }
}

export default Payment;