

var menu = $('select'); //jquery uses $ to represent document.querySelector
var articles = $('article'); //document.querySelectorAll('article');
var list = ['all', 'almond', 'butter', 'chocolate'];

menu.on('change', function(){ //jquery swaps on with addEventListener
  if (menu.val() !== 'all') { //jquert swaps val for value
    articles.each(function(){
      $(this).addClass('hide');

      if ($(this).hasClass( menu.val()) ) {
        $(this).removeClass('hide');
      }
    })
  } else {
    articles.each(function(){
      $(this).removeClass('hide');
    })
  }
})

var openBtn = $('.open-menu');
var closeBtn = $('.close-menu');

openBtn.on('click', function(){
  $('nav').fadeIn();
  $('body').addClass('stop-scroll');
})

closeBtn.on('click',function(){
  $('nav').fadeOut();
  $('body').removeClass('stop-scroll');
})
