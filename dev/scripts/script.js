// NAMESPACE
const folio = {};

folio.projects = {
  'death-oracle': {
    'title': 'Death Oracle',
    'content': 'A simple random death generator',
    'link': 'https://jensaxena.github.io/death-oracle/',
    'tags': [
      '<li>CSS3</li>', '<li>HTML5</li>', '<li>JavaScript</li>', '<li>jQuery</li>'
    ]
  },
  'tarot-game': {
    'title': 'Tarot Game',
    'link': 'https://jensaxena.github.io/playing-card-tarot/',
    'content': 'A divination game using the standard 52-card deck',
    'tags': [
      '<li>API</li>', '<li>CSS3</li>', '<li>Deck of Cards API</li>', '<li>HTML5</li>', '<li>JavaScript</li>', '<li>jQuery</li>'
    ]
  },
  'get-help': {
    'title': 'Get Help',
    'link': 'http://code.jensaxena.com/get-help/',
    'content': 'Enter a one-word search term, get some advice. Results not guaranteed',
    'tags': [
      '<li>Advice Slip API</li>', '<li>API</li>', '<li>CSS3</li>', '<li>HTML5</li>', '<li>JavaScript</li>','<li>JSX</li>', '<li>React</li>'
    ]
  },
  'the-haps': {
    'title': 'The Haps',
    'link': 'https://what-s-the-haps.firebaseapp.com',
    'content': 'A group project: search Ticketmaster for events and coordinate meetups with your friends',
    'tags': [
      '<li>API</li>', '<li>CSS3</li>',  '<li>Firebase</li>','<li>HTML5</li>', '<li>JavaScript</li>','<li>JSX</li>', '<li>React</li>', '<li>Ticketmaster API</li>'
    ]
  }
};

// RETURN TO TOP ON REFRESH
folio.goBack = function() {
  // TO DO: ANIMATE OR FIND BETTER SOLUTION TO AVOID WHITE FLASH
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
};

// FADE IN/OUT DROPDOWN NAV
folio.fade = function() {
  $('#dropdown').fadeToggle(900);
};

// DO FADE ON MENU ICON CLICK
folio.dropdown = function() {
  $('#menu-collapse').on('click', function() {
    folio.fade();
  });
};

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
      };
    });
  });
};

// GO DIRECTLY TO SECTION
folio.scrollTo = function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    folio.section = $(this.getAttribute('href'));

    $('html, body').stop().animate({scrollTop:folio.section.offset().top}, 1000);

    if ($('#dropdown').is(':visible')) {
      folio.fade();
    };
  });
};

folio.work = function() {
  $('figure').on('click', function() {
    // folio.projectID = ;
    folio.project = folio.projects[$(this).attr('id')];

    $('#work-title').html(folio.project.title);
    $('#work-content').html(folio.project.content);
    $('#work-tags').html(folio.project.tags);
    $('#work-link').html(`<a href="${folio.project.link}">Go to project site!</a>`);
  });
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
  folio.dropdown();
  folio.goBack();
  folio.scrollTo();
  folio.scrolling();
  folio.work();
};

// DOCUMENT READY
$(folio.init);
