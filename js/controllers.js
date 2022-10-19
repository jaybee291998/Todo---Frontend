todoApp.controller('homeController', ['$scope', '$timeout', '$interval', 'todoService', function($scope, $timeout, $interval, todoService){
    $scope.taskCount = 0;
    let init = async function(){
        let data = await todoService.initializeData();
        $timeout(()=>{
            $scope.myTasks = data;
            $scope.taskCount = $scope.myTasks.filter(task => !task.done).length;
        }, 0);
        console.log("re-initialized");
        
    }

    init();

    $scope.toggleBtn = async function(id){
        await todoService.updateTaskDone(id);
        init();
    }

    $scope.deleteTask = async id => {
        await todoService.deleteTask(id);
        init();
    }

}]);

todoApp.controller('createTodoController', ['$scope', '$timeout', '$location', 'todoService', function($scope, $timeout, $location, todoService){
    $scope.taskBody;
    $scope.postToServer = function(){
        todoService.postToServer($scope.taskBody);
        $scope.taskBody = "";
        $timeout(()=>{
            $location.path('/');
        }, 100);
        
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