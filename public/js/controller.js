var app = angular.module('starWarsApp');

app.controller('mainCtrl', function($scope, $state, SwapiService) {
  $scope.pages = [];

  $scope.$watch(() => {
    return SwapiService.people;
  }, (newValue, oldValue) => {
    $scope.people = newValue;
  });

  $scope.$watch(() => {
    return SwapiService.pages;
  }, (newValue, oldValue) => {
    var num = Math.ceil(newValue / 10);
    for(var i = 2; i <= num; i++){
      $scope.pages.push(i);
    }
  });

  $scope.nextPage = (page) => {
    SwapiService.getUrls(page);
  }



});
