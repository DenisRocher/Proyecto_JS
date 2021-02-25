'use strict'

$(function(){
  if (window.location.href.indexOf('index') > -1) {
    
    /** SLIDER */
    $('.galeria').bxSlider({
      auto: true,
      mode: 'fade',
      slideWidth: 600,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 1200,
      pager: false
    })
  };

  //CARGA DE POSTS
  if (window.location.href.indexOf('index') > -1) {
    /** POSTS */
    var posts = [
      { title:'Prueba titulo 1' ,
        date: 'Publicado el ' + moment().format('dddd DD') + ' de ' + moment().format('MMMM') + ' del '+ moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae lobortis risus. Praesent sollicitudin suscipit erat, vitae vehicula augue porttitor sed. Duis malesuada, nisl sed blandit semper, felis eros fermentum ante, ut dictum elit metus quis lectus. Donec aliquet blandit enim a bibendum. Aliquam erat volutpat. Duis in dui risus. Aliquam faucibus posuere velit, vel tempus metus consectetur vitae. Phasellus eros massa, lobortis nec enim id, consequat dictum ex. Donec lobortis orci eu feugiat ornare.'
      },
      { title:'Prueba titulo 2' ,
        date: 'Publicado el ' + moment().subtract(10,'days').format('dddd DD') + ' de ' + moment().subtract(10,'days').format('MMMM') + ' del '+ moment().subtract(10,'days').format('YYYY'),
        content: 'Sed pellentesque egestas lobortis. Nam bibendum risus vitae libero tempor, eget suscipit urna eleifend. Donec commodo, lectus a venenatis tincidunt, augue sem luctus est, tincidunt ullamcorper ante mauris mattis tortor. Nullam mollis eget magna et vestibulum. Donec vel augue leo. Etiam venenatis convallis ipsum, eu ultrices nisi elementum ut. Pellentesque bibendum augue massa, eu finibus nunc condimentum non. Donec eget purus ut sem ultrices porta. Vestibulum at lectus vel justo blandit mattis. Duis condimentum, libero a tempor molestie, mi turpis posuere nulla, vel scelerisque ante arcu vel lorem. Mauris id mi nibh. Praesent enim arcu, volutpat vel leo nec, consequat varius nibh. Nulla massa enim, cursus ac felis sed, mattis faucibus ante. Nam nibh ex, fermentum eleifend finibus euismod, mollis sit amet enim.'
      },    
      { title:'Prueba titulo 3' ,
        date: 'Publicado el ' + moment().subtract(12,'days').format('dddd DD') + ' de ' + moment().subtract(12,'days').format('MMMM') + ' del '+ moment().subtract(12,'days').format('YYYY'),
        content: 'Fusce nulla lectus, commodo non consectetur eget, fringilla non orci. In semper augue quis elit mollis sagittis. Ut commodo a lectus sed varius. Donec venenatis elementum ante fermentum convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec eros non orci posuere iaculis. Donec vel lacinia nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque justo ligula, euismod sit amet lacinia et, auctor nec nunc. Vivamus arcu neque, tempor efficitur facilisis vel, aliquam in nunc. Aenean placerat dui sit amet faucibus ullamcorper. Aliquam bibendum odio dui, sed volutpat justo dignissim sit amet. Nam nec tristique ligula, eget tristique nulla.'
      },
      { title:'Prueba titulo 4' ,
        date: 'Publicado el ' + moment().subtract(50,'days').format('dddd DD') + ' de ' + moment().subtract(50,'days').format('MMMM') + ' del '+ moment().subtract(50,'days').format('YYYY'),
        content: 'Proin condimentum lacus at est viverra, ac aliquet nibh pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sed nulla semper, efficitur ex eget, bibendum metus. Donec lobortis nisl lectus. Proin tincidunt leo quis nibh accumsan varius. Donec risus justo, consequat eu neque quis, consectetur interdum dui. Nunc faucibus efficitur risus ut vulputate. Etiam eu risus bibendum nisi euismod maximus ut in massa.'
      },
      { title:'Prueba titulo 5' ,
          date: 'Publicado el ' + moment().subtract(78,'days').format('dddd DD') + ' de ' + moment().subtract(78,'days').format('MMMM') + ' del '+ moment().subtract(78,'days').format('YYYY'),
          content: 'Proin condimentum lacus at est viverra, ac aliquet nibh pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sed nulla semper, efficitur ex eget, bibendum metus. Donec lobortis nisl lectus. Proin tincidunt leo quis nibh accumsan varius. Donec risus justo, consequat eu neque quis, consectetur interdum dui. Nunc faucibus efficitur risus ut vulputate. Etiam eu risus bibendum nisi euismod maximus ut in massa.'
        }];

      posts.forEach((element,index) => {
        var post = `
        <article class="post">
              <h2>${element.title}</h2>
              <span class="date">${element.date}</span>
              <p>${element.content}
              </p>
              <a href="#" class="button-more">Leer más...</a>
        </article>`;
        $('#posts').append(post);
      });
  };
});