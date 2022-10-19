todoApp.service('todoService', function(){
    let self = this;
    self.todoData;
    self.dataInitiliazed = false;
    self.initializeData = async function(){
        if(!self.dataInitiliazed){
             
             let res = await fetch('http://127.0.0.1:8080/todo');
             let data = await res.json();
             self.todoData = data;
             console.log("Todo service successfully initialized");
             self.dataInitiliazed = true;
            //  console.log(self.todoApp);
        }else{
            console.warn("Todo service has already been initialized");
        }
    };
    self.initializeData();

    self.getTodoData = function(){
        if(self.dataInitiliazed) return self.todoData;
        console.error("Todo data hasnt been initialized");
        // self.getTodoData();
        return -69;
    }

    self.postToServer = async taskBody =>{
        let res = await fetch('http://127.0.0.1:8080/create-task', {
            method:"POST",
            body: JSON.stringify({
                body:taskBody,
                isDone:true,
                creationDatetime:''
            }),
            headers:{
                "Content-type": "application/json"
            }
        });
        let data = await res.json();
        self.dataInitiliazed = false;
        self.initializeData();
        return data;
    }

    self.updateTodo = async todoObj =>{
        let res = await fetch(`http://127.0.0.1:8080/update-task/${todoObj.id}`, {
            method:"POST",
            body: JSON.stringify(todoObj),
            headers:{
                "Content-type": "application/json"
            }
        });
        let data = await res.json();
        self.dataInitiliazed = false;
        self.initializeData();
        return data;
    }
})