function getPin(){
    const pin = generatePin();
    const stringPin = pin + "";

if(stringPin.length ===4){
    return pin;
}
else{
    return getPin();
}



}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
   const number = event.target.innerText;
   const typeNumberField = document.getElementById('typed-numbers');
   if(isNaN(number)){
    if(number === 'C'){

      typeNumberField.value = '';
    }
}
else if(number === '<'){
    const digits = previousTypedNumber.split('');
    digits.pop();
    const remainingDigits = digits.join('');
    typeNumberField.value = remainingDigits;

}

else {
    
    
    const previousTypedNumber = typeNumberField.value;
    const newTypedNumber = previousTypedNumber + number;
    typeNumberField.value = newTypedNumber;

   }
})
document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typeNumberField = document.getElementById('typed-numbers');
    const typedNumber = typeNumberField.value;


const pinFailureMesseage = document.getElementById('pin-failure');
const pinSuccessMesseage = document.getElementById('pin-success');

    if(typedNumber === currentPin){
        
        pinSuccessMesseage.style.display = 'block';
        pinFailureMesseage.style.display = 'none';
    }
    else{
        
        pinFailureMesseage.style.display = 'block';
        pinSuccessMesseage.style.display = 'none';
    }
})
