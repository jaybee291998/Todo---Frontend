todoApp.service('todoService', function(){
    let self = this;
    self.todoData;
    self.dataInitiliazed = false;
    self.initializeData = async function(){
        if(!self.dataInitiliazed){
             self.dataInitiliazed = true;
             let res = await fetch('http://127.0.0.1:8080/todo');
             let data = await res.json();
             self.todoApp = data;
             console.log("Todo service successfully initialized");
             console.log(self.todoApp);
        }else{
            console.warn("Todo service has already been initialized");
        }
    };
    self.initializeData();

    self.getTodoData = function(){
        if(self.dataInitiliazed) return self.todoData;
        console.error("Todo data hasnt been initialized");
        return -69;
    }
})