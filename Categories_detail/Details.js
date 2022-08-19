var url = window.location.href
var id = url.split("?").pop()
console.log(id);
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get("Categories.json").then(function (rspt) {
        $scope.product = rspt.data[id - 1];
    })
});
