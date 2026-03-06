indexTodo = 1

function addTodo() {
    // alert("Hi there")
    //read the content of the input box
    //create a new todo on the html dom
    // clears the input box

    const content = document.getElementById("todoInput")
    const todo = content.value
    if (todo == "") {
        return 
    }
    console.log(todo)

    const newDiv = document.createElement("div")
    // newDiv.innerHTML = todo;

    const todoSpan = document.createElement("span")
    todoSpan.innerHTML = todo

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete Todo"
    deleteButton.setAttribute("onclick", "deleteTodo(" + indexTodo + ")")
    
    indexTodo += 1;

    newDiv.appendChild(todoSpan)
    newDiv.appendChild(deleteButton)

    const parentDiv = document.getElementById("todos");
    parentDiv.appendChild(newDiv)
}

function deleteTodo(idx) {
    alert(`Delete Todo Called with idx ${idx}`)
    const divElement = document.getElementById("todo")
}