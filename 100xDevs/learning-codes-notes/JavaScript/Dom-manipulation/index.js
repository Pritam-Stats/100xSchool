let todoIndex = 1;
function addToDo() {
    //read the todo from the input
    //crates a new todo on the html dom
        //create a new div 
        // put that div to a parent div
    // clears the todo input

    const element = document.getElementById("todoInput"); //this element will return a input object
    const todo = element.value;
    element.value = ""; //read the value set it to empty

    if (todo === "") {
        return 
    }
    
    // now we have to put the value inside the dom
    // lets tell js to create a new div for the todo

    const todoDiv = document.createElement("div")
    todoDiv.setAttribute("id", "todo"+todoIndex)
    // newDiv.innerHTML = todo; //so we have created a new div and told to add the todo inside that div

    // now we want to put a span element with the todo and a button to delete
    const todoSpan = document.createElement("span")
    todoSpan.innerHTML = todoIndex + ". " + todo;
    todoDiv.appendChild(todoSpan)

    //todo button
    const delTodoButton = document.createElement("button")
    delTodoButton.innerHTML = "Del";
    todoDiv.appendChild(delTodoButton);
    
    todoDiv.setAttribute("style", "padding: 7px")
    

    // now this haven't added in the real page because we haven't yet told where to put this newDiv in the DOM
    // let's create a parent div where we will put all the todos inside
    const parentDiv = document.getElementById("todos") //we are asking the document to first find the parentDiv element 
    parentDiv.appendChild(todoDiv);  //now we are asking parent div, add the new child

    //start del functionality
    delTodoButton.setAttribute("onclick", `delTodo(${todoIndex})`);
    delTodoButton.setAttribute("style", "background-color: orange; margin-left: 9px; border: solid 1px black; border-radius: 25%; cursor: pointer");
    todoIndex += 1;
    
    
    //now we have to define delTodo()

}

function delTodo(idx) {
    const divToDel = document.getElementById("todo"+idx);
    divToDel.parentElement.removeChild(divToDel);
    
}