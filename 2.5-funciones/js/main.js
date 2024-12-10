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


function price(a) {
    const iva = a * 0.21;
    const total = a + iva;
    return result;
  }

  const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
  }

  const adalaber2 = {
    name: 'Rocío',
    age: 25,
    profession: 'actriz',
  }

 const parrafo = document.querySelector('.js_adalaber1');
 parrafo.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.profession}.`
  
 console.log(adalaber1)



