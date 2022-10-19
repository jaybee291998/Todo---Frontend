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