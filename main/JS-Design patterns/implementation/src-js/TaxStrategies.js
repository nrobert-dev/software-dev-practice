/* Simple tax first calculates income-cost. Takes tax% out of (I-C), healthcare and pension is taken after what's remaining */
function SimpleTax(){
    this.calculate = (income,cost) => {
        const incomeTax = document.getElementById('tax').value;
        const healthTax = document.getElementById('tax-health').value;
        const pensionTax = document.getElementById('tax-pension').value;

        let taxAmount = 0;
        let r1 = income-cost;
        taxAmount+=(incomeTax/100)*r1;
        r1 = r1 - (incomeTax/100)*r1;

        taxAmount+=(healthTax/100)*r1 + (pensionTax/100)*r1;
        return taxAmount.toFixed(2);
    }
}

/* NewlyIntroded task calculate if income-cost is > 4500. If lower only simple incomeTax is applied */
function NewlyIntroducedTax(){
    this.calculate = (income,cost) => {
        const incomeTax = document.getElementById('tax').value;
        const healthTax = document.getElementById('tax-health').value;
        const pensionTax = document.getElementById('tax-pension').value;

        let taxAmount = 0;
        let r1 = income-cost;
        taxAmount+=(incomeTax/100)*r1;
        r1 = r1 - (incomeTax/100)*r1;

        if(r1 <= 4500) return taxAmount.toFixed(2);

        taxAmount+=(healthTax/100)*r1 + (pensionTax/100)*r1;
        return taxAmount.toFixed(2);
    }
}