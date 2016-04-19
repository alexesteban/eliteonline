app.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/', {    templateUrl: 'views/home.html',    controller: 'homeCtrl'  }).  when('/empresa', {
    templateUrl: 'views/empresa.html',
    controller: 'empresaCtrl'
  }).
  when('/soluciones', {
    templateUrl: 'views/soluciones.html',
    controller: 'solucionesCtrl'
  }).
  when('/galeria', {
    templateUrl: 'views/galeria.html',
    controller: 'galeriaCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);