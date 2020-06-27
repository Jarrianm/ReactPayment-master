class Loan {
    constructor() {
       
        this.loanAmount = 0;
        this.term = 30;
        this.rate = 3.5;
    }


    /**
     * @returns {float} monthly payment in dollars.
     */
    monthlyPayment() {
        var result = 0;
        var pmts = this.termInMonths;
        var monthlyRateInDec = this.rate / 1200;
        var topEq = monthlyRateInDec * Math.pow((1 + monthlyRateInDec), pmts);
        var botEq = Math.pow((1 + monthlyRateInDec), pmts) - 1;
        result = this.loanAmount * (topEq / botEq);
        return Math.round(result);
    }
}

export default Loan;
