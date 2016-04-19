app.directive('gallery', function () {

  return {

    restrict: 'A',

    link: function(scope, elem, attrs) {

      var gallery = $('.gallery a').simpleLightbox();

    }

  };

});
