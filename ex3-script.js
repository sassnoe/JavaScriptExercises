window.addEventListener("load", start);

function start() {
  document.querySelector("#orange_container").classList.add("move");

  document.querySelector("#orange_container").addEventListener("click", paused);
}

function paused() {
  console.log("paused, jumping!");

  document.querySelector("#orange_container").classList.add("paused");
  document.querySelector("#orange_sprite").classList.add("jump");
}
