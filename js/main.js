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
