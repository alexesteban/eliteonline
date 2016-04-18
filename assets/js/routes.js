app.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/', {    templateUrl: 'views/home.html',    controller: 'homeCtrl'  }).  when('/empresa', {
    templateUrl: 'views/empresa.html',
    controller: 'empresaCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);