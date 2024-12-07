'use strict'

//Multiplicación, Media y Pares

function mul(a, b) {
    const result = a * b;
  
    return result;
  }
  const mulResult = mul(3, 4); // 12
  console.log(mulResult);

function med(a, b, c, d) {
    const result = (a + b + c + d) / 4;
  
    return result; 
 }
  const medResult = med(3, 4, 8, 12); 
  console.log(medResult);

function pair(a) {
    return a % 2 === 0;
  }
  console.log(pair (4));
  console.log(pair (7));


