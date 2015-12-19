// put event handlers for header links here

$(document).ready(function() {

  var $modal = $('[rel="js-modal"]');

  $('[rel="js-controls"]').on('click', '[rel*="js-"]', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    var url = $(evt.target).attr('href');

    $.ajax(url, { dataType: 'text' })
    .then(function(content) {
      $modal.html(content).show();
    });
  });
});
