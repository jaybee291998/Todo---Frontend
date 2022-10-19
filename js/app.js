let todoApp = angular.module('todoApp', ['ngRoute', 'ngResource']);

todoApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'pages/home.html',
        controller:'homeController'
    })
    .when('/create',{
        templateUrl:'pages/create.html',
        controller:'createTodoController'
    })
    .when('/update/:id',{
        templateUrl:'pages/update.html',
        controller:'updateTodoController'
    })
    .when('/delete/:id',{
        templateUrl:'pages/delete.html',
        controller:'deleteTodoController'
    })
}]);

todoApp.controller('mainController', ['$scope', '$timeout',  function($scope, $timeout){
    async function get(){
        let res = await fetch('http://127.0.0.1:8080/todo');
        let data = await res.json();
        // a hacky way to trigger a digest cycle
        $timeout(function(){
            $scope.todoData = data;
        }, 0);
    }
    get();
}]);

todoApp.controller('homeController', ['$scope', '$timeout',  function($scope, $timeout){
    $scope.message = "HOME";
}]);

todoApp.controller('createTodoController', ['$scope', '$timeout', function($scope, $timeout){
    $scope.message = "CREATE";
}]);

todoApp.controller('updateTodoController', ['$scope', '$timeout', '$routeParams', function($scope, $timeout, $routeParams){
    $scope.message = "UPDATE";
    $scope.todoID = $routeParams.id||69;
}]);

todoApp.controller('deleteTodoController', ['$scope', '$timeout', '$routeParams', function($scope, $timeout, $routeParams){
    $scope.message = "DELETE";
    $scope.todoID = $routeParams.id||69;
}]);

todoApp.directive("todoItem", function(){
    return {
        templateUrl:'directives/todoItem.html',
        replace:true,
        scope:{
            todoItemData:"="
        }
    }
});