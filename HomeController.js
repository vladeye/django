app.controller('HomeController', ['$scope', 'notes', function($scope, notes) {
  notes.success(function(data) {
    $scope.notes = data;
  });
}]);