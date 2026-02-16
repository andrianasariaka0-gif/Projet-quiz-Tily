const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addtodo);

function addtodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  /*const completedButton = document.createElement("button");
  completedButton.innerHTML =  <button type="submit">check</button> ;
  completedButton.classList.add("complet-btn");
  todoDiv.appendChild(completedButton);*/

  // const trashButton = document.createElement("button");
  // trashButton.innerHTML = <button class="todo-list" type="reset"></button>;
  // trashButton.classList.add("trash-btn");
  // todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}


