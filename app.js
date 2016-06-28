// MODULE
var autoApp = angular.module('autoApp', ['ngRoute', 'ngResource','multipleSelect']);

// ROUTES
autoApp.config(function ($routeProvider){

  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller:'homeController'
  }) 
}); 

// CONTROLLERS
autoApp.controller('homeController', ['$scope', function($scope){
	console.log("dsfsd");
$scope.selectedList=[];
$scope.optionsList = [
  {id: 1,  name : "Apple"},
  {id: 2,  name : "Blackberry"},
  {id: 3,  name : "Nokia"},
  {id: 4,  name : "Samsung"},
  {id: 5,  name : "HTC"},
  {id: 6,  name : "Motorola"},
  {id: 7,  name : "Nexus"},
  {id: 8,  name : "karbon"},
  {id: 9,  name : "xiomi"},
  {id: 10,  name : "Lenovo"},
  {id: 11,  name : "Asus"},
];
}]);