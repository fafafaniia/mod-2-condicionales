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





