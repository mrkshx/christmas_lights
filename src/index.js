const switcher = document.getElementById("switch");

const toggleSwitch = function() {
  if (switcher.textContent.includes("OFF")) {
    switcher.textContent = "Lights ON";
  } else {
    switcher.textContent = "Lights OFF";
  }
}

switcher.addEventListener('click', toggleSwitch);
