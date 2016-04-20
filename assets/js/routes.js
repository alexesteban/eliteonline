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
  when('/contacto', {
    templateUrl: 'views/contacto.html',
    controller: 'contactoCtrl'
  }).
  when('/historia', {
    templateUrl: 'views/historia.html',
    controller: 'historiaCtrl'
  }).
  when('/politica_calidad', {
    templateUrl: 'views/politicas.html',
    controller: 'politicasCtrl'
  }).
  when('/resolucion', {
    templateUrl: 'views/resolucion.html',
    controller: 'resolucionCtrl'
  }).
  when('/internet_sano', {
    templateUrl: 'views/isano.html',
    controller: 'isanoCtrl'
  }).
  when('/gobierno_linea', {
    templateUrl: 'views/gobierno.html',
    controller: 'gobiernoCtrl'
  }).
  when('/tratamiento_datos', {
    templateUrl: 'views/tratamiento.html',
    controller: 'tratamientoCtrl'
  }).
  when('/entes_reguladores', {
    templateUrl: 'views/entes.html',
    controller: 'entesCtrl'
  }).
  when('/seguridad_web', {
    templateUrl: 'views/seguridad.html',
    controller: 'seguridadCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);