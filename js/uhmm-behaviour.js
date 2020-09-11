var clicks = 0;

function atualiza() {
  clicks++;
  document.getElementById("top-text").innerHTML = clicks;
  document.getElementById("top").hidden = false;

  //   if (clicks == 0) {
  //     document.getElementById("middle").hidden = true;
  //     document.getElementById("middle").className = "text-left";
  //     document.getElementById("top").hidden = false;
  //   } else if (clicks == 1) {
  //     document.getElementById("top").hidden = true;
  //     document.getElementById("top").className = "text-right";
  //     document.getElementById("bottom").hidden = false;
  //   } else if (clicks == 2) {
  //     document.getElementById("bottom").hidden = true;
  //     document.getElementById("bottom").className = "text-left";
  //     document.getElementById("top").hidden = false;
  //   } else {
  //     document.getElementById("middle").hidden = false;
  //   }
}
