var game_board;
var game = [
  [1, 2, 3],
  [4, 5, 6],
  [4, 5, 6],
];

window.onload = function () {
  game_board = document.getElementById("game_board");
  createGameBoard();
};

function createGameBoard() {
  createBoardRow();
}

function createBoardRow() {
  var html = '<createBoardSquare id="board_row" class="row">';
  html += createBoardSquare(1);
  html += createBoardSquare(2);
  html += createBoardSquare(3);
  html += "</div>";

  game_board.innerHTML += html;
}

function createBoardSquare(_id) {
  var html =
    '<div div id = "board_square_' +
    _id +
    '" class="col-4 border border-primary">';

  html += '   <div class="row">';
  game.forEach(function (row_value) {
    row_value.forEach(function (cell_value) {
      html +=
        '     <div class="col-4 border border-success">' +
        cell_value +
        "</div>";
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
