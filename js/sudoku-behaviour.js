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

window.onload = function () {
  game_board = document.getElementById("game_board");
  createGameBoard();
};

function createGameBoard() {
  var html = '<div class="row">';
  game.forEach(function (square_values) {
    html += createBoardSquare(square_values);
  });
  html += "</div>";

  game_board.innerHTML += html;
}

function createBoardSquare(_square_values) {
  var html = '<div div id = "board_square" class="col-4 border border-dark">';

  html += '   <div class="row">';
  _square_values.forEach(function (row_value) {
    row_value.forEach(function (cell_value) {
      var value = cell_value;
      if (cell_value == 0) value = " ";
      html += '     <div class="col-4 border board-cell">' + value + "</div>";
    });
  });
  html += "   </div>";
  html += " </div>";

  return html;
}

// function changeValue(_row, _col) {
//   var board_game = [
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

//   board_game.forEach(function (row) {
//     // row.forEach(function (cell) {});
//   });

//   var cell_class = document.getElementById("cell" + _row + _col).classList;
//   var row_class = document.getElementById("row" + _row).classList;

//   if (cell_class[1] == "selected") {
//     cell_class.remove("selected");
//     row_class.remove("selected");
//   } else {
//     cell_class.add("selected");
//     row_class.add("selected");
//   }
// }
