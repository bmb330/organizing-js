var Details = (function() {
  function loadPerson(ID) {
    $.ajax('details/'+ID+'.html').then(function(contents) {
      $content.html(contents);
    });
  }

  function init() {
    $content= $("[rel=js-details]");
  }

  var $content;

  return {
    loadPerson: loadPerson,
    init: init
  };

})();
