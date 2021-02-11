'use strict'

$(function(){
    // SELECTOR DE TEMA
    var style=$('#theme');
    var usuario = JSON.parse(localStorage.getItem('userProyectJSjQuerry'));

    $('#to_green').on('click',function(){
      style.attr('href','./css/green.css');
      localStorage.setItem('theme','green');
    });

    $('#to_red').on('click',function(){
      style.attr('href','./css/red.css');
      localStorage.setItem('theme','red');
    });

    $('#to_blue').on('click',function(){
      style.attr('href','./css/blue.css');
      localStorage.setItem('theme','blue');
    });

    // Recupera del storage los datos del usuario con login
    console.log(usuario);

    if (usuario != null){
        var datosUser = `
          <br>
          <hr>
          <p>
            <span class='userData'>Bienvenido <strong>${usuario.name}</strong></span>
            <br>
            <span class='userData'>Correo: ${usuario.email}</span>
            <br>
            <span class='userData'>Tema por defecto: ${usuario.theme}</span>
            <br>
            <br>
            <hr>
            <a href='#' id='logout'>Cerrar sesión</a>
          </p>
          <hr>
        `;
        $('#about').append(datosUser);
        localStorage.setItem('theme', usuario.theme);
        $('#login').hide();
    }
    else {
        $('#login').show();
    };

    var styleUser = localStorage.getItem('theme');

    switch(styleUser) {
      case 'green': 
        style.attr('href','./css/green.css');
        break;
      case 'red': 
        style.attr('href','./css/red.css');
        break;
      case 'blue':
        style.attr('href','./css/blue.css');
        break;
      default:
        style.attr('href','./css/green.css');
        localStorage.setItem('theme','green');
        break;
      };

 
    // GUARDAR Y RECUPERAR DEL LOCALSTORAGE LA INFORMACIÓN DEL USUARIO
    $('#login form').on('submit',function(evento){
        console.log('Click en el formulario');
        //evento.preventDefault();  //para eliminar action por defecto
        var user = {
          name : $('#form_name').val(),
          email : $('#form_email').val(),
          password : $('#form_password').val(),
          theme: localStorage.getItem('theme')
        };
        localStorage.setItem('userProyectJSjQuerry',JSON.stringify(user));
        location.reload();
    });

    // CERRAR SESION DE USUARIO
    $('#logout').on('click',function(evento){
        console.log('Click en cerrar sesiòn');
        //evento.preventDefault();  //para eliminar action por defecto
        localStorage.removeItem('userProyectJSjQuerry');
        location.reload();
    });

    // SCROLL ANIMADO Y SUAVIZADO DE LA WEB
    $('.subir').on('click',function(evento){
      evento.preventDefault();  //para eliminar
      $('html, body').animate({
        scrollTop: 0    // Sube hasta el pixel 0 de la página
      },500);          // Tiempo de la animación
      return false;
      });

  });





