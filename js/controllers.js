todoApp.controller('homeController', ['$scope', '$timeout', '$interval', 'todoService', function($scope, $timeout, $interval, todoService){
    
    // $interval(function(){
    //     $scope.myTasks = todoService.getTodoData();
    //     console.log(todoService.dataInitiliazed);
    //     if(todoService.dataInitiliazed) return;
    // }, 1000);

    // wait for the to do data initialized
    $timeout(function(){
        $scope.myTasks = todoService.getTodoData();
        // console.log($scope.myTasks);
    }, 100);

}]);

todoApp.controller('createTodoController', ['$scope', '$timeout', 'todoService', function($scope, $timeout, todoService){
    $scope.message = "";
    $scope.taskBody;
    $scope.postToServer = function(){
        todoService.postToServer($scope.taskBody);
        $scope.message = "Success";
    }

}]);

todoApp.controller('updateTodoController', ['$scope', '$timeout', '$routeParams', 'todoService', function($scope, $timeout, $routeParams, todoService){
    $scope.message = "UPDATE";
    $scope.todoID = $routeParams.id||69;
}]);

todoApp.controller('deleteTodoController', ['$scope', '$timeout', '$routeParams', 'todoService', function($scope, $timeout, $routeParams, todoService){
    $scope.message = "DELETE";
    $scope.todoID = $routeParams.id||69;
}]);