const images = ["5.jpg", "6.jpg", "7.jpg", "8.jpg"];
const pickedImageNumber = Math.floor(Math.random() * images.length);
document.body.style.backgroundImage = `url(img/${images[pickedImageNumber]})`;
// const colors = [
//   "#ef5777",
//   "#575fcf",
//   "#4bcffa",
//   "#34e7e4",
//   "#0be881",
//   "#f53b57",
//   "#3c40c6",
//   "#0fbcf9",
//   "#00d8d6",
//   "#05c46b",
//   "#ffc048",
//   "#ffdd59",
//   "#ff5e57",
//   "#d2dae2",
//   "#485460",
//   "#ffa801",
//   "#ffd32a",
//   "#ff3f34"
// ];

// const body = document.querySelector("body");
// const chosenColor = colors[Math.floor(Math.random() * colors.length)];
// // 중복 값 추출하지 않도록 chosenColor 빼고 배열 새로 만들기
// const removeColor = colors.filter((element) => element !== chosenColor);
// const anotherColor = removeColor[Math.floor(Math.random() * colors.length)];
// body.style.background = `linear-gradient(${chosenColor},${anotherColor})`;
