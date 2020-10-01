var game_board;
var game = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
];
var selected_cell_id = null;

window.onload = function () {
  start();
  update();
};

function start() {
  randomizeGame();
  createGameBoard();
}
function update() {
  keyboardListener();
  onMouseClick();
}

// initialize gameboard
function createGameBoard() {
  game_board = document.getElementById("game_board");

  var html = '<div class="row">';
  game.forEach(function (square_values, square_index) {
    html += createBoardSquare(square_values, square_index);
  });
  html += "</div>";

  game_board.innerHTML += html;
}

function randomizeGame() {
  var i = 0;
  while (i < 38) {
    var square = Math.floor(Math.random() * 9);
    var row = Math.floor(Math.random() * 3);
    var cell = Math.floor(Math.random() * 3);
    var value = Math.floor(Math.random() * 10);

    if (game[square][row][cell] == 0) {
      if (!checkInSquare(square, value)) {
        if (!checkInRow(square, row, value)) {
          if (!checkInColumn(square, cell, value)) {
            game[square][row][cell] = value;
            i++;
          }
        }
      }
    }
  }
}

function createBoardSquare(_square_values, _square_index) {
  var html =
    '<div id="board_square_' +
    _square_index +
    '" class="col-4 border border-dark">';

  html += '   <div class="row">';
  _square_values.forEach(function (row_value, row_index) {
    row_value.forEach(function (cell_value, cell_index) {
      var value = cell_value;
      if (cell_value == 0) value = " ";

      var id = "cell_" + _square_index + "_" + row_index + "_" + cell_index;

      html +=
        '     <div id="' +
        id +
        '" class="col-4 border board-cell">' +
        value +
        "</div>";
    });
  });
  html += "   </div>";
  html += " </div>";

  return html;
}

function keyboardListener() {
  document.querySelector("body").addEventListener("keydown", function (event) {
    var key = event.key;
    var splited_id = selected_cell_id.split("_");
    var square = splited_id[1];
    var row = splited_id[2];
    var cell = splited_id[3];

    if (key > 0 && key < 10) {
      document.getElementById(selected_cell_id).innerHTML = key;

      if (checkInSquare(square, key)) {
        alert("erro s");
      }
      if (checkInRow(square, row, key)) {
        alert("erro r");
      }
      if (checkInColumn(square, cell, key)) {
        alert("erro c");
      }

      game[square][row][cell] = key;
    } else if (key == "Backspace" || key == "Delete") {
      document.getElementById(selected_cell_id).innerHTML = "";
      game[square][row][cell] = 0;
    } else if (key == "ArrowUp") {
      var next_square = square;
      var next_row = row - 1;
      var next_cell = cell;

      if (next_row < 0) {
        next_square = square - 3;
        if (next_square < 0) {
          next_square = square * 1 + 6;
        }
        next_row = 2;
      }

      var cell_id = "cell_" + next_square + "_" + next_row + "_" + next_cell;
      updateSelected(cell_id);
    } else if (key == "ArrowDown") {
      var next_square = square;
      var next_row = row * 1 + 1;
      var next_cell = cell;

      if (next_row > 2) {
        next_square = square * 1 + 3;
        if (next_square > 8) {
          next_square = square - 6;
        }
        next_row = 0;
      }

      var cell_id = "cell_" + next_square + "_" + next_row + "_" + next_cell;
      updateSelected(cell_id);
    } else if (key == "ArrowLeft") {
      var next_square = square;
      var next_row = row;
      var next_cell = cell - 1;

      if (next_cell < 0) {
        next_square = square - 1;
        if (next_square < 0) {
          next_square = 8;
        }
        next_cell = 2;
      }

      var cell_id = "cell_" + next_square + "_" + next_row + "_" + next_cell;
      updateSelected(cell_id);
    } else if (key == "ArrowRight") {
      var next_square = square;
      var next_row = row;
      var next_cell = cell * 1 + 1;

      if (next_cell > 2) {
        next_square = square * 1 + 1;
        if (next_square > 8) {
          next_square = 0;
        }
        next_cell = 0;
      }

      var cell_id = "cell_" + next_square + "_" + next_row + "_" + next_cell;
      updateSelected(cell_id);
    }
  });
}
function onMouseClick() {
  game_board.addEventListener("click", function (e) {
    updateSelected(e.target.id);
  });
}

