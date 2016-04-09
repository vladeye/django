var app = angular.module('plunker', ['ngMaterial','ngRoute'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
})
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "AppCtrl",
      templateUrl: "view/home.html"
    })
    .when('/notes/:id', {
      controller: 'NoteCtrl',
      templateUrl: 'view/note.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});



 