todoApp.directive("todoItem", function(){
    return {
        templateUrl:'directives/todoItem.html',
        replace:true,
        scope:{
            todoItemData:"="
        }
    }
});