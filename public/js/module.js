var app = angular.module('starWarsApp', ['ui.router']);

app.run(function(SwapiService) {
  SwapiService.getPeople();
});

app.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {url: '/', templateUrl: '/html/home.html', controller: 'mainCtrl'})

    $urlRouterProvider.otherwise('/');
});
