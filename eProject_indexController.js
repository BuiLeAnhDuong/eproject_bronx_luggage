var app = angular.module("myApp", ["ngRoute"])

app.config(function($routeProvider) {
	alert($routeProvider)
	$routeProvider
	.when("/!", {
		templateUrl : "eProject_homepage.html",
		controller : "myCtrl"
	})
	.when('/!category', {
		templateUrl : "Categories.html",
		controller : "myCtrl"
	})
	.when('/!contactus', {
		templateUrl : "Contact.html",
		controller : "myCtrl"
	})
	.when('/!aboutus', {
		templateUrl : "AboutUs.html",
		controller : "myCtrl"
	})
	.when('/!gallery', {
		templateUrl : "gallery.html",
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