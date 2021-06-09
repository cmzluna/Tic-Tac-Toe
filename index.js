/*

FLIPCARD
https://www.w3schools.com/howto/howto_css_flip_card.asp

checkbox hack -> to simulate an actual click event using only CSS 
https://stackoverflow.com/questions/13630229/can-i-have-an-onclick-effect-in-css

*/

//// GAMEBOARD
const gameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const setBox = (index, player) => {
    board[index] = player;
  };

  const getBox = () => {};

  const reset = () => {
    board.fill("", 0, board.length); // using fill to retain array's reference
  };

  return { setBox, getBox, reset, board };
})();

//// DISPLAY
const displayController = (function () {
  const boxes = document.querySelectorAll(".box");
  // restart button reset coming from controller

  // updateBoard (get gameBoard array and renders its values)
  const updateBoard = () => {
    gameBoard.board.forEach((el, index) => {
      boxes[index].textContent = el;
    });
  };

  // resultMessage  displays result message

  return { updateBoard };
})();

//// MAIN CONTROLLER
const mainController = (function () {
  const boardElem = document.getElementById("board");
  const restartBtn = document.getElementById("restart-btn");

  const player = (type) => {
    this.type = type;

    const getType = () => {
      return type;
    };

    return { getType };
  };

  const player1 = player("X");
  const player2 = player("O");
  let currentPlayer = player1.getType();

  // add event listeners
  boardElem.addEventListener("click", (e) => {
    // event delegation
    const clickedBox = e.target; // get ID of clicked box

    if (gameBoard.board[clickedBox["id"]] === "") {
      startPlay(clickedBox, clickedBox["id"]);
      changePlayer();
    }
  });
  // don't do anything if gameIsOver or if clicked on same box
  // listeners should have update board

  restartBtn.addEventListener("click", (e) => {
    // reset board
    gameBoard.reset();
    console.log(gameBoard.board);
    displayController.updateBoard();
    // reset players
    currentPlayer = player1.getType();

    // Result message

    // Turn message
  });

  const startPlay = (clickedBox) => {
    console.log("clicked on " + clickedBox["id"]);
    gameBoard.setBox(clickedBox["id"], currentPlayer);
    console.log("current player: " + currentPlayer);
    displayController.updateBoard();
  };

  const renderBoard = () => {
    // render values from board
  };

  const changePlayer = () => {
    currentPlayer === "X" ? (currentPlayer = "O") : (currentPlayer = "X");
  };
})();
