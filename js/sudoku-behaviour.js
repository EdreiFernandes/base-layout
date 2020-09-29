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
  game_board = document.getElementById("game_board");
  createGameBoard();

  game_board.addEventListener("click", function (e) {
    var cell_id = e.target.id;
    deselectPreviousCell();
    selectCell(cell_id);
    selected_cell_id = cell_id;
  });
};

// initialize gameboard
function createGameBoard() {
  var html = '<div class="row">';
  game.forEach(function (square_values, square_index) {
    html += createBoardSquare(square_values, square_index);
  });
  html += "</div>";

  game_board.innerHTML += html;
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
      var cell_class = document.getElementById(id).classList;
      if (_turn_on) {
        if (!cell_class.contains("selected")) {
          cell_class.add("near-selected");
        }
      } else {
        if (cell_class.contains("near-selected")) {
          cell_class.remove("near-selected");
        }
      }
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
      var cell_class = document.getElementById(id).classList;

      if (_turn_on) {
        if (!cell_class.contains("selected")) {
          cell_class.add("near-selected");
        }
      } else {
        if (cell_class.contains("near-selected")) {
          cell_class.remove("near-selected");
        }
      }
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
      var cell_class = document.getElementById(id).classList;
      if (_turn_on) {
        if (!cell_class.contains("selected")) {
          cell_class.add("near-selected");
        }
      } else {
        if (cell_class.contains("near-selected")) {
          cell_class.remove("near-selected");
        }
      }
    });
  }
}
