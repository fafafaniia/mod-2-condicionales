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


//Ticket con IVA

function price(a) {
  const iva = a * 0.21;
  const total = a + iva;
  const result = `Precio sin IVA: ${a}, IVA: ${iva.toFixed(2)} y Total: ${total.toFixed(2)}`;

  return result; // Devolvemos el texto generado
  //Se usa toFixed(2) para limitar los valores decimales a dos dígitos.

}


const priceResult = price(10); // Llamamos a la función con un valor de prueba
console.log('Texto:', priceResult); // Imprimimos el resultado


//Ejercicio Extra --> querySelector
const btnEl = getEl('.btn');

function getEl (selector) {
  return document.querySelector (selector);
}
btnEl.addEventListener('click', () => { alert('Button clicked!'); });