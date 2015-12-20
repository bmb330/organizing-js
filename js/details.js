var Details = (function() {
  function loadPerson(ID) {
    $.ajax('details/'+ID+'.html').then(function(contents) {
      $content.html(contents);
    });
  }

  function selectPerson(evt) {
    evt.preventDefault();

    var ID = $(evt.target).attr('data-person');

    EVT.emit('person-selected', ID);
  }

  function init() {
    $content= $('[rel="js-details"]');

    $content.on('click', '[rel="js-select-person"]', selectPerson);

    EVT.on('person-selected', loadPerson);
  }

  var $content;

  EVT.on('init', init);

  return {
    loadPerson: loadPerson,
    init: init
  };

})();
