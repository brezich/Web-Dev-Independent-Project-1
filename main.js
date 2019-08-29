$(document).ready(() => {

  // toggle the Related Content
  $('#content h4').on('click', () => {
    $('#content ul').toggle();
  });

  // toggle the Blog Posts
  $('img').on('click', event => {
    $(event.currentTarget).siblings('p').toggle();
  });

  // toggle the Menu
  $('.menu').on('click', () => {
    $('#navbar ul').toggle();
  });

  // hide dropdown Menu on click if width <= 540px 
  $(document).on('click', event => {
    if (!$(event.target).closest('.menu').length & window.matchMedia('(max-width: 540px)').matches) {
      $('#navbar ul').fadeOut(400);
    }
  });

  // handling the window resize for navbar Menu
  $(window).resize(() => {
    if (window.matchMedia('(max-width: 540px)').matches) {
      $('#navbar ul').hide();
    } else if (!window.matchMedia('(max-width: 540px)').matches) {
      $('#navbar ul').show();
    }
  });

  // light mode
  $('.light').on('click', () => {
    $('body').css({
      color: 'rgb(0, 0, 0)',
      backgroundColor: 'rgb(255, 255, 255)',
    });
    $('#guide a, #content a').css({
      color: 'rgb(75, 75, 150)'
    });
    $('article').css({
      backgroundColor: 'rgb(240, 240, 255)'
    });
    $('article p').css({
      backgroundColor: 'rgb(220, 220, 255)',
      borderTop: '1px solid rgb(150, 150, 200)'
    });
    $('#navbar, #contact').css({
      backgroundColor: 'black'
    });
    $('#about, #content').css({
      backgroundColor: 'rgb(230, 230, 255)'
    });
  });

  // light mode media queries
  $('.light').on('click', () => {
    if (window.matchMedia('(max-width: 420px)').matches) {
      // max-width: 420px
      $('article h1, article h2').css({
        backgroundColor: 'rgb(240, 240, 255)',
        borderBottom: '0'
      });
    } else {
      // width > 420px
      $('article h1, article h2').css({
        backgroundColor: 'rgb(220, 220, 255)',
        borderBottom: '1px solid rgb(150, 150, 200)'
      });
    }
  });

  // handling resize for light mode colors
  $(window).resize(() => {
    if (window.matchMedia('(max-width: 420px)').matches & $('body').css('background-color') == 'rgb(255, 255, 255)') {
      $('article h1, article h2').css({
        backgroundColor: 'rgb(240, 240, 255)',
        borderBottom: '0'
      });
    } else if (!window.matchMedia('(max-width: 420px)').matches & $('body').css('background-color') == 'rgb(255, 255, 255)') {
      $('article h1, article h2').css({
        backgroundColor: 'rgb(220, 220, 255)',
        borderBottom: '1px solid rgb(150, 150, 200)'
      });
    }
  });

  // dark mode
  $('.dark').on('click', () => {
    $('body').css({
      color: 'rgb(210, 210, 210)',
      backgroundColor: 'rgb(0, 0, 0)',
    });
    $('#guide a, #content a').css({
      color: 'rgb(230, 230, 255)'
    });
    $('article').css({
      backgroundColor: 'rgb(80, 80, 85)'
    });
    $('article p').css({
      backgroundColor: 'rgb(55, 55, 64)',
      borderTop: '1px solid rgb(0, 0, 0)'
    });
    $('#navbar, #contact').css({
      backgroundColor: 'black'
    });
    $('#about, #content').css({
      backgroundColor: 'rgb(76, 76, 85)'
    });
  });

  // dark mode media queries
  $('.dark').on('click', () => {
    if (window.matchMedia('(max-width: 420px)').matches) {
      $('article h1, article h2').css({
        backgroundColor: 'rgb(80, 80, 85)',
        borderBottom: '0'
      })
    } else {
      $('article h1, article h2').css({
        backgroundColor: 'rgb(55, 55, 64)',
        borderBottom: '1px solid rgb(0, 0, 0)'
      });
    }
  });

  // handling resize for dark mode colors
  $(window).resize(() => {
    if (window.matchMedia('(max-width: 420px)').matches & $('body').css('background-color') == 'rgb(0, 0, 0)') {
      $('article h1, article h2').css({
        backgroundColor: 'rgb(80, 80, 85)',
        borderBottom: '0'
      });
    } else if (!window.matchMedia('(max-width: 420px)').matches & $('body').css('background-color') == 'rgb(0, 0, 0)') {
      $('article h1, article h2').css({
        backgroundColor: 'rgb(55, 55, 64)',
        borderBottom: '1px solid rgb(0, 0, 0)'
      });
    }
  });

});
