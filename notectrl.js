app.controller('NoteCtrl', function(itemserv, $scope, $mdDialog, $routeParams) {
  $scope.title = '';
  $scope.text = '';
  $scope.items = itemserv.list;
  $scope.item = $scope.items[$routeParams.id];
  $scope.title = $scope.item.title;
  $scope.text = $scope.item.text;
  $scope.mydate = $scope.item.date;


  $scope.editItem = function(ev) {
    var confirm = $mdDialog.confirm()
          .title('¿Está seguro que desea editar la tarea?')
         // .textContent('prueba')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Si, por favor!')
          .cancel('No, gracias');
    $mdDialog.show(confirm).then(function() {
      $scope.item.title = $scope.title;
      $scope.item.text = $scope.text;
      $scope.item.date = $scope.mydate;
      
      $scope.test = 'Tarea editada';
    }, function() {
      $scope.test = 'Tarea sin editar';
    });      
  };
  
});
function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}