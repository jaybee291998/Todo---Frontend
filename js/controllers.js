todoApp.controller('homeController', ['$scope', '$timeout', 'todoService', function($scope, $timeout, todoService){
    $scope.message = "HOME";
}]);

todoApp.controller('createTodoController', ['$scope', '$timeout', 'todoService', function($scope, $timeout, todoService){
    $scope.message = "CREATE";
}]);

todoApp.controller('updateTodoController', ['$scope', '$timeout', '$routeParams', 'todoService', function($scope, $timeout, $routeParams, todoService){
    $scope.message = "UPDATE";
    $scope.todoID = $routeParams.id||69;
}]);

todoApp.controller('deleteTodoController', ['$scope', '$timeout', '$routeParams', 'todoService', function($scope, $timeout, $routeParams, todoService){
    $scope.message = "DELETE";
    $scope.todoID = $routeParams.id||69;
}]);