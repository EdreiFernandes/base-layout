var clicks = 0;

function atualiza() {
  clicks++;
  TurnOn("bottom", "left");
  TurnOff("middle");
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
