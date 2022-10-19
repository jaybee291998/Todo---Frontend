todoApp.service('todoService', function(){
    let self = this;
    self.todoData;
    self.dataInitiliazed = false;
    self.initializeData = async function(){             
        let res = await fetch('http://127.0.0.1:8080/todo');
        let data = await res.json();
        self.todoData = data;
        console.log("Todo service successfully initialized");
        self.dataInitiliazed = true;
        return data;
    };

    self.getTodoData = function(){
        if(self.dataInitiliazed) return self.todoData;
        console.error("Todo data hasnt been initialized");
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
        self.initializeData();
        return data;
    }

    self.updateTodo = async todoObj =>{
        let res = await fetch(`http://127.0.0.1:8080/update-task/${todoObj.id}`, {
            method:"PUT",
            body: JSON.stringify(todoObj),
            headers:{
                "Content-type": "application/json"
            }
        });
        let data = await res.json();
        return data;
    }

    self.findTodoObjById = id => {
       let filteredData = self.todoData.filter(todo => todo.id === id);
       if(filteredData.length >= 1) return [...filteredData][0];
       console.error("No such task with id " + id)
    }

    self.updateTaskDone = async id =>{
        let todoObj = self.findTodoObjById(id);

        todoObj.done = !todoObj.done;

        await self.updateTodo(todoObj);
    }

    self.deleteTask = async id => {
        await fetch(`http://127.0.0.1:8080/delete-todo/${id}`, {
            method:"DELETE"
        })
    }
    // initialize data upon creation
    self.initializeData();
})