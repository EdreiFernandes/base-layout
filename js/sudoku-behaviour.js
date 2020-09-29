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
  game_board.addEventListener("click", function (e) {
    selectCell(e.target.id);
  });
  createGameBoard();
};

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

    if (selected_cell_id != null) {
      document.getElementById(selected_cell_id).classList.remove("selected");
      var splited_selected_cell_id = selected_cell_id.split("_");
      deselectSquare(splited_selected_cell_id[1]);
      deselectRow(splited_selected_cell_id[1], splited_selected_cell_id[2]);
    }

    var splited_id = _id.split("_");
    selectSquare(splited_id[1]);
    selectRow(splited_id[1], splited_id[2]);
  }
  selected_cell_id = _id;
}

function selectSquare(_square_index) {
  game[_square_index].forEach(function (row, row_index) {
    row.forEach(function (cell, cell_index) {
      var id = "cell_" + _square_index + "_" + row_index + "_" + cell_index;
      var cell_class = document.getElementById(id).classList;
      if (!cell_class.contains("selected")) {
        cell_class.add("nier-selected");
      }
    });
  });
}

function deselectSquare(_square_index) {
  game[_square_index].forEach(function (row, row_index) {
    row.forEach(function (cell, cell_index) {
      var id = "cell_" + _square_index + "_" + row_index + "_" + cell_index;
      var cell_class = document.getElementById(id).classList;
      if (cell_class.contains("nier-selected")) {
        cell_class.remove("nier-selected");
      }
    });
  });
}

function selectRow(_square_index, _row_index) {
  // 0 - 1- 2
  if (_square_index < 3) {
    for (var i = 0; i < 3; i++) {
      game[i][_row_index].forEach(function (cell, cell_index) {
        var id = "cell_" + i + "_" + _row_index + "_" + cell_index;
        var cell_class = document.getElementById(id).classList;
        if (!cell_class.contains("selected")) {
          cell_class.add("nier-selected");
        }
      });
    }
  } else {
    // 3 - 4 - 5
    if (_square_index < 6) {
      for (var i = 3; i < 6; i++) {
        game[i][_row_index].forEach(function (cell, cell_index) {
          var id = "cell_" + i + "_" + _row_index + "_" + cell_index;
          var cell_class = document.getElementById(id).classList;
          if (!cell_class.contains("selected")) {
            cell_class.add("nier-selected");
          }
        });
      }
    } else {
      // 6 - 7 - 8
      for (var i = 6; i < 9; i++) {
        game[i][_row_index].forEach(function (cell, cell_index) {
          var id = "cell_" + i + "_" + _row_index + "_" + cell_index;
          var cell_class = document.getElementById(id).classList;
          if (!cell_class.contains("selected")) {
            cell_class.add("nier-selected");
          }
        });
      }
    }
  }
}

function deselectRow(_square_index, _row_index) {
  // 0 - 1- 2
  if (_square_index < 3) {
    for (var i = 0; i < 3; i++) {
      game[i][_row_index].forEach(function (cell, cell_index) {
        var id = "cell_" + i + "_" + _row_index + "_" + cell_index;
        var cell_class = document.getElementById(id).classList;
        if (cell_class.contains("nier-selected")) {
          cell_class.remove("nier-selected");
        }
      });
    }
  } else {
    // 3 - 4 - 5
    if (_square_index < 6) {
      for (var i = 3; i < 6; i++) {
        game[i][_row_index].forEach(function (cell, cell_index) {
          var id = "cell_" + i + "_" + _row_index + "_" + cell_index;
          var cell_class = document.getElementById(id).classList;
          if (cell_class.contains("nier-selected")) {
            cell_class.remove("nier-selected");
          }
        });
      }
    } else {
      // 6 - 7 - 8
      for (var i = 6; i < 9; i++) {
        game[i][_row_index].forEach(function (cell, cell_index) {
          var id = "cell_" + i + "_" + _row_index + "_" + cell_index;
          var cell_class = document.getElementById(id).classList;
          if (cell_class.contains("nier-selected")) {
            cell_class.remove("nier-selected");
          }
        });
      }
    }
  }
}

//ativa column

// var row = splited_id[2];
// var cell = splited_id[3];
// var row_class = document.getElementById("row" + _row).classList;
