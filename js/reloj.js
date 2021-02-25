'use strict'

// RELOJ
$(function(){
  //alert('cargado about.js');
  if (window.location.href.indexOf('reloj') > -1) {
        //console.log('cargado reloj.js');
        
    setInterval(function(){
        var reloj = moment().format('h:mm:ss a');
        $('#reloj').html(reloj);
    },1000);    
    
    $(".clock-place").CodehimClock({
      clockSize: 'xlarge'
    });


  };
});