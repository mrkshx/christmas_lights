const switcher = document.getElementById("switch");
const bulbs = document.querySelectorAll(".bulb");
const body = document.querySelector("body");

for (var i=0; i < bulbs.length; i++) {
  bulbs[i].classList.remove("paused");
  let bulb_rotation = Math.floor(Math.random() * 21) - 20;
  bulbs[i].style.setProperty("transform", `rotate(${bulb_rotation}deg)`, "important");
}


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
