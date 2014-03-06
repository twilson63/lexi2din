var fs = require('fs');

module.exports = angular.module('app.rxnorm', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('rxnorm', {
        url: '/rxnorm',
        controllers: require('./controllers/list.js'),
        template: fs.readFileSync(__dirname + '/templates/list.html')
      });
   });
