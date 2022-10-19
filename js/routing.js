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