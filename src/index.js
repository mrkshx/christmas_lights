const switcher = document.getElementById("switch");
const bulbs = document.querySelectorAll(".bulb");
const bulb_color_array = ["yellow", "green", "red", "blue", "yellow", "red", "blue"];

const toggleSwitch = function() {
  if (switcher.textContent.includes("OFF")) {
    switcher.textContent = "Lights ON";
    for (var i=0; i < bulbs.length; i++) {
      bulbs[i].classList.add(bulb_color_array[i]);
    }
  } else {
    switcher.textContent = "Lights OFF";
    for (var i=0; i < bulbs.length; i++) {
      bulbs[i].classList.remove(bulb_color_array[i]);
    }
  }
}

switcher.addEventListener('click', toggleSwitch);
