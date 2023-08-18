function generatePin() 
{
     let random = Math.round(Math.random() * 10000) ;
     return random;
}

function getPin() 
{
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4)
    {
        return pin;
    }
    else
    {
        return getPin();
    }
    return pin;
     
}

document.getElementById('generate_button').addEventListener('click',function() 
{
       let pinInput = document.getElementById('pin-input');
        pinInput.value = getPin();
        return getPin();

})
document.getElementById('calculator').addEventListener('click',function(event)
{
   let number = event.target.innerText;
   let inputForm = document.getElementById('typed-number');
   let previousTypedNumber = inputForm.value;


   if(isNaN(number))
   {
    //   console.log(number); 
    if(number === 'C')
    {
        inputForm.value = '';
    }
    else if(number === '<')
       {
                 let digit = previousTypedNumber.split('');
                //  console.log(digit);
                digit.pop();
                const remainingDigit = digit.join('');
                inputForm.value = remainingDigit;

       }
   }
   else
   {
     let inputForm = document.getElementById('typed-number');
     let newTypedNumber = previousTypedNumber + number;
     inputForm.value = newTypedNumber;
   }
});

document.getElementById('button-for-submit').addEventListener('click',function(){
    // console.log('button clicked');
    // console.log(getPin());
    let pinInput = document.getElementById('pin-input').value;
    // console.log(pinInput);
    let newTypedNumber = document.getElementById('typed-number').value;
    let pinMessageCorrect = document.getElementById('correct');
    let pinMessageInCorrect = document.getElementById('incorrect');


    if(pinInput === newTypedNumber)
    {
            console.log('Correct Pin');
            pinMessageCorrect.style.display = 'block';
            pinMessageInCorrect.style.display = 'none';
    }
    else
    {
         console.log('incorrect pin');
            pinMessageInCorrect.style.display = 'block';
            pinMessageCorrect.style.display = 'none';
    }
    

})