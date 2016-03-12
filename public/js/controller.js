var app = angular.module('starWarsApp');

app.controller('mainCtrl', function($scope, $state, SwapiService) {
  
  $scope.$watch(() => {
    return SwapiService.people;
  }, (newValue, oldValue) => {
    $scope.people = newValue;
  });
});
