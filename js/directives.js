todoApp.directive("todoItem", function(){
    return {
        templateUrl:'directives/todoItem.html',
        replace:true,
        transclude:true,
        scope:{
            todoItemData:"="
        }
    }
});