const switcher = document.getElementById("switch");
const bulbs = document.querySelectorAll(".bulb");
const body = document.querySelector("body");
const bulb_color_array = ["yellow", "green", "red", "blue", "yellow", "red", "blue"];

const toggleSwitch = function() {
  if (switcher.textContent.includes("OFF")) {
    switcher.textContent = "Lights ON";
    for (var i=0; i < bulbs.length; i++) {
      bulbs[i].classList.add(bulb_color_array[i]);
    }
    body.classList.add("dark-body");
  } else {
    switcher.textContent = "Lights OFF";
    for (var i=0; i < bulbs.length; i++) {
      bulbs[i].classList.remove(bulb_color_array[i]);
    }
    body.classList.remove("dark-body");
  }
}

switcher.addEventListener('click', toggleSwitch);
