const terms = document.getElementById('years');
const bubble = document.querySelector('.bubble');
const loanform = document.getElementById('loan-form');
const loader = document.getElementById('loading');
const resultel = document.getElementById('result');

terms.addEventListener('input',function (){
    const val = terms.value;
    bubble.textContent = val > 1 ? `${val} Months` : `${val} Month`;
});

loanform.addEventListener('submit',function (e){

    // loader
    loader.style.display = "block";

    // Hide result
    resultel.style.display = "none";

    setTimeout(calculateresult,1000);

    e.preventDefault();
});

// Calculat Result
function calculateresult(){
    // console.log('calculate...')

    // UI
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');

    // display
    const monthlypayment = document.getElementById('monthly-payment');
    const totalinterest = document.getElementById('total-interest');
    const totalpayment = document.getElementById('total-payment');

    // Calculate
    const getprinciple = parseFloat(amount.value);
    const getinterest = parseFloat(interest.value)/12;
    const getterm = parseInt(terms.value);

    // console.log(getterm);

    // Compute all monthly payment
    const monthly = Math.round((getprinciple*(getterm*getinterest))/100);
    // console.log(monthly);

    if(monthly){
        monthlypayment.value = ((getprinciple+monthly)/getterm).toFixed(2);
        totalinterest.value = monthly.toFixed(2);
        totalpayment.value = (monthlypayment.value*getterm).toFixed(2);

        loader.style.display = "none";

        resultel.style.display = "block";

    }else{
        showerror("Please check your number");
    }

}

function showerror(message){
    // hide loader
    loader.style.display = "none";

    // Create Element
    const errordiv = document.createElement('div');

    errordiv.className = "alert alert-danger";

    errordiv.appendChild(document.createTextNode(message));
    
  // console.log(errordiv)

    // get element
    const card = document.querySelector('.card');
    const heading = document.getElementById('heading');

    // insert error above heading(up,down)
    card.insertBefore(errordiv,heading);

    // clear errordiv after display
    setTimeout(clearerror,2000);


//     console.log(errordiv);
}

// Clear error
function clearerror(){
    document.querySelector('.alert').remove();
}