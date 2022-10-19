let todoApp = angular.module('todoApp', ['ngRoute', 'ngResource']);

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

todoApp.directive("todoItem", function(){
    return {
        templateUrl:'directives/todoItem.html',
        replace:true,
        scope:{
            todoItemData:"="
        }
    }
});