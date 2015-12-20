// put event handlers for header links here

var Header = (function() {

  function headerLinkClicks(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    var url = $(evt.target).attr('href');

    $.ajax(url, { dataType: 'text' })
    .then(function(content) {
      $modal.find('[rel="js-content"]').html(content);
      $modal.show();

      $('[rel="js-register"], [rel="js-login"]').on('click', function() {
        EVT.emit('close-modal');
      });
    });
  }

  function closeModal() {
    $modal.hide();
  }

  function init() {
    $modal = $('[rel="js-modal"]');
    $modal.on('click', '[rel="js-close"]', closeModal);

    $('[rel="js-controls"]').on('click', '[rel*="js-"]', headerLinkClicks);
  }

  var $modal;

  EVT.on('init', init);
  EVT.on('close-modal', closeModal);

  return {
    init: init
  };

})();
