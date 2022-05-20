function clock() {
  const time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  document.getElementById("hr").textContent = hours;
  document.getElementById("min").textContent = minutes;
  document.getElementById("sec").textContent = seconds;

}
var interval = setInterval(clock, 1000);
