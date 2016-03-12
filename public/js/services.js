var app = angular.module('starWarsApp');

app.service('SwapiService', function($http) {

  this.getPeople = () => {
    $http.get('https://swapi.co/api/people/')
    .then((res) => {
      this.people = res.data.results;
      this.pages = res.data.count;
      console.log(res.data);
    }, (err) => {
      console.log('error in the services get people:', err);
    });
  };
})
