const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  // localStorage.setItem("todos", toDos); text로 저장됨
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array로 저장
}

function removeToDo(event) {
  const li = event.target.parentElement; // parent tag를 지정
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id, 10)); //typeof todo.id(number)고, li.i(string)임
  saveToDos(); //filter하고 array 다시 만들기
}

function paintToDo(newToDoObject) {
  const li = document.createElement("li");
  li.id = newToDoObject.id;
  const span = document.createElement("span");
  span.innerText = newToDoObject.text;
  const button = document.createElement("button");
  button.innerText = "✔️";
  button.addEventListener("click", removeToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ""; //1. empty input
  const newToDoObject = {
    text: newToDo,
    id: Date.now()
  };
  toDos.push(newToDoObject); //2. toDos Array에 newToDo 넣기
  paintToDo(newToDoObject); //3. newToDo를 화면에 paint하기
  saveToDos(); // 4. toDos(text)를 localstorage에 저장하기
}
toDoForm.addEventListener("submit", handleToDoSubmit); //submit 하면 paint

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //array의 모든 값을 차례로 iterate
}
