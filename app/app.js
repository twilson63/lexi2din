require('angular/angular');
require('angular-ui-router/release/angular-ui-router');

angular.module('app', ['ui.router',
  require('./lexi').name,
  require('./rxnorm').name

])
.config(function($urlRouterProvider, $locationProvider) { 
  $urlRouterProvider.otherwise('/lexi');
  $locationProvider.html5Mode(true);
});
