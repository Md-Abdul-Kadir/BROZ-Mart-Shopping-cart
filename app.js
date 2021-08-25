console.log('I am in a separate file');

//btn for phone section
document.getElementById('plusBtn').addEventListener('click', function () {

    const numberOfPhone = document.getElementById('phoneField');
    const phoneTotal = document.getElementById('phoneTotalID');
    const caseTotal = document.getElementById('caseTotalID');
    const subTotal = document.getElementById('subID');
    const Total = document.getElementById('totalID');
    const tax = document.getElementById('taxID');

    numberOfPhone.value = parseInt(numberOfPhone.value) + 1;
    phoneTotal.innerText = parseInt(phoneTotal.innerText) + 1219;

    subTotal.innerText = parseInt(phoneTotal.innerText) + parseInt(caseTotal.innerText);
    tax.innerText = (parseInt(subTotal.innerText) / 100) * 10;
    Total.innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);
});

document.getElementById('minusBtn').addEventListener('click', function () {

    const numberOfPhone = document.getElementById('phoneField');
    const phoneTotal = document.getElementById('phoneTotalID');
    const caseTotal = document.getElementById('caseTotalID');
    const subTotal = document.getElementById('subID');
    const Total = document.getElementById('totalID');
    const tax = document.getElementById('taxID');

    if (parseInt(numberOfPhone.value) > 1)
    {
        
        numberOfPhone.value = parseInt(numberOfPhone.value) - 1;
        phoneTotal.innerText = parseInt(phoneTotal.innerText) - 1219;

        subTotal.innerText = parseInt(phoneTotal.innerText) + parseInt(caseTotal.innerText);
        tax.innerText = (parseInt(subTotal.innerText) / 100) * 10;
        Total.innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);
        
    }
    
});

// btn for silicon case
document.getElementById('plusBtn2').addEventListener('click', function () {

    const numberOfPhone = document.getElementById('caseField');
    const phoneTotal = document.getElementById('phoneTotalID');
    const caseTotal = document.getElementById('caseTotalID');
    const subTotal = document.getElementById('subID');
    const Total = document.getElementById('totalID');
    const tax = document.getElementById('taxID');

    numberOfPhone.value = parseInt(numberOfPhone.value) + 1;
    caseTotal.innerText = parseInt(caseTotal.innerText) + 59;

    subTotal.innerText = parseInt(phoneTotal.innerText) + parseInt(caseTotal.innerText);
    tax.innerText = (parseInt(subTotal.innerText) / 100) * 10;
    Total.innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);
});

document.getElementById('minsBtn2').addEventListener('click', function () {

    const numberOfPhone = document.getElementById('caseField');
    const phoneTotal = document.getElementById('phoneTotalID');
    const caseTotal = document.getElementById('caseTotalID');
    const subTotal = document.getElementById('subID');
    const Total = document.getElementById('totalID');
    const tax = document.getElementById('taxID');

    if (parseInt(numberOfPhone.value) > 1)
    {
        
        numberOfPhone.value = parseInt(numberOfPhone.value) - 1;
        caseTotal.innerText = parseInt(caseTotal.innerText) - 59;

        subTotal.innerText = parseInt(phoneTotal.innerText) + parseInt(caseTotal.innerText);
        tax.innerText = (parseInt(subTotal.innerText) / 100) * 10;
        Total.innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);
        
    }
    
});




