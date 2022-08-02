var app = angular.module("myApp", ["ngRoute"])

app.config(function($routeProvider) {
	$routeProvider
	.when("/!", {
		templateUrl : "eProject_homepage.html",
		controller : "myCtrl"
	})
	.when('/!list', {
		templateUrl : "listEmployee.html",
		controller : "myCtrl"
	})
	.when('/!add', {
		templateUrl : "addEmployee.html",
		controller : "myCtrl"
	})
	.otherwise({
		templateUrl : "eProject_homepage.html",
		controller : "myCtrl"
	});
}); 

app.controller("myCtrl", function($scope, $http) 
{

});