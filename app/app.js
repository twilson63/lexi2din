require('angular/angular');
require('angular-ui-router/release/angular-ui-router');

angular.module('app', ['ui.router',
  require('./lexi').name,
  require('./rxnorm').name

])
.config(function($urlRouterProvider, $locationProvider) { 
  $urlRouterProvider.otherwise('/lexi');
  $locationProvider.html5Mode(true);
})
.factory('$pouch', function() {
  var db = new PouchDB('http://localhost:5984/clinical');
  //console.log(db);
//db.replicate.to('http://localhost:5984/clinical');
  //db.replicate.from('http://localhost:5984/clinical');
  return db;
})
.factory('underscore', function() { 
  return require('underscore');
})
.run(function($rootScope, $pouch) {
});
