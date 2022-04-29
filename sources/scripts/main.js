var app = angular.module('angularjs-example', []);

app.controller('TodosController', function ($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/todos/', { cache: true }).then(function (res) {
        $scope.todos = res.data.slice(0, 5);
    });
});
