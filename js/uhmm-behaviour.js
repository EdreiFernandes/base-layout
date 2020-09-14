var clicks = 0;
var text = "Uhm";
// var text = "OLA";

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
  UpdateText();
  document.getElementById(_div + "-text").innerHTML = text;

  var div = document.getElementById(_div);
  div.className = "text-" + _position;
  div.hidden = false;
}

function TurnOff(_div) {
  document.getElementById(_div).hidden = true;
}

function UpdateText() {
  if (text.includes("Uhm")) {
    text = text + "m";
    if (clicks > 8) text = "UUHHMMMM!!!!";
  } else {
    if (clicks == 1) {
      text = "<i class='far fa-meh-rolling-eyes'></i><br/>Você não cansa?";
    } else if (clicks == 2) {
      text = "Já tá testado";
    } else if (clicks == 3) {
      text = "<i class='far fa-grimace'></i><br/>Pode ir embora já";
    } else if (clicks == 4) {
      text = "<i class='far fa-meh'></i><br/>Alanna?!";
    } else if (clicks == 5) {
      text = "O que você tá esperando?";
    } else if (clicks == 6) {
      text =
        "<i class='far fa-smile-beam'></i><br/>Achou que ia acontecer algo? Vai não!";
    } else if (clicks == 7) {
      text = "Pode parar!";
    } else if (clicks == 8) {
      text = "<i class='far fa-angry'></i><br/>Tá, tá bom então";
    } else {
      text = "<i class='far fa-heart'></i><br/>Amo você, minha bonita";
    }
  }
}
