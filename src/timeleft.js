const clockTitle = document.querySelector("#timeleft");

function getSecondsToTomorrow() {
  let now = new Date();

  // tomorrow date
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now; // difference in ms
  const diffTime = new Date(diff).toISOString().slice(11, 19);
  clockTitle.innerText = `${diffTime} until tomorrow`;
}
getSecondsToTomorrow();
setInterval(getSecondsToTomorrow, 1000);
