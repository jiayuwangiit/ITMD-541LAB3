let form = document.getElementById('main-form');
let totalInput = document.getElementById('bill-total');
let tipPctInput = document.getElementById('tip-pct');
let tipPctDisInput = document.getElementById('tip-pct-dis');
let amountInput = document.getElementById('tip-amount');
let totalBillInput = document.getElementById('total-bill');

document.addEventListener('DOMContentLoaded', function() {
    form.addEventListener('input', function() {
        let billTotal = parseFloat(totalInput.value);
        let percentage = parseFloat(tipPctInput.value);
        let amount = billTotal * (percentage / 100);
        let totalBill = billTotal + amount;
        tipPctDisInput.value = `${percentage}%`;
        if(!isNaN(amount)){
            amountInput.value = amount.toFixed(2);
        }else{
            amountInput.value = 0.00;
        }
        if(!isNaN(totalBill)){
            totalBillInput.value = totalBill.toFixed(2);
        }else{
            totalBillInput.value = 0.00;
        }
    });
});