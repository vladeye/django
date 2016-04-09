app.controller('ListBottomSheetCtrl', function(itemserv, $scope, $mdBottomSheet) {
  $scope.items = itemserv.list;
  $scope.mydate = "";
  $scope.text = "";
  $scope.title = "";
  $scope.test = "";
  $scope.item = "";

  $scope.items = [
    { name: 'Share', icon: 'share-arrow' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
  $scope.addItem = function(){
      var item = { title: $scope.title, text: $scope.text, isHidden: true, date: $scope.mydate };
      itemserv.add(item);
      $scope.test = 'Se ha creado una nota nueva :)';
  };
});