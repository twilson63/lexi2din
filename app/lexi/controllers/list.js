module.exports = function($scope, $pouch, underscore) {
  var _ = underscore;
  //$pouch.query({
  //  map: function(doc) {
  //    if (doc.din)
  //      emit(doc._id, doc);
  //  }
  //}, function(err, res) {
  //  console.log(res);
  //  $scope.docs = _(res.rows).pluck('value');
  //});
  $pouch.allDocs({ include_docs: true, limit: 200 })
    .then(function(docs) {
      console.log(docs);
      console.log(underscore);  
      var _docs = _(docs.rows).pluck('doc');
      console.log(_docs); 
      $scope.$apply(function() {
        $scope.docs = _docs;
      });
    });

};
