var board_game = [
  [4, 5, 6],
  [7, 8, 9],
];

window.onload = function () {
  board_game.forEach(function (row) {
    // row.forEach(function (cell) {});
  });
};

function changeValue(_row, _col) {
  var cell_class = document.getElementById("cell" + _row + _col).classList;
  var row_class = document.getElementById("row" + _row).classList;

  if (cell_class[1] == "selected") {
    cell_class.remove("selected");
    row_class.remove("selected");
  } else {
    cell_class.add("selected");
    row_class.add("selected");
  }
}
