function addTodo(){
    var todo = document.getElementById("todo");
    var list = document.getElementById("list");
    var li = document.createElement("li");
    var text = document.createTextNode(todo.value);
    li.appendChild(text);
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    delBtn.setAttribute("onclick","deltodo()");
    delBtn.setAttribute("class","del-btn")
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editTodo()");
    editBtn.setAttribute("class","edit-btn")
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    li.setAttribute("class","li-style")
    list.appendChild(li);
    todo.value=""
    
}


function editTodo(){
    var oldValue = event.target.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter updated Value", oldValue);
    console.log(editValue);
    event.target.parentNode.firstChild.nodeValue = editValue;

}


function deltodo(){
    event.target.parentNode.remove()

}

function deleteAll(){
    var list = document.getElementById("list");
    list.innerHTML=""
}
