var fs = require('fs');

module.exports = angular.module('app.lexi',[])
  .config(function($stateProvider) {
    $stateProvider
      .state('lexi', {
        url: '/lexi',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('lexi.list', {
        url: '',
        controller: require('./controllers/list.js'),
        template: fs.readFileSync(__dirname + '/templates/list.html', 'utf8')
      })
      .state('lexi.show', {
        url:'/:id',
        controller: require('./controllers/show.js'),
        template: fs.readFileSync(__dirname + '/templates/show.html', 'utf8'),
        resolve: {
          doc: function($stateParams, $pouch) {
            return $pouch.get($stateParams.id);
          }
        }
      });
   });
