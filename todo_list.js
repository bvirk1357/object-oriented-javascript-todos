var Task = function(id, desc) {
  this.id = id;
  this.description = desc;
  this.completed = false;
}

Task.prototype.complete = function(){
  this.completed = true;
}


var TodoList = function() {
	this.tasks = [];
};

TodoList.prototype.add = function(name) {
  newTask = new Task(
    this.tasks.length + 1,
    name
  )
  this.tasks.push (newTask);
};

TodoList.prototype.list = function() {
  return this.tasks
};

TodoList.prototype.remove = function(item) {
  index = this.tasks.indexOf(item)
  this.tasks.splice(index,1)
}

// Todolist.tasks.prototype.complete = funcion.....
// Driver code


//var todoList = newTodoList();

// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks; //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];
//console.log(groceryList.taskList[0])
breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
