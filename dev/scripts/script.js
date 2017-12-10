// NAMESPACE
const folio = {};

// RETURN TO TOP ON REFRESH
folio.goBack = function() {
  // TO DO: ANIMATE OR FIND BETTER SOLUTION TO AVOID WHITE FLASH
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
}

// FADE IN/OUT DROPDOWN NAV
folio.fade = function() {
  $('#dropdown').fadeToggle(900);
};

// DO FADE ON MENU ICON CLICK
folio.dropdown = function() {
  $('#menu-collapse').on('click', function() {
    folio.fade();
  })
}

// CHANGE SIDEBAR LOCATION INDICATOR
folio.scrolling = function() {

  // GET PAGE LOCATION
  $(window).scroll(function() {
    folio.location = $(this).scrollTop();

    // GET SECTION AT LOCATION
    $('section').each(function() {
      folio.target = $(this).offset().top;
      folio.targetID = $(this).attr('id');

      // UPDATE CURRENT LOCATION
      if (folio.location >= folio.target) {
        $('.nav__sidebar--link').removeClass('nav__sidebar--active');
        $(`#${folio.targetID}--active`).addClass('nav__sidebar--active');
      }
    })
  })
}

// GO DIRECTLY TO SECTION
folio.scrollTo = function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    folio.section = $(this.getAttribute('href'));

    $('html, body').stop().animate({scrollTop:folio.section.offset().top}, 1000);

    if ($('#dropdown').is(':visible')) {
      folio.fade();
    }
  })
};

// TO DO: EMAIL FORM ON SUBMIT FUNCTIONS
// folio.form = function() {
//   $('form').on('submit', function(e) {
//     e.preventDefault();
//     // window.location.href = 'mailto:jen@jensaxena.com';
//   })
// };

// FIRE AT WILL
folio.init = function() {
  folio.goBack();
  folio.dropdown();
  folio.scrollTo();
  folio.scrolling();
};

// DOCUMENT READY
$(folio.init);
