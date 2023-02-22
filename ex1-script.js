window.addEventListener("load", start);

function start() {
  document
    .querySelector("#orange_container")
    .addEventListener("click", orangeJump);
}
function orangeJump() {
  console.log("orangeJump");

  document.querySelector("#orange_container").classList.add("jump");
}
