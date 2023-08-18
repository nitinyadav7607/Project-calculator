
let calculation = JSON.parse(localStorage.getItem('calculation'));

if (calculation === null) {
  calculation = '';
}

document.querySelector('.js-input-calculation').innerHTML = calculation;


function updateCalculation (buttonClick) {
  if (buttonClick === 'parcent'){
    calculation = calculation.slice(0, -1);
    displaycalculation();
  
  } else if (buttonClick === 'leftBracket') {
    calculation+= '(';
    displaycalculation();

  } else if (buttonClick === 'rightBracket') {
    calculation+= ')';
    displaycalculation();

  } else if (buttonClick === 'one') {
    calculation += '1'; 
    displaycalculation();
 
  } else if (buttonClick === 'two') {
    calculation += '2';
    displaycalculation();
 
  } else if (buttonClick === 'three') {
    calculation += '3';
    displaycalculation();
 
  } else if (buttonClick === 'four') {
    calculation += '4';
    displaycalculation();
  
  } else if (buttonClick === 'five') {
    calculation += '5';
    displaycalculation();
  
  } else if (buttonClick === 'six') {
    calculation += '6';
    displaycalculation();
  
  } else if (buttonClick === 'seven') {
    calculation += '7';
    displaycalculation();
  
  } else if (buttonClick === 'eight') {
    calculation += '8';
    displaycalculation();
  
  } else if (buttonClick === 'nine') {
    calculation += '9';
    displaycalculation();
  
  } else if (buttonClick === 'zero') {
    calculation +='0';
    displaycalculation();
  
  } else if (buttonClick === 'decimal') {
    calculation += '.'
    displaycalculation();
  
  } else if (buttonClick === 'addition') {
    calculation += '+';
    displaycalculation();
 
  } else if (buttonClick === 'substraction') {
    calculation += '-';
    displaycalculation();
  
  } else if (buttonClick === 'multiplication') {
    calculation += '*';
    displaycalculation();
  
  } else if (buttonClick === 'division') {
    calculation += '/';
    displaycalculation();
 
  } else if (buttonClick === 'equal') {
    result = eval(calculation);
    document.querySelector('.previous-calculation').innerHTML = `${calculation} = `;
    document.querySelector('.js-input-calculation').innerHTML = result;
    //calculation = eval(calculation);
    //displaycalculation();
  
  } else if (buttonClick === 'clear') {
    calculation = ''; 
    document.querySelector('.previous-calculation').innerHTML = '';
    displaycalculation();
    console.log('Cleared sucessful');
    localStorage.removeItem('calculation'); 
  }


  // save calculation to local storage
  localStorage.setItem('calculation',JSON.stringify(calculation));

  console.log(calculation);
  return (calculation);
}


function displaycalculation() {
  document.querySelector('.js-input-calculation').innerHTML = calculation;
}
