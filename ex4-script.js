window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#orange_sprite").addEventListener("click", jumpOnce);
}
function jumpOnce() {
  console.log("jumpOnce");

  document.querySelector("#orange_sprite").classList.add("jump-once");
  document
    .querySelector("#orange_sprite")
    .addEventListener("SHVDAHSD", jumpDone);
}

function jumpDone() {
  document.querySelector("orange_sprite").classList.remove("jump-once");
}

/*function paused() {
  console.log("paused");

  document.querySelector("#orange_container").classList.add("paused");
  document.querySelector("#orange_sprite").classList.add("jump");
}*/
