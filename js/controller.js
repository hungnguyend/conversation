angular.module('demo', [])
.controller('Hello', function($scope, $http) {

   $scope.persons = [];
   $scope.person = {};

   $scope.fetchPeople = function () {
     $http.get('http://srvgal113.deri.ie:8030/api/people').
         then(function(response) {
         	$scope.persons = response.data;
        //  $scope.persons.push({id:-1, name:"Others"});
         });
   }
   $scope.fetchPeople();

  $scope.selectPeople = function() {
    console.log('selectPe:' + $scope.person);
  }
});
