// put event handlers for header links here

var Header = (function() {

  function headerLinkClicks(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    var url = $(evt.target).attr('href');

    $.ajax(url, { dataType: 'text' })
    .then(function(content) {
      $modal.html(content).show();
    });
  }

  function init() {
    $modal = $('[rel="js-modal"]');

    $('[rel="js-controls"]').on('click', '[rel*="js-"]', headerLinkClicks);
  }

  var $modal;

  return {
    init: init
  };

})();
