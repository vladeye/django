app.directive('noteMenu', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      id: '=',
      menu: '=', 
      action: '&'
    },
    templateUrl: 'noteInfo.html', 
  } 
});