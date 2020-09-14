var clicks = 0;
var text = "Uhm";

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
    if (text.includes("Uhm")) text = "UUHHHMMMM!!!!";
    TurnOn("middle", "center");
    TurnOff("top");
    clicks = 0;
  }
}

function TurnOn(_div, _position) {
  document.getElementById(_div + "-text").innerHTML = text;
  var div = document.getElementById(_div);
  div.className = "text-" + _position;
  div.hidden = false;
  UpdateText();
}

function TurnOff(_div) {
  document.getElementById(_div).hidden = true;
}

function UpdateText() {
  if (text.includes("Uhm")) {
    text = text + "m";
  } else {
    text = "Você não cansa?";
    if (clicks == 1) {
      text = "Pode ir embora já";
    } else if (clicks == 2) {
      text = "Já tá testado";
    } else if (clicks == 3) {
      text = "Alanna?!";
    } else if (clicks == 4) {
      text = "O que você tá esperando?";
    } else if (clicks == 5) {
      text = "Achou que ia acontecer algo? Vai não!";
    } else if (clicks == 6) {
      text = "Pode parar";
    } else if (clicks == 7) {
      text = "Tá, tá bom então";
    } else if (clicks == 7) {
      text = "Amo você, minha bonita";
    }
  }
}
