var clicks = 0;

function atualiza() {
  clicks++;
  if (clicks == 1) {
    TurnOn("middle", "right");
  } else if (clicks == 2) {
    TurnOn("bottom", "right");
    TurnOff("middle");
  } else if (clicks == 3) {
    TurnOn("top", "left");
    TurnOff("bottom");
  } else if (clicks == 4) {
    TurnOn("bottom", "center");
    TurnOff("top");
  } else if (clicks == 5) {
    TurnOn("top", "right");
    TurnOff("bottom");
  } else if (clicks == 6) {
    TurnOn("middle", "left");
    TurnOff("top");
  } else if (clicks == 7) {
    TurnOn("bottom", "left");
    TurnOff("middle");
  } else if (clicks == 8) {
    TurnOn("top", "center");
    TurnOff("bottom");
  } else {
    TurnOn("middle", "center");
    TurnOff("top");
    clicks = 0;
  }
}

function TurnOn(_div, _position) {
  document.getElementById(_div + "-text").innerHTML = clicks;
  var div = document.getElementById(_div);
  div.className = "text-" + _position;
  div.hidden = false;
}

function TurnOff(_div) {
  document.getElementById(_div).hidden = true;
}
