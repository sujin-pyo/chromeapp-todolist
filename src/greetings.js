const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector("#todo");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 1. event가 원래 하는 행동(페이지 새로고침) 멈추기
  loginForm.classList.add(HIDDEN_CLASSNAME); // 2. form을 다시 숨기기
  const username = loginInput.value; // 3. loginInput.value를 username이라는 변수로 저장
  localStorage.setItem(USERNAME_KEY, username); // 4. username 값을 username이라는 key와 함께 local storage에 저장
  paintGreetings(username); // 5. paintGreetings 함수를 호출
}
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
