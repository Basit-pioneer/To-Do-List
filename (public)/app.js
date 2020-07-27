function addTodo(){
    var todo = document.getElementById("todo_item")
    var li = document.createElement("li")
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)

    var delbtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delbtn.appendChild(delText)
    li.appendChild(delbtn)
    delbtn.setAttribute("class","delColor")
    delbtn.setAttribute("onclick","delItem(this)")

    var editbtn = document.createElement("button")  
    var editText = document.createTextNode("EDIT")
    editbtn.appendChild(editText)
    li.appendChild(editbtn)
    editbtn.setAttribute("class","delColor")
    editbtn.setAttribute("onclick","editItem(this)")
    
    
    list.appendChild(li)
    todo.value =  ""
    console.log(li)
}

function delItem(a){
    a.parentNode.remove()
}
function delAll(){
    list.innerHTML = ""
}

function editItem(e){
    var inpt = prompt(e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = inpt

}