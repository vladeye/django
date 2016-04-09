app.controller('AppCtrl', function (itemserv, $scope, $mdBottomSheet, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, $routeParams) {
    $scope.toggleLeft = buildToggler('left');
    $scope.alert = '';
    $scope.IsHidden = true;
    $scope.ItemDet;
    $scope.selected = [];
    $scope.test = "";

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
     $scope.price = 10;
   /*  $scope.items = [
       { title: 'Casa', text: 'Limpieza general de la casa', isHidden: true },
       { title: 'Arreglo', text: 'Arreglo de los mesas del comedor', isHidden: true },
       { title: 'Corrección', text: 'Corrección de la maqueta para entregar', isHidden: true },
       { title: 'Pagos', text: 'Pagos de la seguridad social', isHidden: true },
     ]; */

     $scope.items = itemserv.list;
    // itemserv.add({ title: 'Casa', text: 'Limpieza general de la casa', isHidden: true });
     
     
    $scope.showNewNotes = function($event) {
      $scope.alert = '';

      $mdBottomSheet.show({
        templateUrl: 'view/newnote.html',
        controller: 'ListBottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        $scope.alert = clickedItem['name'] + ' clicked!';
      });
    };     
    $scope.showNotesDetails = function($event, $index) {
      $scope.alert = '';

      for(var i=0;i<$scope.items.length;i++)
        $scope.items[i].isHidden = true;

      $scope.items[$index].isHidden = $scope.items[$index].isHidden ? false : true;
      $scope.alert = $scope.items[$index].isHidden + ' index: ' + $index;
    /*  $mdBottomSheet.show({
        templateUrl: 'notesdetails.html',
        controller: 'ListBottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        $scope.alert = clickedItem['name'] + ' clicked!';
      });*/
    };
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },200);
      return debounceFn;
    }
    
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      
      $scope.exists = function (item, list) {
        $scope.test = list;
        return list.indexOf(item) > -1;
      };    
      
      
  $scope.deleteTasks = function(ev) {
    var confirm = $mdDialog.confirm()
          .title('¿Está seguro que desea borrar las tareas?')
         // .textContent('prueba')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Si, por favor!')
          .cancel('No, gracias');
    $mdDialog.show(confirm).then(function() {
        for(i = $scope.selected.length; i--;)
          $scope.items.splice($scope.items.indexOf($scope.selected[i]), 1);


    }, function() {
      $scope.test = 'not done';
    });      
  };      
  });