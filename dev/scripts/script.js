// NAMESPACE
const folio = {};

folio.projects = {
  'art-port': {
    'title': 'art.jensaxena.com',
    'content': 'Recursive self-promotion! A portfolio site for art and graphic design work',
    'link': 'http://art.jensaxena.com',
    'tags': [
      '<li>CSS3</li>', '<li>HTML5</li>', '<li>JavaScript</li>',
      '<li>SVG Animation</li>'
    ]
  },
  'beat-box': {
    'title': 'Beat-Box Hero',
    'content': 'Based on Wes Bos\' #JavaScript30 - JavaScript Drum Kit. Went a bit overboard playing with the stylesheet',
    'link': 'https://jensaxena.github.io/beat-box-hero/',
    'tags': [
      '<li>CSS3</li>', '<li>HTML5</li>', '<li>JavaScript</li>'
    ]
  },
  'death-oracle': {
    'title': 'Death Oracle',
    'content': 'A simple random death generator',
    'link': 'http://code.jensaxena.com/death-oracle/',
    'tags': [
      '<li>CSS3</li>', '<li>HTML5</li>', '<li>JavaScript</li>', '<li>jQuery</li>'
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
  },
  'tarot-game': {
    'title': 'Tarot Game',
    'link': 'http://code.jensaxena.com/playing-card-tarot/',
    'content': 'A divination game using the standard 52-card deck',
    'tags': [
      '<li>API</li>', '<li>CSS3</li>', '<li>Deck of Cards API</li>', '<li>HTML5</li>', '<li>JavaScript</li>', '<li>jQuery</li>'
    ]
  },
};

// RETURN TO TOP ON REFRESH
folio.goBack = function() {
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
};

// FADE IN/OUT DROPDOWN NAV
folio.fade = function() {

  // WAX ON, WAX OFF
  if ($('#menu-collapse').hasClass('fa-bars')) {
    $('#menu-collapse').removeClass('fa-bars');
    $('#menu-collapse').addClass('fa-times');
  } else {
    $('#menu-collapse').removeClass('fa-times');
    $('#menu-collapse').addClass('fa-bars');
  }

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
  $(window).scroll(function() {
    folio.location = $(this).scrollTop();

    $('section').each(function() {
      folio.target = $(this).offset().top;
      folio.targetID = $(this).attr('id');

      // UPDATE CURRENT LOCATION
      if (folio.location + 1 >= folio.target) {
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

// DISPLAY PROJECT INFO
folio.work = function() {
  $('figure').on('click', function() {
    folio.project = folio.projects[$(this).attr('id')];

    $('#work-title').html(folio.project.title);
    $('#work-content').html(folio.project.content);
    $('#work-tags').html(folio.project.tags);
    $('#work-link').html(`<a href="${folio.project.link}" target="_blank">Go to project site!</a>`);

    $('html, body').stop().animate({scrollTop:$('#work').offset().top}, 1000)
  });
};

// SHOW PROJECTS
folio.gallery = function() {
  let i = 0;
  folio.figure = Object.keys(folio.projects);
  $(`#${folio.figure[i]}`).show();

  $('#show-more').on('click', function() {

    // RESET PROJECT INFO
    $('#work-title').html('Click on a project for more information:');
    $('#work-content').html('');
    $('#work-tags').html('');
    $('#work-link').html('');

    // FADE IN-OUT
    $(`#${folio.figure[i]}`).fadeOut('fast', function() {
      if (i < folio.figure.length - 1) {
        $(`#${folio.figure[i+1]}`).fadeIn('fast');
        i++;
      } else {
        i = 0;
        $(`#${folio.figure[i]}`).fadeIn('fast');
      }
    });
  });
};

// CHANGE BUTTON TEXT ON FORM SUBMIT
folio.form = function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    $('#submit').text('Thanks!');
    $('#contactMe')[0].reset();
  });
};

// FIRE AT WILL
folio.init = function() {
  folio.dropdown();
  folio.form();
  folio.gallery();
  folio.goBack();
  folio.scrolling();
  folio.scrollTo();
  folio.work();
};

// DOCUMENT READY
$(folio.init);
