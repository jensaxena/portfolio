// NAMESPACE
const folio = {};

// NAVIGATION FUNCTIONS
folio.fade = function() {
  $('#menu-collapse').on('click', function() {
    $('#dropdown').fadeToggle(900);
  })
};

folio.scroller = function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    folio.section = $(this.getAttribute('href'));

    $('html').stop().animate({scrollTop: folio.section.offset().top}, 1000);
    $('#dropdown').fadeOut(900);

    $('.nav__sidebar--link').removeClass('nav__sidebar--active');
    $(`#${folio.section[0].id}--active`).addClass('nav__sidebar--active');
  })
};

// TO DO: EMAIL FORM ON SUBMIT FUNCTIONS

// FIRE AT WILL
folio.init = function() {
  folio.fade();
  folio.scroller();
};

// DOCUMENT READY
$(folio.init);