function updateSelected(_cell_id) {
  deselectPreviousCell();
  selectCell(_cell_id);
  selected_cell_id = _cell_id;
}

function selectCell(_id) {
  var cell_class = document.getElementById(_id).classList;

  if (!cell_class.contains("selected")) {
    cell_class.add("selected");

    toggleNear(_id, true);
  }
}
function deselectPreviousCell() {
  if (selected_cell_id != null) {
    document.getElementById(selected_cell_id).classList.remove("selected");
    toggleNear(selected_cell_id, false);
  }
}

// highlight nearby cells
function toggleNear(_id, _turn_on) {
  var splited_id = _id.split("_");
  var square = splited_id[1];
  var row = splited_id[2];
  var column = splited_id[3];

  toggleSquare(square, _turn_on);
  toggleRow(square, row, _turn_on);
  toggleColumn(square, column, _turn_on);
}
function toggleSquare(_square_index, _turn_on) {
  game[_square_index].forEach(function (row, row_index) {
    row.forEach(function (cell, cell_index) {
      var id = "cell_" + _square_index + "_" + row_index + "_" + cell_index;
      toggleClass(id, _turn_on);
    });
  });
}
function toggleRow(_square_index, _row_index, _turn_on) {
  if (_square_index < 3) {
    _square_index = 0;
  } else if (_square_index < 6) {
    _square_index = 3;
  } else {
    _square_index = 6;
  }

  for (var i = _square_index; i < _square_index + 3; i++) {
    game[i][_row_index].forEach(function (cell, cell_index) {
      var id = "cell_" + i + "_" + _row_index + "_" + cell_index;
      toggleClass(id, _turn_on);
    });
  }
}
function toggleColumn(_square_index, _cell_index, _turn_on) {
  if (_square_index == 0 || _square_index == 3 || _square_index == 6) {
    _square_index = 0;
  } else if (_square_index == 1 || _square_index == 4 || _square_index == 7) {
    _square_index = 1;
  } else {
    _square_index = 2;
  }

  for (var i = _square_index; i < _square_index + 7; i += 3) {
    game[i].forEach(function (row, row_index) {
      var id = "cell_" + i + "_" + row_index + "_" + _cell_index;
      toggleClass(id, _turn_on);
    });
  }
}
function toggleClass(_id, _turn_on) {
  var cell_class = document.getElementById(_id).classList;

  if (_turn_on) {
    if (!cell_class.contains("selected")) {
      cell_class.add("near-selected");
    }
  } else {
    if (cell_class.contains("near-selected")) {
      cell_class.remove("near-selected");
    }
  }
}

// check value
function checkInSquare(_square_index, _key) {
  for (var i = 0; i < 3; i++) {
    if (game[_square_index][i].includes(_key)) {
      return true;
    }
  }
  return false;
}
function checkInRow(_square_index, _row_index, _key) {
  if (_square_index < 3) {
    _square_index = 0;
  } else if (_square_index < 6) {
    _square_index = 3;
  } else {
    _square_index = 6;
  }

  for (var i = _square_index; i < _square_index + 3; i++) {
    if (game[i][_row_index].includes(_key)) {
      return true;
    }
  }
  return false;
}
function checkInColumn(_square_index, _cell_index, _key) {
  if (_square_index == 0 || _square_index == 3 || _square_index == 6) {
    _square_index = 0;
  } else if (_square_index == 1 || _square_index == 4 || _square_index == 7) {
    _square_index = 1;
  } else {
    _square_index = 2;
  }

  for (var i = _square_index; i < _square_index + 7; i += 3) {
    for (var j = 0; j < 3; j++) {
      if (game[i][j][_cell_index] == _key) {
        return true;
      }
    }
  }
  return false;
}
