function inputField(id, isIncrease){
    const inputValue = document.getElementById(id);
    const inputNumber = parseInt(inputValue.value);
    if(isIncrease == true){
        inputValue.value = inputNumber + 1;
    }else if(inputNumber > 0){
        inputValue.value = inputNumber - 1;
    }

    //update price 
    updateTotal();
}

function productPrice(inputId, price, priceId){
    const inputQuantity = parseInt(document.getElementById(inputId).value);
    const calcPrice = inputQuantity * price;
    const prevValue = document.getElementById(priceId);
    prevValue.innerText = calcPrice;
}

function getCurrentInputQuantity(id){
    const quantity = parseInt(document.getElementById(id).value);
    return quantity;
}
//update total price
function updateTotal(){
    const phoneTotal = getCurrentInputQuantity('phone-number') * 1219;
    const caseTotal = getCurrentInputQuantity('case-number') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const grandTotal = subTotal + tax;

    //print subtotal, tax and grandtotal 
    const subtotalField = document.getElementById('sub-total');
    const taxField = document.getElementById('tax-amount');
    const grandField = document.getElementById('total-price');
    subtotalField.innerText = subTotal;
    taxField.innerText= tax;
    grandField.innerText = grandTotal;
}

//increase for phone
document.getElementById('phone-plus').addEventListener('click', function(){
    inputField('phone-number', true);
    productPrice("phone-number", 1219, 'phone-total');
});


//decrease for phone
document.getElementById('phone-minus').addEventListener('click', function(){
    inputField('phone-number', false);
    productPrice("phone-number", 1219, 'phone-total');
});


//increase for case
document.getElementById('case-plus').addEventListener('click', function(){
    inputField('case-number', true);
    productPrice("case-number", 59, 'case-total');
});


//decrease for case
document.getElementById('case-minus').addEventListener('click', function(){
    inputField('case-number', false);
    productPrice("case-number", 59, 'case-total');
});

document.getElementById('checkout').addEventListener('click', function(){
    window.location.href = './thankyou.html';
})