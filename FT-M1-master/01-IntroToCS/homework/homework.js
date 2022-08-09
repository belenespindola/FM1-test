'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  num=num.split('').reverse(); 
  let result=0;
  for (let i=0; i<num.length; i++) {
    result= result + (Math.pow(2,i)*parseInt(num[i])) 
    // el parseInt convierte a la string en número (ya que se supone, que num será una string)
  }
  return result;
}

function DecimalABinario(num) {
  // tu codigo aca
  let result= []
  while (num>0){
    result.push(num%2);
    num=Math.floor(num/2);
  }
  return result.reverse().join('');
  
}




module.exports = {
  BinarioADecimal,
  DecimalABinario,
}