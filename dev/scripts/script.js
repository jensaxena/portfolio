// NAMESPACE
const folio = {};

folio.action = function() {
  $('#menu-collapse').on('click', function() {
    $('#dropdown').toggleClass('visually-hidden');
  })
}

// FIRE AT WILL
folio.init = function() {
  folio.action();
};

// DOCUMENT READY
$(folio.init);
