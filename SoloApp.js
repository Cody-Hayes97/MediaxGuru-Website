function scrollAppear() {
  var aboutText = document.querySelector(".about-span");
  var aboutPosition = aboutText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2;

  if (aboutPosition < screenPosition) {
    aboutText.classList.add("about-appear");
  }
}

window.addEventListener("scroll", scrollAppear);

function scaleUp(obj, size) {
  obj.style.fontSize = size;
}

function hoverOver(obj, size) {
  obj.style.opacity = 0.5;
}

function vidDrop() {
  var videos = document.querySelectorAll(".videos");
  videos[0].classList.toggle("hidden");
}
