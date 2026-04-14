

let kalkulasi ="";

function calculateValue(value){

  kalkulasi += value;

  displayValue()
}

function displayValue(){
  document.querySelector(".display").innerHTML = kalkulasi;
}

const operators = ["+", "-", "*", "/"];

function addOperator(operator){

  const lastChar = kalkulasi.slice(-1);

  if(operators.includes(lastChar)){
    kalkulasi = kalkulasi.slice(0, -1);
  }

  kalkulasi += operator;
  displayValue();
}

function deleteLast(){

  if(kalkulasi.length > 0){
    kalkulasi = kalkulasi.slice(0, -1);
  }

  displayValue();
}