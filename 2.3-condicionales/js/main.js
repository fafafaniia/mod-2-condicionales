'use strict';
const access = document.querySelector('.js_access')
const nameAccess = 'Maria';
const nameAccess2 = 'Luisa';
const nameParagraph = document.querySelector('.js_nameParagraph')
const btn = document.querySelector('.js_btn')

btn.addEventListener('click', (ev) => {
    ev.preventDefault()
    const selectName = access.value;
    nameParagraph.innerHTML = selectName;
    if (selectName === nameAccess || selectName === nameAccess2) {
        nameParagraph.innerHTML = 'Acceso permitido';
    
    }
    else {
        nameParagraph.innerHTML = 'Acceso no permitido';
    }
} )
  

//Ejercicio 2: Completa las condiciones

let number= 11;

if (number===0) {
    console.log('El número es 0')
  } else if (number<0) {
    console.log('El número es negativo')
  } else if (number+2>13 && number+2<=20) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
  } else if (number>20 && number<50) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else { 
    console.log('el número no es 123123125')
  }

  //Ejercicio 3 Nadie sin avatar

  // avatar por defecto
const DEFAULT_AVATAR = "http://placehold.jp/150x150.png";
// avatar que eligió el usuario al registrarse
//let userAvatar = '';
let userAvatar ='https://dev.adalab.es/gato-siames.webp'


const usAv = document.querySelector('.user__avatar') ;

usAv.src = userAvatar || DEFAULT_AVATAR;

// Ejercicio 4. Conversor de edad de perro a humano 
const convertButton = document.querySelector('.convertButton');
const dogAgeInput = document.querySelector('.dogAge');
const resultParagraph = document.querySelector('.result');

convertButton.addEventListener('click', (ev) => {
  ev.preventDefault()
  const edadPerro = parseInt(dogAgeInput.value);
  if (isNaN(edadPerro) || edadPerro <= 0) {
    resultParagraph.innerHTML = "Por favor, introduce una edad válida.";
  } else {
    let edadHumana;

    if (edadPerro === 1) {
        edadHumana = 15;
    } else if (edadPerro === 2) {
        edadHumana = 15 + 9; // Primer año + segundo año
    } else if (edadPerro >= 3) {
        // Primer año = 15 años, segundo año = 9 años, el resto = 5 años por cada año adicional
        edadHumana = 15 + 9 + (edadPerro - 2) * 5;
    }
    resultParagraph.innerHTML = `La edad humana equivalente es: ${edadHumana} años.`;
}
});


