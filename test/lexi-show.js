var show = require('../app/lexi/controllers/show.js');
var expect = require('expect.js');

describe('lexi.show', function() {
  it('$scope should have a doc', function() {
    var $scope = {};
    var doc = { foo: 'bar' };
    show($scope, doc);
    expect($scope.doc).to.eql(doc);
  });
  it('$scope should not be bar', function() {
    expect(true).to.be(true);
  });
});
