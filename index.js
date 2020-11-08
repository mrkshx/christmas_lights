const switcher = document.getElementById("switch");
const bulbs = document.querySelectorAll(".bulb");
const body = document.querySelector("body");

const toggleSwitch = function() {
  if (switcher.textContent.includes("OFF")) {
    switcher.textContent = "Lights ON";
    for (var i=0; i < bulbs.length; i++) {
      bulbs[i].classList.remove("paused");
    }
    body.classList.add("dark-body");
  } else {
    switcher.textContent = "Lights OFF";
    for (var i=0; i < bulbs.length; i++) {
      bulbs[i].classList.add("paused");
    }
    body.classList.remove("dark-body");
  }
}

switcher.addEventListener('click', toggleSwitch);
