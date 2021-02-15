'use strict'

var minchar = 3;
var maxchar = 256;
var minage = 18;

$(function(){
  if (window.location.href.indexOf('contact') > -1) {
    $("#form_contact").validate({
      rules: {
        name: {
          required: true,
          minlength: minchar
        },
        surname: {
          required: true,
          minlength: minchar        
        },
        mail: {
          required: true,
          email: true
        },
        age: {
          required: true,
          min: minage
        },
        consult: {
          required: true,
          minlength: minchar,
          maxlength: maxchar
        }
      },
          messages : {
            name: {
              required: 'Su nombre es campo obligatorio',
              minlength: "Su nombre debe tener al menos " + minchar + " caracteres"
            },
            surname: {
              required: 'Su apellido es campo obligatorio',
              minlength: "Su apellido debe tener al menos "+minchar+" caracteres"
            },
            age: {
              required: "Favor informar su edad",
              min: "Debe ser mayor de "+minage+" para poder contactarnos"
            },
            mail: {
              required: 'Favor informar su correo de contacto',
              email: "su correo debe tener el siguiente formato: abc@domain.tld"
            },
            consult: {
              required: "Favor informar el contendido de su consulta",
              minlength: "Su consulta debe ser al menos de "+minchar+" caracteres",
              maxlength: "Su consulta no puede exceder de " + maxchar
            }
          }
    });
};
});
